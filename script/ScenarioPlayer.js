/**
 * scenarioPlayer.js
 * Handles the execution of scripted AI monologues and interacts with localStorage.
 */

// --- localStorage Utilities ---
function getStorageItem(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting item ${key} from localStorage:`, error);
    return null;
  }
}

function setStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting item ${key} in localStorage:`, error);
  }
}

// --- Scenario Initial Data (to be fetched) ---
let scenarioInitialData = null;

async function fetchInitialData() {
  if (scenarioInitialData) return scenarioInitialData;
  try {
    const response = await fetch("../mocks/scenarioInitialData.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    scenarioInitialData = await response.json();
    return scenarioInitialData;
  } catch (error) {
    console.error("Failed to fetch scenarioInitialData.json:", error);
    return null;
  }
}

// --- ScriptRunner Class ---
class ScriptRunner {
  constructor(scenarioId, uiChatLogElement, uiButtonContainerElement) {
    this.scenarioId = scenarioId;
    this.uiChatLog = uiChatLogElement;
    this.uiButtonContainer = uiButtonContainerElement;
    this.monologueScript = null;
    this.currentStepIndex = 0;
    this.scriptContext = {}; // For storing results of calculations
    this.isWaitingForUserAction = false;
    this.actionResolver = null; // Promise resolver for user actions

    // Bind methods
    this.resumeAfterUserAction = this.resumeAfterUserAction.bind(this);
  }

  async initializeScenarioData() {
    const allInitialData = await fetchInitialData();
    if (allInitialData && allInitialData[this.scenarioId]) {
      const scenarioData = allInitialData[this.scenarioId];
      for (const key in scenarioData) {
        setStorageItem(key, scenarioData[key]);
      }
      console.log(`localStorage initialized for scenario: ${this.scenarioId}`);
    } else {
      console.error(`No initial data found for scenario: ${this.scenarioId}`);
    }
  }

  async loadScript() {
    try {
      const response = await fetch("../mocks/demoScenarios.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const allScenarios = await response.json();
      const currentScenario = allScenarios.scenarios.find(
        (s) => s.id === this.scenarioId
      );
      if (currentScenario && currentScenario.monologueScript) {
        this.monologueScript = currentScenario.monologueScript;
        console.log(`Monologue script loaded for scenario: ${this.scenarioId}`);
      } else {
        console.error(
          `Monologue script not found for scenario: ${this.scenarioId}`
        );
        this.monologueScript = [];
      }
    } catch (error) {
      console.error("Failed to load demoScenarios.json:", error);
      this.monologueScript = [];
    }
  }

  async start() {
    await this.initializeScenarioData();
    await this.loadScript();
    this.currentStepIndex = 0;
    this.scriptContext = {};
    this.isWaitingForUserAction = false;
    if (this.uiChatLog) this.uiChatLog.innerHTML = ""; // Clear chat log
    if (this.uiButtonContainer) this.uiButtonContainer.innerHTML = ""; // Clear buttons
    this.executeNextStep();
  }

  async executeNextStep() {
    if (this.isWaitingForUserAction) return; // Don't proceed if waiting

    if (this.currentStepIndex >= this.monologueScript.length) {
      console.log("Monologue script finished.");
      // Potentially call handleTransitionToRealAi implicitly or ensure last step does it
      return;
    }

    const step = this.monologueScript[this.currentStepIndex];
    this.currentStepIndex++;

    console.log("Executing step:", step);

    switch (step.type) {
      case "ai_speech":
        await this.handleAiSpeech(step);
        break;
      case "ai_speech_dynamic":
        await this.handleAiSpeechDynamic(step);
        break;
      case "delay":
        await this.handleDelay(step);
        break;
      case "calculation":
        await this.handleCalculation(step);
        break;
      case "render_button_dynamic":
        await this.handleRenderButtonDynamic(step);
        break;
      case "wait_for_user_action":
        await this.handleWaitForUserAction(step);
        break;
      case "clear_buttons":
        await this.handleClearButtons(step);
        break;
      case "transition_to_real_ai":
        await this.handleTransitionToRealAi(step);
        break;
      default:
        console.warn(`Unknown step type: ${step.type}`);
    }

    // Automatically execute next step if not waiting
    if (
      !this.isWaitingForUserAction &&
      this.currentStepIndex < this.monologueScript.length
    ) {
      // Add a small delay before processing next step to allow UI to update
      setTimeout(() => this.executeNextStep(), 50);
    } else if (this.isWaitingForUserAction) {
      console.log("Waiting for user action...");
    } else {
      console.log(
        "End of script or waiting for explicit transition to real AI."
      );
    }
  }

  // --- Step Handlers ---
  async _appendToChatLog(htmlContent) {
    if (this.uiChatLog) {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("ai-message"); // Add a class for styling
      messageDiv.innerHTML = htmlContent; // Use innerHTML to allow for basic HTML in messages
      this.uiChatLog.appendChild(messageDiv);
      this.uiChatLog.scrollTop = this.uiChatLog.scrollHeight; // Scroll to bottom
    }
  }

  async handleAiSpeech(stepConfig) {
    await this._appendToChatLog(stepConfig.text);
  }

  async handleAiSpeechDynamic(stepConfig) {
    let template = stepConfig.template;
    const dataToInject = {};

    // Gather data from localStorage
    if (stepConfig.dataKeys) {
      stepConfig.dataKeys.forEach((key) => {
        const value = getStorageItem(key);
        if (value !== null) dataToInject[key] = value;
      });
    }

    // Gather data from scriptContext
    if (stepConfig.contextKeys) {
      stepConfig.contextKeys.forEach((key) => {
        if (this.scriptContext.hasOwnProperty(key)) {
          dataToInject[key] = this.scriptContext[key];
        }
      });
    }

    // Replace placeholders (simple dot notation resolver)
    const replacedText = template.replace(
      /\{(\w+(?:\.\w+)*)\}/g,
      (match, placeholder) => {
        const keys = placeholder.split(".");
        let currentVal = dataToInject;
        for (const k of keys) {
          if (currentVal && typeof currentVal === "object" && k in currentVal) {
            currentVal = currentVal[k];
          } else {
            console.warn(
              `Placeholder {${placeholder}} not found in data sources.`
            );
            return match; // Return original placeholder if not found
          }
        }
        return currentVal;
      }
    );

    await this._appendToChatLog(replacedText);
  }

  async handleDelay(stepConfig) {
    await new Promise((resolve) => setTimeout(resolve, stepConfig.duration));
  }

  async handleCalculation(stepConfig) {
    // WARNING: Direct eval is dangerous. This needs a safe expression parser.
    // For now, this is a placeholder and assumes simple math that might work with Function constructor.
    // Production use would require a dedicated math expression parser.
    let formula = stepConfig.formula;
    const dataForFormula = {};

    // Gather data from localStorage & scriptContext for the formula
    if (stepConfig.sourceKeys) {
      stepConfig.sourceKeys.forEach((key) => {
        if (this.scriptContext.hasOwnProperty(key)) {
          dataForFormula[key] = this.scriptContext[key];
        } else {
          const storageVal = getStorageItem(key);
          if (storageVal !== null) dataForFormula[key] = storageVal;
          else console.warn(`Data for calculation key ${key} not found`);
        }
      });
    }

    try {
      // Create a function with the data keys as arguments
      const argNames = Object.keys(dataForFormula);
      const argValues = Object.values(dataForFormula);

      // A slightly safer way than direct eval for simple expressions but still limited.
      // For complex scenarios or user-input formulas, a proper parsing library is essential.
      const evaluator = new Function(...argNames, `return ${formula};`);
      const result = evaluator(...argValues);
      this.scriptContext[stepConfig.outputVar] = result;
      console.log(`Calculation ${stepConfig.outputVar} = ${result}`);
    } catch (e) {
      console.error(`Error in calculation for ${stepConfig.outputVar}: ${e}`);
      this.scriptContext[stepConfig.outputVar] = undefined;
    }
  }

  async handleRenderButtonDynamic(stepConfig) {
    if (!this.uiButtonContainer) return;

    // Visibility check
    if (stepConfig.visible_if_context_var_greater_than) {
      const { varName, value } = stepConfig.visible_if_context_var_greater_than;
      if (!(this.scriptContext[varName] > value)) {
        console.log(
          `Button not rendered due to visibility condition: ${varName} not > ${value}`
        );
        return; // Don't render button
      }
    }

    let buttonText = stepConfig.template_text;
    if (stepConfig.contextKeys_for_text) {
      stepConfig.contextKeys_for_text.forEach((key) => {
        if (this.scriptContext.hasOwnProperty(key)) {
          const regex = new RegExp(`\\{${key}\\}`, "g");
          buttonText = buttonText.replace(regex, this.scriptContext[key]);
        }
      });
    }

    const button = document.createElement("button");
    button.innerHTML = buttonText; // Using innerHTML for text that might have been processed
    button.classList.add("scenario-button"); // For styling
    // Assign an ID if specified in stepConfig.action or stepConfig.awaits for specific identification
    if (stepConfig.action && stepConfig.action.buttonId) {
      button.id = stepConfig.action.buttonId;
    } else if (stepConfig.awaits && stepConfig.awaits.length > 0) {
      // If awaits defines an ID for this button interaction (e.g. button_click_order_aggregates)
      // This is a conceptual link, actual event handling is below
      button.dataset.actionId = stepConfig.awaits[0];
    }

    button.addEventListener("click", async () => {
      if (stepConfig.action) {
        if (stepConfig.action.type === "update_local_storage_and_ui") {
          stepConfig.action.updates.forEach((update) => {
            if (update.localStorageKey && update.valueFromContextVar) {
              const valueToSet = this.scriptContext[update.valueFromContextVar];
              let currentStorageValue =
                getStorageItem(update.localStorageKey) || {};

              // Simple path update, for deeply nested, a helper would be better
              if (update.valuePath) {
                let tempObj = currentStorageValue;
                const pathParts = update.valuePath.split(".");
                for (let i = 0; i < pathParts.length - 1; i++) {
                  if (
                    !tempObj[pathParts[i]] ||
                    typeof tempObj[pathParts[i]] !== "object"
                  ) {
                    tempObj[pathParts[i]] = {};
                  }
                  tempObj = tempObj[pathParts[i]];
                }
                tempObj[pathParts[pathParts.length - 1]] = valueToSet;
              } else {
                currentStorageValue = valueToSet; // Overwrite if no path
              }
              setStorageItem(update.localStorageKey, currentStorageValue);
              console.log(
                `Updated localStorage '${update.localStorageKey}':`,
                currentStorageValue
              );

              // Basic UI update (placeholder, needs specific implementation)
              if (update.uiUpdateTargetSelector && update.uiUpdateType) {
                const targetElement = document.querySelector(
                  update.uiUpdateTargetSelector
                );
                if (targetElement) {
                  if (update.uiUpdateType === "textContent")
                    targetElement.textContent = valueToSet;
                  else if (update.uiUpdateType === "value")
                    targetElement.value = valueToSet;
                  // Add more UI update types as needed
                }
              }
            }
          });
        }
      }
      // If the script is waiting for this button click to resume
      if (this.isWaitingForUserAction && this.actionResolver) {
        const awaitId = button.dataset.actionId; // Check if this button's actionId matches what we are waiting for
        const currentWaitingStep =
          this.monologueScript[this.currentStepIndex - 1]; // The step that initiated the wait
        if (
          currentWaitingStep &&
          currentWaitingStep.type === "wait_for_user_action" &&
          currentWaitingStep.awaits.includes(awaitId)
        ) {
          this.resumeAfterUserAction();
        }
      }
    });
    this.uiButtonContainer.appendChild(button);
  }

  async handleWaitForUserAction(stepConfig) {
    this.isWaitingForUserAction = true;
    // stepConfig.awaits might define specific action IDs we are waiting for
    // The button handler will call resumeAfterUserAction if its action ID matches
    console.log(
      `Script paused, waiting for user actions: ${stepConfig.awaits.join(", ")}`
    );
    return new Promise((resolve) => {
      this.actionResolver = resolve; // Store resolver to be called by button click
    });
  }

  resumeAfterUserAction() {
    if (this.isWaitingForUserAction && this.actionResolver) {
      this.isWaitingForUserAction = false;
      this.actionResolver(); // Resolve the promise from handleWaitForUserAction
      this.actionResolver = null;
      console.log("User action received, resuming script.");
      this.executeNextStep(); // Continue script execution
    }
  }

  async handleClearButtons(stepConfig) {
    if (this.uiButtonContainer) {
      this.uiButtonContainer.innerHTML = "";
    }
  }

  async handleTransitionToRealAi(stepConfig) {
    console.log("Transitioning to real AI. Scripted monologue finished.");
    this._appendToChatLog(
      "<i>--- End of scripted demo. You can now ask free-form questions. ---</i>"
    );
    // Emit an event or set a global flag that the main application can listen for
    // For example:
    // document.dispatchEvent(new CustomEvent('scriptedDemoFinished', { detail: { scenarioId: this.scenarioId } }));
    // For now, this is a console log and a message.
    // The main application logic needs to handle this transition.
  }
}

// Export or make available to the global scope if needed, e.g.:
// window.ScriptRunner = ScriptRunner;
// window.getStorageItem = getStorageItem;
// window.setStorageItem = setStorageItem;
