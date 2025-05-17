/**
 * Mock AI Assistant Service for Civil42 Application
 *
 * This module simulates an AI assistant by providing pre-defined responses
 * based on different contexts and queries. It mimics the behavior of a real
 * AI assistant for development and testing purposes.
 */

// Sample AI suggestion templates
const suggestionTemplates = {
  // Suggestions for resource monitoring
  resources: [
    {
      id: "resource_suggestion_1",
      title: "Zwiększ zapasy wody",
      description:
        "Dane historyczne wskazują, że poziom wody w {resourceName} jest niższy niż zwykle o tej porze roku. Zalecam zwiększenie zapasów o co najmniej 20%.",
      priority: "high",
      actionable: true,
      type: "inventory",
    },
    {
      id: "resource_suggestion_2",
      title: "Potrzebny przegląd {resourceName}",
      description:
        "Ostatni przegląd techniczny miał miejsce ponad 180 dni temu. Zgodnie z przepisami, zaleca się przegląd co 6 miesięcy.",
      priority: "medium",
      actionable: true,
      type: "maintenance",
    },
    {
      id: "resource_suggestion_3",
      title: "Optymalizacja lokalizacji {resourceName}",
      description:
        "Analiza rozmieszczenia populacji wskazuje, że obecna lokalizacja nie jest optymalna. Rozważ przeniesienie zasobu o 2.5km na północny-wschód.",
      priority: "low",
      actionable: true,
      type: "optimization",
    },
  ],

  // Suggestions for emergency situations
  emergency: [
    {
      id: "emergency_suggestion_1",
      title: "Alert: Konieczna ewakuacja",
      description:
        "Sytuacja w regionie {gminaName} pogarsza się. Zalecam rozpoczęcie procedury ewakuacji w ciągu najbliższych 6 godzin.",
      priority: "critical",
      actionable: true,
      type: "evacuation",
    },
    {
      id: "emergency_suggestion_2",
      title: "Potrzebne dodatkowe środki",
      description:
        "Prognozowany czas trwania sytuacji kryzysowej przekracza obecne możliwości zasobów. Zalecam pozyskanie dodatkowych {resourceType}.",
      priority: "high",
      actionable: true,
      type: "resources",
    },
  ],

  // Suggestions for general management
  management: [
    {
      id: "management_suggestion_1",
      title: "Aktualizacja planu kryzysowego",
      description:
        "Obecny plan kryzysowy dla {gminaName} nie był aktualizowany od ponad roku. Zalecam przegląd i aktualizację.",
      priority: "medium",
      actionable: true,
      type: "planning",
    },
    {
      id: "management_suggestion_2",
      title: "Szkolenie personelu",
      description:
        "Analiza wykazała, że tylko 65% personelu przeszło odpowiednie szkolenia w zakresie {trainingType}. Zalecam zwiększenie tego wskaźnika do minimum 85%.",
      priority: "medium",
      actionable: true,
      type: "training",
    },
  ],
};

// Sample analysis plans for different scenarios
const analysisPlans = {
  waterShortage: [
    { step: 1, description: "Analiza obecnych zapasów wody" },
    { step: 2, description: "Identyfikacja alternatywnych źródeł" },
    {
      step: 3,
      description: "Kalkulacja potrzeb na podstawie danych demograficznych",
    },
    { step: 4, description: "Opracowanie planu dystrybucji" },
    { step: 5, description: "Przygotowanie harmonogramu uzupełniania zapasów" },
  ],
  powerOutage: [
    { step: 1, description: "Ocena zasięgu awarii zasilania" },
    { step: 2, description: "Analiza dostępności generatorów" },
    { step: 3, description: "Priorytetyzacja obiektów wymagających zasilania" },
    { step: 4, description: "Kalkulacja zapotrzebowania na paliwo" },
    { step: 5, description: "Opracowanie planu rotacji zasilania" },
  ],
  evacuation: [
    { step: 1, description: "Określenie obszarów wymagających ewakuacji" },
    { step: 2, description: "Identyfikacja bezpiecznych tras ewakuacyjnych" },
    { step: 3, description: "Analiza dostępnych środków transportu" },
    {
      step: 4,
      description: "Zlokalizowanie i przygotowanie miejsc tymczasowego pobytu",
    },
    { step: 5, description: "Opracowanie harmonogramu ewakuacji" },
  ],
  // Specialized plans for specific contexts
  generators: [
    {
      step: 1,
      description: "Sprawdzenie obecnej ilości agregatów w gminie",
    },
    {
      step: 2,
      description:
        "Analiza wymagań prawnych (np. Ustawa o OC) dot. ilości agregatów",
    },
    {
      step: 3,
      description:
        "Weryfikacja zapotrzebowania strategicznego (np. dla schronów, szpitali polowych)",
    },
    {
      step: 4,
      description: "Określenie kosztów zakupu i utrzymania agregatów",
    },
    {
      step: 5,
      description: "Rekomendacja optymalnej ilości i typów agregatów do zakupu",
    },
  ],
  cans: [
    {
      step: 1,
      description: "Sprawdzenie obecnych stanów magazynowych konserw",
    },
    {
      step: 2,
      description: "Analiza dat ważności posiadanych zapasów",
    },
    {
      step: 3,
      description: "Weryfikacja norm żywnościowych dla populacji gminy",
    },
    {
      step: 4,
      description: "Kalkulacja niezbędnych ilości zapasów żywnościowych",
    },
    {
      step: 5,
      description:
        "Rekomendacja ilości do zakupu z uwzględnieniem rotacji zapasów",
    },
  ],
  resources: [
    {
      step: 1,
      description: "Identyfikacja krytycznych zasobów na terenie gminy",
    },
    {
      step: 2,
      description: "Sprawdzenie stanu i dostępności zasobów",
    },
    {
      step: 3,
      description: "Analiza rozmieszczenia zasobów względem populacji",
    },
    {
      step: 4,
      description: "Ocena wystarczalności zasobów w sytuacji kryzysowej",
    },
    {
      step: 5,
      description: "Rekomendacje dotyczące optymalizacji zasobów",
    },
  ],
};

// Sample conversation logs for different contexts
const conversationTemplates = {
  default: [
    {
      role: "system",
      content: "Zainicjowano asystenta AI dla monitorowania zasobów gminy.",
    },
    {
      role: "assistant",
      content:
        "Witaj! Jestem asystentem AI dla systemu monitorowania zasobów. W czym mogę pomóc?",
    },
    { role: "user", content: "Potrzebuję analizy zapasów wody w gminie." },
    {
      role: "assistant",
      content:
        "Analizuję dane dotyczące zapasów wody... Obecnie gmina posiada X litrów wody pitnej i Y litrów wody technicznej. Przy obecnym zużyciu, zapasy wystarczą na Z dni.",
    },
    {
      role: "user",
      content: "Jakie są zalecenia odnośnie zwiększenia zapasów?",
    },
    {
      role: "assistant",
      content:
        "Na podstawie danych historycznych i prognozy pogody, zalecam zwiększenie zapasów wody pitnej o 20%. Optymalnym rozwiązaniem byłoby dodatkowe 5000 litrów wody pitnej w magazynie B2.",
    },
  ],

  generators: [
    {
      role: "system",
      content: "Zainicjowano asystenta AI dla monitorowania zasobów gminy.",
    },
    {
      role: "assistant",
      content:
        "Witaj! Jestem asystentem AI dla systemu monitorowania zasobów energetycznych.",
    },
    {
      role: "assistant",
      content:
        "Rozpoczynam analizę zakupu agregatów prądotwórczych dla Gminy Bełchatów.",
    },
    {
      role: "assistant",
      content:
        "Sprawdzam obecny stan posiadania... Gmina posiada 5 agregatów (3 sprawne, 2 w naprawie).",
    },
    {
      role: "assistant",
      content:
        "Analizuję wymagania prawne... Ustawa XYZ sugeruje 1 agregat na 2000 mieszkańców.",
    },
    {
      role: "assistant",
      content:
        "Biorąc pod uwagę populację ~11,500, sugerowane jest posiadanie co najmniej 6 sprawnych agregatów.",
    },
    {
      role: "assistant",
      content:
        "Sugeruję zamówienie 3 nowych agregatów, aby osiągnąć stan 6 sprawnych i 2 w rezerwie/naprawie.",
    },
  ],

  cans: [
    {
      role: "system",
      content: "Zainicjowano asystenta AI dla monitorowania zasobów gminy.",
    },
    {
      role: "assistant",
      content:
        "Witaj! Jestem asystentem AI dla systemu monitorowania zapasów żywności.",
    },
    {
      role: "assistant",
      content: "Rozpoczynam analizę zakupu konserw dla Gminy Bełchatów.",
    },
    {
      role: "assistant",
      content:
        "Sprawdzam stany magazynowe... Obecnie posiadamy 1500 szt. konserw mięsnych i 800 szt. konserw warzywnych.",
    },
    {
      role: "assistant",
      content:
        "Analizuję daty ważności... 30% konserw mięsnych traci ważność w ciągu najbliższych 3 miesięcy.",
    },
    {
      role: "assistant",
      content:
        "Sugeruję uzupełnienie zapasów o 500 szt. konserw mięsnych i 200 szt. warzywnych, aby zapewnić 3-dniowy bufor bezpieczeństwa.",
    },
  ],

  emergency: [
    {
      role: "system",
      content:
        "Zainicjowano asystenta AI dla monitorowania zasobów gminy w sytuacji kryzysowej.",
    },
    {
      role: "assistant",
      content: "Witaj! Wykryłem potencjalną sytuację kryzysową w gminie.",
    },
    {
      role: "assistant",
      content: "Analizuję dostępne dane... Poziom zagrożenia: podwyższony.",
    },
    {
      role: "assistant",
      content:
        "Sprawdzam dostępne zasoby kryzysowe... Stan: 70% wymaganego minimum.",
    },
    {
      role: "assistant",
      content:
        "Zalecam natychmiastowe uruchomienie procedur uzupełniania zapasów strategicznych i powiadomienie odpowiednich służb.",
    },
  ],
};

// Utility functions for generating realistic responses
const getRandomItem = (array) =>
  array[Math.floor(Math.random() * array.length)];

const formatTemplate = (template, variables) => {
  let result = template;
  for (const [key, value] of Object.entries(variables)) {
    result = result.replace(new RegExp(`{${key}}`, "g"), value);
  }
  return result;
};

// Mock AI Assistant API
const mockAI = {
  /**
   * Generate suggestions based on context
   * @param {Object} context - Context for suggestions (type, gmina, resource, etc.)
   * @param {number} count - Number of suggestions to generate
   * @returns {Promise<Array>} Promise resolving to array of suggestions
   */
  getSuggestions: async (context = {}, count = 3) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    let templates = [];

    // Select appropriate templates based on context
    if (context.type === "resources") {
      templates = suggestionTemplates.resources;
    } else if (context.type === "emergency") {
      templates = suggestionTemplates.emergency;
    } else {
      templates = suggestionTemplates.management;
    }

    // Generate random suggestions
    const suggestions = [];
    for (let i = 0; i < Math.min(count, templates.length); i++) {
      const template = templates[i];
      const variables = {
        resourceName: context.resourceName || "zasobu",
        gminaName: context.gminaName || "Bełchatów",
        resourceType: context.resourceType || "wody pitnej",
        trainingType: context.trainingType || "zarządzania kryzysowego",
      };

      suggestions.push({
        ...template,
        title: formatTemplate(template.title, variables),
        description: formatTemplate(template.description, variables),
        timestamp: new Date().toISOString(),
      });
    }

    return suggestions;
  },

  /**
   * Generate analysis plan based on scenario
   * @param {string} scenario - Type of scenario for analysis
   * @returns {Promise<Array>} Promise resolving to analysis plan steps
   */
  getAnalysisPlan: async (scenario) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Select appropriate plan or default to water shortage
    let plan = analysisPlans[scenario];
    if (!plan) {
      plan = analysisPlans.waterShortage;
    }

    // Add timestamps to make it more realistic
    return plan.map((step) => ({
      ...step,
      timestamp: new Date().toISOString(),
      status: "pending",
    }));
  },

  /**
   * Get conversation history or generate new if empty
   * @param {string} contextType - Type of context for conversation (generators, cans, etc.)
   * @returns {Promise<Array>} Promise resolving to conversation log
   */
  getConversationLog: async (contextType = "default") => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Get from localStorage or use default
    const contextKey = `aiConversationLog_${contextType}`; // Use context-specific key
    const storedLog = localStorage.getItem(contextKey);
    if (storedLog) {
      return JSON.parse(storedLog);
    }

    // Return minimal welcome message instead of template conversations
    const initialLog = [
      {
        role: "assistant",
        content:
          "Witaj! Jestem asystentem AI dla systemu monitorowania zasobów. W czym mogę pomóc?",
        timestamp: new Date().toISOString(),
      },
    ];

    localStorage.setItem(contextKey, JSON.stringify(initialLog)); // Save initial log
    return initialLog;
  },

  /**
   * Add message to conversation log
   * @param {string} role - Message role ('user' or 'assistant')
   * @param {string} content - Message content
   * @returns {Promise<Array>} Promise resolving to updated conversation log
   */
  addMessage: async (role, content, contextType = "default") => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Get current log for the given context
    let log = await mockAI.getConversationLog(contextType);

    // Add new message
    const newMessage = {
      role,
      content,
      timestamp: new Date().toISOString(),
    };
    log.push(newMessage);

    // Save updated log to the context-specific key
    const contextKey = `aiConversationLog_${contextType}`;
    localStorage.setItem(contextKey, JSON.stringify(log));

    return log;
  },

  /**
   * Get knowledge base data from localStorage
   * @returns {Object} Knowledge base data or empty object if not found
   */
  getKnowledgeBase: () => {
    try {
      const knowledgeData = localStorage.getItem("assistantKnowledge");
      if (knowledgeData) {
        return JSON.parse(knowledgeData);
      }

      // Fallback: try to reconstruct from individual sources
      const demographic = JSON.parse(
        localStorage.getItem("demographic") || "{}"
      );
      const gminas = JSON.parse(localStorage.getItem("gminas") || "{}");
      const resources = JSON.parse(localStorage.getItem("resources") || "[]");

      return {
        demographic,
        gminas,
        resources,
        lastUpdated: new Date().toISOString(),
      };
    } catch (error) {
      console.error("Error retrieving knowledge base:", error);
      return {};
    }
  },

  /**
   * Generate AI response to user input with knowledge from all data sources
   * @param {string} userInput - User message
   * @returns {Promise<string>} Promise resolving to AI response
   */
  getResponse: async (userInput, contextType = "default") => {
    // Simulate network delay for "thinking"
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Generating AI response with contextType:", contextType);

    // Query-specific knowledge retrieval
    const lowercaseInput = userInput.toLowerCase();
    let specificKnowledge = [];

    // Determine what kind of specific knowledge to add based on the query
    if (lowercaseInput.includes("gmina") || lowercaseInput.includes("gminy")) {
      try {
        const gminas = JSON.parse(localStorage.getItem("gminas") || "{}");
        specificKnowledge.push(
          `Dane o gminach: ${Object.values(gminas)
            .map((g) => `${g.name} (populacja: ${g.population})`)
            .join(", ")}`
        );
      } catch (e) {
        console.error("Error retrieving gmina data:", e);
      }
    }

    if (lowercaseInput.includes("zasób") || lowercaseInput.includes("zasoby")) {
      try {
        const resources = JSON.parse(localStorage.getItem("resources") || "[]");
        specificKnowledge.push(
          `Kategorie zasobów: ${[
            ...new Set(resources.map((r) => r.category)),
          ].join(", ")}`
        );
      } catch (e) {
        console.error("Error retrieving resource data:", e);
      }
    }

    if (
      lowercaseInput.includes("ludność") ||
      lowercaseInput.includes("demograficzne")
    ) {
      try {
        const demographic = JSON.parse(
          localStorage.getItem("demographic") || "{}"
        );
        if (demographic.residents) {
          specificKnowledge.push(
            `Liczba mieszkańców: ${demographic.residents}`
          );
        }
        if (demographic.animalPopulations) {
          specificKnowledge.push(
            `Populacje zwierząt: ${demographic.animalPopulations
              .map((a) => `${a.name}: ${a.count}`)
              .join(", ")}`
          );
        }
      } catch (e) {
        console.error("Error retrieving demographic data:", e);
      }
    }

    // Get knowledge base data
    const knowledgeBase = mockAI.getKnowledgeBase();

    // Define response patterns
    const resourceResponses = [
      "Według moich analiz, w gminie znajduje się {resourceCount} zasobów typu {resourceType}. Zalecam zwiększenie ich liczby o co najmniej 15%.",
      "Monitorowanie zasobu {resourceName} wykazało niższy poziom niż oczekiwano. Zalecam uzupełnienie w najbliższych 48 godzinach.",
      "Analiza rozmieszczenia zasobów sugeruje, że obszar północny gminy może mieć ograniczony dostęp do {resourceType}. Rozważ relokację części zasobów.",
    ];

    const emergencyResponses = [
      "Symulacja sytuacji kryzysowej wykazała, że obecne zasoby wystarczą na około {days} dni. Zalecam zwiększenie zapasów {resourceType}.",
      "W przypadku {emergencyType}, najważniejszą kwestią będzie dostęp do wody pitnej i energii. Obecne zasoby mogą być niewystarczające.",
      "Plan ewakuacyjny dla {gminaName} wymaga aktualizacji. Obecna wersja nie uwzględnia zmian demograficznych z ostatniego roku.",
    ];

    const generalResponses = [
      "Na podstawie danych demograficznych, zauważam zwiększone zapotrzebowanie na {resourceType} w obszarze {areaName}.",
      "Ostatnia aktualizacja planu zarządzania kryzysowego miała miejsce {months} miesięcy temu. Zalecam przegląd i aktualizację.",
      "Analiza trendów wskazuje na możliwe {riskType} w nadchodzących miesiącach. Sugeruję przygotowanie planu prewencyjnego.",
    ];

    // Information about demographic data from knowledge base
    const demographicResponses = [
      "Według danych demograficznych, gmina ma {residents} mieszkańców i średnio {tourists} turystów. Zapotrzebowanie na wodę pitną szacowane jest na {waterNeeded} litrów dziennie.",
      "Dane o populacji zwierząt gospodarskich wskazują na {cattleCount} sztuk bydła, które wymagają {cattleFoodNeeded} kg paszy dziennie.",
      "Zapasy ziarna na zasiew wynoszą {grainReserves} ton, co powinno wystarczyć na obsadzenie około {fieldHectares} hektarów pól.",
    ];

    // Information about gminas from knowledge base
    const gminaResponses = [
      "Gmina {gminaName} ma populację {gminaPopulation} mieszkańców i {resourcesCount} zarejestrowanych punktów zasobów.",
      "Współpraca z sąsiednią gminą {neighborGmina} mogłaby zwiększyć efektywność w zarządzaniu zasobami wody w przypadku suszy.",
      "Analiza punktów zasobów w gminie {gminaName} wskazuje na nierównomierne rozmieszczenie {resourceType}.",
    ];

    // Determine response type based on user input
    let responsePool;

    // Choose response pool based on user query
    if (
      lowercaseInput.includes("demograficzne") ||
      lowercaseInput.includes("populacja") ||
      lowercaseInput.includes("mieszkańcy")
    ) {
      responsePool = demographicResponses;
    } else if (
      lowercaseInput.includes("zasób") ||
      lowercaseInput.includes("zasoby") ||
      lowercaseInput.includes("magazyn")
    ) {
      responsePool = resourceResponses;
    } else if (
      lowercaseInput.includes("kryzys") ||
      lowercaseInput.includes("awarię") ||
      lowercaseInput.includes("ewakuację")
    ) {
      responsePool = emergencyResponses;
    } else if (
      lowercaseInput.includes("gmina") ||
      lowercaseInput.includes("gminy") ||
      lowercaseInput.includes("samorząd")
    ) {
      responsePool = gminaResponses;
    } else {
      responsePool = generalResponses;
    }

    // Select random response and format it
    const rawResponse = getRandomItem(responsePool);

    // Get real values from knowledge base if available
    const gminasArray = knowledgeBase.gminas
      ? Object.values(knowledgeBase.gminas)
      : [];
    const resourcesArray = knowledgeBase.resources || [];
    const demographicData = knowledgeBase.demographic || {};

    // Calculate animal food and water needs if data exists
    let cattleCount = 0;
    let cattleFoodNeeded = 0;
    let cattleWaterNeeded = 0;

    if (demographicData.animalPopulations) {
      const cattle = demographicData.animalPopulations.find(
        (animal) => animal.id === "cattle"
      );
      if (cattle) {
        cattleCount = cattle.count;
        cattleFoodNeeded = cattle.count * cattle.foodPerDayKg;
        cattleWaterNeeded = cattle.count * cattle.waterPerDayL;
      }
    }

    // Create replacement variables with real data when possible
    const formattedResponse = formatTemplate(rawResponse, {
      resourceCount:
        resourcesArray.length || Math.floor(Math.random() * 20) + 5,
      resourceType: getRandomItem([
        "wody pitnej",
        "żywności",
        "medykamentów",
        "paliwa",
      ]),
      resourceName:
        resourcesArray.length > 0
          ? resourcesArray[Math.floor(Math.random() * resourcesArray.length)]
              .name
          : getRandomItem([
              "Magazyn A1",
              "Magazyn B2",
              "Studnia Gminna",
              "Beczkowóz",
            ]),
      days: Math.floor(Math.random() * 10) + 2,
      emergencyType: getRandomItem([
        "powodzi",
        "długotrwałej suszy",
        "awarii sieci energetycznej",
      ]),
      gminaName:
        gminasArray.length > 0
          ? gminasArray[Math.floor(Math.random() * gminasArray.length)].name
          : getRandomItem(["Bełchatów", "Kleszczów", "Drużbice"]),
      neighborGmina:
        gminasArray.length > 1
          ? gminasArray[Math.floor(Math.random() * gminasArray.length)].name
          : "sąsiednia gmina",
      gminaPopulation:
        gminasArray.length > 0
          ? gminasArray[Math.floor(Math.random() * gminasArray.length)]
              .population
          : Math.floor(Math.random() * 10000) + 5000,
      resourcesCount: Math.floor(Math.random() * 15) + 5,
      areaName: getRandomItem([
        "południowym",
        "północnym",
        "wschodnim",
        "zachodnim",
      ]),
      months: Math.floor(Math.random() * 12) + 1,
      riskType: getRandomItem([
        "niedobory wody",
        "problemy energetyczne",
        "zwiększone zapotrzebowanie na żywność",
      ]),
      residents:
        demographicData.residents || Math.floor(Math.random() * 15000) + 5000,
      tourists:
        demographicData.tourists || Math.floor(Math.random() * 500) + 100,
      waterNeeded:
        (demographicData.residents || 10000) * 3 +
        (demographicData.tourists || 500) * 2,
      cattleCount: cattleCount || Math.floor(Math.random() * 2000) + 500,
      cattleFoodNeeded:
        cattleFoodNeeded || Math.floor(Math.random() * 10000) + 5000,
      grainReserves:
        demographicData.grainReservesForSowingTonnes ||
        Math.floor(Math.random() * 500) + 100,
      fieldHectares: Math.floor(
        (demographicData.grainReservesForSowingTonnes || 200) * 2.5
      ),
    });

    // Add knowledge to the response if available
    let finalResponse = formattedResponse;
    if (specificKnowledge.length > 0) {
      // Add the specific knowledge to the response
      finalResponse = `${formattedResponse}\n\nBazując na dostępnych danych:\n- ${specificKnowledge.join(
        "\n- "
      )}`;
    }

    // Add to conversation log (now with contextType)
    await mockAI.addMessage("user", userInput, contextType);
    await mockAI.addMessage("assistant", finalResponse, contextType);

    return finalResponse;
  },

  /**
   * Simulate crisis alert detection
   * @returns {Promise<boolean>} Promise resolving to true if crisis detected
   */
  detectCrisis: async () => {
    // 10% chance of crisis alert
    return Math.random() < 0.1;
  },

  /**
   * Clear conversation history
   * @returns {Promise<boolean>} Promise resolving to success status
   */
  clearConversation: async () => {
    localStorage.removeItem("aiConversationLog");
    return true;
  },
};

// Expose to global scope
window.mockAI = mockAI;
