class ScenarioPlayer {
  constructor() {
    this.scenarios = [];
    this.activeScenario = null;
    this.currentStepIndex = 0;
    this.scenarioMonologueActive = false; // To track if a monologue is playing
    this.messageTimers = [];
    this.demoModeActive = false;
  }

  async loadScenarios() {
    try {
      const response = await fetch("../mocks/demoScenarios.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.scenarios = data.scenarios;
      console.log("Demo scenarios loaded:", this.scenarios);
    } catch (error) {
      console.error("Failed to load demo scenarios:", error);
      this.scenarios = []; // Ensure scenarios is an empty array on failure
    }
  }

  setActiveScenario(scenarioId) {
    this.activeScenario =
      this.scenarios.find((s) => s.id === scenarioId) || null;
    this.currentStepIndex = 0;
    this.scenarioMonologueActive = false; // Reset monologue state
    this.demoModeActive = !!this.activeScenario;

    // Clear any existing timers
    this.clearAllTimers();

    if (this.demoModeActive) {
      this.showDemoModeIndicator();
    }

    return this.demoModeActive;
  }

  clearAllTimers() {
    this.messageTimers.forEach((timer) => clearTimeout(timer));
    this.messageTimers = [];
  }

  showDemoModeIndicator() {
    // Add visual indicator that demo mode is active
    const demoIndicator = document.createElement("div");
    demoIndicator.id = "demo-mode-indicator";
    demoIndicator.className = "demo-mode-indicator";
    demoIndicator.textContent = "DEMO MODE";
    demoIndicator.style.position = "fixed";
    demoIndicator.style.top = "10px";
    demoIndicator.style.right = "10px";
    demoIndicator.style.background = "rgba(255, 165, 0, 0.8)";
    demoIndicator.style.color = "white";
    demoIndicator.style.padding = "5px 10px";
    demoIndicator.style.borderRadius = "4px";
    demoIndicator.style.zIndex = "9999";
    demoIndicator.style.fontSize = "12px";
    demoIndicator.style.fontWeight = "bold";

    // Remove existing indicator if any
    const existingIndicator = document.getElementById("demo-mode-indicator");
    if (existingIndicator) {
      existingIndicator.remove();
    }

    document.body.appendChild(demoIndicator);
  }

  hideDemoModeIndicator() {
    const indicator = document.getElementById("demo-mode-indicator");
    if (indicator) {
      indicator.remove();
    }
  }

  // Start executing the scenario with typing effect
  async startScenario() {
    if (!this.activeScenario) {
      console.error("No active scenario to start");
      return false;
    }

    this.demoModeActive = true;
    this.scenarioMonologueActive = true;

    // Display initial monologue with typing effect
    await this.displayInitialMonologue();

    // Execute the first step after a brief pause
    const timer = setTimeout(() => {
      this.executeNextStep();
    }, 1500);

    this.messageTimers.push(timer);
    return true;
  }

  async displayInitialMonologue() {
    if (!this.activeScenario || !this.activeScenario.initialMonologue) return;

    // Send the initial message to the AI chat interface
    if (window.addScenarioMessageToLog) {
      window.addScenarioMessageToLog({
        sender: "ai",
        message: this.activeScenario.initialMonologue,
        isTyping: true,
      });
    }

    // Simulate typing time based on message length
    const typingDelay = Math.min(
      this.activeScenario.initialMonologue.length * 10,
      2000
    );
    await new Promise((resolve) => setTimeout(resolve, typingDelay));

    if (window.addScenarioMessageToLog) {
      window.addScenarioMessageToLog({
        sender: "ai",
        message: this.activeScenario.initialMonologue,
        isTyping: false,
      });
    }
  }

  async executeNextStep() {
    if (!this.activeScenario || !this.scenarioMonologueActive) return false;

    const steps = this.activeScenario.planSteps;
    if (this.currentStepIndex >= steps.length) {
      // All steps completed, show final recommendation
      this.displayFinalRecommendation();
      return false;
    }

    const currentStep = steps[this.currentStepIndex];

    // First display the thought process (internal thinking)
    if (currentStep.cywilThoughtProcess) {
      if (window.addScenarioMessageToLog) {
        window.addScenarioMessageToLog({
          sender: "ai",
          message: currentStep.cywilThoughtProcess,
          messageType: "thinking",
          isTyping: true,
        });
      }

      // Simulate thinking time
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (window.addScenarioMessageToLog) {
        window.addScenarioMessageToLog({
          sender: "ai",
          message: currentStep.cywilThoughtProcess,
          messageType: "thinking",
          isTyping: false,
        });
      }
    }

    // Then display the actual "finding" with mock data
    if (currentStep.mockData && currentStep.cywilPresentationPrompt) {
      // Format the presentation message, inserting data from mockData
      let presentationMessage = this.formatMessage(
        currentStep.cywilPresentationPrompt,
        currentStep.mockData
      );

      if (window.addScenarioMessageToLog) {
        window.addScenarioMessageToLog({
          sender: "ai",
          message: presentationMessage,
          messageType: "result",
          isTyping: true,
        });
      }

      // Simulate typing time
      const typingDelay = Math.min(presentationMessage.length * 8, 3000);
      await new Promise((resolve) => setTimeout(resolve, typingDelay));

      if (window.addScenarioMessageToLog) {
        window.addScenarioMessageToLog({
          sender: "ai",
          message: presentationMessage,
          messageType: "result",
          isTyping: false,
        });
      }
    }

    // Increment step index
    this.currentStepIndex++;

    // Schedule next step after a pause
    const timer = setTimeout(() => {
      this.executeNextStep();
    }, 2000); // 2 second pause between steps

    this.messageTimers.push(timer);
    return true;
  }

  formatMessage(template, data) {
    // Replace placeholders in template with actual data
    let message = template;

    if (typeof data === "object") {
      // Replace each key in the template with its value from data
      Object.keys(data).forEach((key) => {
        const placeholder = new RegExp(`{${key}}`, "g");
        message = message.replace(placeholder, data[key]);
      });
    }

    return message;
  }

  async displayFinalRecommendation() {
    if (!this.activeScenario || !this.activeScenario.finalRecommendation) {
      this.endScenario();
      return;
    }

    const recommendation = this.activeScenario.finalRecommendation;

    // Format the recommendation message with mock data
    let recommendationMessage = this.formatMessage(
      recommendation.cywilPresentationPrompt,
      recommendation.mockData
    );

    if (window.addScenarioMessageToLog) {
      window.addScenarioMessageToLog({
        sender: "ai",
        message: recommendationMessage,
        messageType: "recommendation",
        isTyping: true,
        actions: recommendation.suggestionButtonText
          ? [
              {
                type: "demo_suggestion",
                value: recommendation.mockData,
                label: recommendation.suggestionButtonText,
              },
            ]
          : undefined,
      });
    }

    // Simulate typing time
    const typingDelay = Math.min(recommendationMessage.length * 10, 3000);
    await new Promise((resolve) => setTimeout(resolve, typingDelay));

    if (window.addScenarioMessageToLog) {
      window.addScenarioMessageToLog({
        sender: "ai",
        message: recommendationMessage,
        messageType: "recommendation",
        isTyping: false,
        actions: recommendation.suggestionButtonText
          ? [
              {
                type: "demo_suggestion",
                value: recommendation.mockData,
                label: recommendation.suggestionButtonText,
              },
            ]
          : undefined,
      });
    }

    // End scenario after final recommendation
    this.endScenario();
  }

  endScenario() {
    this.scenarioMonologueActive = false;
    // Don't deactivate demo mode here to keep the indicator
    // this.demoModeActive = false;
    this.clearAllTimers();
  }

  resetScenario() {
    this.currentStepIndex = 0;
    this.scenarioMonologueActive = false;
    this.demoModeActive = false;
    this.activeScenario = null;
    this.clearAllTimers();
    this.hideDemoModeIndicator();
  }

  // Check if we should intercept a given user input and trigger a demo scenario
  shouldInterceptForDemo(userInput, currentPageContext) {
    if (!userInput || this.scenarioMonologueActive) return false;

    // Simple algorithm to match input to scenario trigger words
    const normalizedInput = userInput.toLowerCase().trim();

    for (const scenario of this.scenarios) {
      // Skip if scenario requires specific page context and we're not on that page
      if (
        scenario.uiTriggerContext &&
        currentPageContext !== scenario.uiTriggerContext
      ) {
        continue;
      }

      // Check for scenario trigger words
      if (
        scenario.id === "zakupAgregatow" &&
        (normalizedInput.includes("agregat") ||
          normalizedInput.includes("kupić") ||
          normalizedInput.includes("planuj") ||
          normalizedInput.includes("planowanie") ||
          normalizedInput.includes("strategia") ||
          normalizedInput.includes("zakup"))
      ) {
        this.setActiveScenario(scenario.id);
        return true;
      }
    }

    return false;
  }

  // Method to intercept AI requests - returns true if intercepted
  interceptAiRequest(userInput, currentPageContext) {
    if (this.shouldInterceptForDemo(userInput, currentPageContext)) {
      console.log("Demo scenario activated for input:", userInput);
      // Add user message to log first
      if (window.addScenarioMessageToLog) {
        window.addScenarioMessageToLog({
          sender: "user",
          message: userInput,
        });
      }
      // Start the scenario playback
      setTimeout(() => {
        this.startScenario();
      }, 500);
      return true;
    }
    return false;
  }
}

// Export as global for now
window.ScenarioPlayer = ScenarioPlayer;

// Create a singleton instance
window.scenarioPlayer = new ScenarioPlayer();

// Initialize by loading scenarios
document.addEventListener("DOMContentLoaded", () => {
  if (window.scenarioPlayer) {
    window.scenarioPlayer.loadScenarios().then(() => {
      console.log("ScenarioPlayer initialized with scenarios");
    });
  }
});
