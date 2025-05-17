// We've moved the process.env initialization to env-setup.js which loads first
// This is a fallback in case there are any issues with env-setup.js
if (typeof process === "undefined" || !process.env) {
  window.process = window.process || {
    env: {
      OPENAI_API_KEY: "",
      AI_MODEL: "gpt-4.1-nano",
      MOCK_DELAY: "300",
      NODE_ENV: "development",
    },
  };
  console.log("Environment variables initialized (fallback in script.js)");
}

// Icons - using inline SVGs for self-contained file
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const AlertCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

// --- NEW ICONS FOR PAIN POINTS ---
const LayersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const ShuffleIcon = () => (
  // For coordination problems
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 3 21 3 21 8"></polyline>
    <line x1="4" y1="20" x2="21" y2="3"></line>
    <polyline points="21 16 21 21 16 21"></polyline>
    <line x1="15" y1="15" x2="21" y2="21"></line>
    <line x1="4" y1="4" x2="9" y2="9"></line>
  </svg>
);

const ArchiveIcon = () => (
  // For administrative burden
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

const EyeOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);

const UsersMinusIcon = () => (
  // For poor inter-municipal coordination
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <line x1="23" y1="11" x2="17" y2="11"></line>
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const MoveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="5 9 2 12 5 15"></polyline>
    <polyline points="9 5 12 2 15 5"></polyline>
    <polyline points="15 19 12 22 9 19"></polyline>
    <polyline points="19 9 22 12 19 15"></polyline>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <line x1="12" y1="2" x2="12" y2="22"></line>
  </svg>
);

const FileXIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <line x1="9.5" y1="12.5" x2="14.5" y2="17.5"></line>
    <line x1="14.5" y1="12.5" x2="9.5" y2="17.5"></line>
  </svg>
);

const SlidersHorizontalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="21" y1="10" x2="3" y2="10"></line>
    <line x1="21" y1="6" x2="3" y2="6"></line>
    <line x1="21" y1="14" x2="3" y2="14"></line>
    <line x1="21" y1="18" x2="3" y2="18"></line>
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const BotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 8V4H8"></path>
    <rect width="16" height="12" x="4" y="8" rx="2"></rect>
    <path d="M2 14h2"></path>
    <path d="M20 14h2"></path>
    <path d="M15 13v2"></path>
    <path d="M9 13v2"></path>
  </svg>
);

const AlertTriangleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="orange"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <path d="M12 9v4"></path>
    <path d="M12 17h.01"></path>
  </svg>
);

const WindIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.7 7.7a2.5 2.5 0 1 1-5 0"></path>
    <path d="M19.6 21H12a3 3 0 0 1-3-3v0"></path>
    <path d="M22 17H4.4"></path>
    <path d="M20 12H6.8"></path>
    <path d="M17.7 7.7a2.5 2.5 0 1 1-5 0"></path>
    <path d="M12.2 4.1a2.5 2.5 0 0 1 5 .1"></path>
  </svg>
);

// --- END NEW ICONS ---

const PlusCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 12h8"></path>
    <path d="M12 8v8"></path>
  </svg>
);

// Reusable PainPointAccordion Component -- THIS COMPONENT WILL BE REMOVED
/*
      const PainPointAccordion = ({ icon, title, summary, details, accentColor,textColor, lightBgColor }) => {
        const [isOpen, setIsOpen] = React.useState(false);
        const IconComponent = icon;

        return (
          <div className={`mb-4 rounded-lg shadow-md border border-gray-200 ${lightBgColor || 'bg-gray-50'}`}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <div className="flex items-center">
                <span className={`${textColor || 'text-gray-700'} mr-3`}><IconComponent /></span>
                <h3 className={`font-semibold ${textColor || 'text-gray-800'}`}>{title}</h3>
              </div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${textColor || 'text-gray-600'}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {isOpen && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">{summary}</p>
                <p className="text-xs text-gray-500 whitespace-pre-line">{details}</p>
              </div>
            )}
          </div>
        );
      };
      */

// Placeholder Local Crisis Mode Component
const LocalCrisisMode = () => {
  // REMOVING painPoints array and PainPointAccordion usage
  const mapRefLocalCrisis = React.useRef(null);

  React.useEffect(() => {
    if (
      !mapRefLocalCrisis.current &&
      document.getElementById("mapLocalCrisis")
    ) {
      const map = L.map("mapLocalCrisis").setView([51.367, 19.367], 12); // Example coords from LocalAdminDashboard
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      mapRefLocalCrisis.current = map;

      // Example: Add a crisis marker
      // Using a simple orange circle for the crisis marker
      const crisisIcon = L.divIcon({
        className: "custom-div-icon", // ensure this class doesn't conflict or define its specific styles if needed
        html: `<div style="background-color: orange; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 5px orange; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">!</div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10], // anchor point of the icon
      });

      L.marker([51.37, 19.37], { icon: crisisIcon }) // Slightly different coords for visibility
        .bindPopup(
          "<b>Zgłoszenie Kryzysowe</b><br/>Pożar magazynu przy ul. Przemysłowej."
        )
        .addTo(map);

      // Add new fire event for Gmina Bełchatów
      L.marker([51.36, 19.37], { icon: crisisIcon })
        .bindPopup(
          "<b>Nowe Zgłoszenie Kryzysowe</b><br/>Gmina Bełchatów: Pożar lasu w pobliżu ul. Leśnej."
        )
        .addTo(map);
    }
    return () => {
      if (mapRefLocalCrisis.current) {
        mapRefLocalCrisis.current.remove();
        mapRefLocalCrisis.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header remains the same, part of the column flow */}
      <header className="bg-white shadow-md">
        <div style={{ backgroundColor: "#182139" }} className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentView("home")}
                className="flex items-center px-3 py-2 text-white hover:bg-opacity-75 hover:bg-gray-700 rounded-md"
              >
                <HomeIcon />
                <span className="ml-2 text-sm">Powrót do wyboru</span>
              </button>
              <h1 className="ml-6 text-xl font-semibold text-white">
                Tryb Kryzysowy - Służby Lokalne
              </h1>
            </div>
            {/* Potentially add other header elements here if needed */}
          </div>
        </div>
      </header>

      {/* Content Area with Sidebar and Map - This will be a flex row */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-96 bg-white p-6 shadow-lg overflow-y-auto border-r border-gray-200">
          <h2 className="text-xl font-semibold text-orange-700 mb-6">
            Panel Zarządzania Kryzysowego
          </h2>

          {/* Section: Report Event / Request Help */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Zgłoś Zdarzenie / Poproś o Pomoc
            </h3>
            <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center">
              <PlusCircleIcon />
              <span className="ml-2">Nowe Zgłoszenie</span>
            </button>
            {/* TODO: Add form elements or modal trigger here */}
          </div>

          {/* Section: Active Requests */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Aktywne Zgłoszenia
            </h3>
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-md">
              <p className="text-sm text-orange-600">
                Brak aktywnych zgłoszeń.
              </p>
              {/* Example of a request item:
                    <div className="p-3 my-2 bg-white border border-gray-200 rounded-md shadow-sm">
                      <p className="font-semibold text-gray-700">Potrzeba: Pompa wodna</p>
                      <p className="text-xs text-gray-500">Status: Oczekujące na potwierdzenie Wojewody</p>
                    </div>
                    */}
            </div>
          </div>

          {/* Section: Local Crisis Resources */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Lokalne Zasoby Kryzysowe
            </h3>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
              <p className="text-sm text-gray-600">
                Przegląd lokalnych zasobów dostępny wkrótce.
              </p>
              {/* Could link to a detailed view or show key stats */}
            </div>
          </div>
        </div>

        {/* Map Area */}
        <main className="flex-1 p-6 bg-gray-200 overflow-y-auto">
          <div
            id="mapLocalCrisis"
            style={{
              height: "100%",
              minHeight: "calc(100vh - 150px)",
              borderRadius: "8px",
            }} // Adjusted height
            className="shadow-lg bg-white" // Added bg-white for placeholder visibility before map loads
          >
            {/* Map will be rendered here by Leaflet */}
          </div>
        </main>
      </div>
    </div>
  );
};

// Placeholder Global Crisis Mode Component
const GlobalCrisisMode = () => {
  const mapRefGlobalCrisis = React.useRef(null);
  const [activeAlerts, setActiveAlerts] = React.useState([
    {
      id: 1,
      gmina: "Gmina Bełchatów",
      type: "Powódź",
      severity: "Wysoka",
      details: "Zalane centrum, potrzeba ewakuacji.",
      lat: 51.367,
      lng: 19.367,
      status: "Nowe",
    },
    {
      id: 2,
      gmina: "Gmina Kleszczów",
      type: "Pożar Lasu",
      severity: "Średnia",
      details: "Pali się obszar leśny na północy gminy.",
      lat: 51.25,
      lng: 19.3,
      status: "Weryfikacja",
    },
    {
      id: 3,
      gmina: "Gmina Drużbice",
      type: "Brak Zasilania",
      severity: "Krytyczna",
      details: "Cała gmina bez prądu po burzy.",
      lat: 51.45,
      lng: 19.4,
      status: "W toku",
    },
    {
      id: 4,
      gmina: "Miasto Łódź",
      type: "Skażenie Chemiczne",
      severity: "Krytyczna",
      details: "Wyciek nieznanej substancji w strefie przemysłowej.",
      lat: 51.7592,
      lng: 19.4558,
      status: "Nowe",
    },
  ]);

  React.useEffect(() => {
    let mapInstance = null;
    if (
      !mapRefGlobalCrisis.current &&
      document.getElementById("mapGlobalCrisis")
    ) {
      mapInstance = L.map("mapGlobalCrisis").setView([51.9194, 19.1451], 7); // Center of Poland, wider view

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance);

      mapRefGlobalCrisis.current = mapInstance;
    } else {
      mapInstance = mapRefGlobalCrisis.current;
    }

    if (mapInstance) {
      // Clear existing crisis markers before adding new ones
      mapInstance.eachLayer((layer) => {
        // A more robust check for your specific crisis markers might be needed
        if (
          layer.options &&
          layer.options.pane === "markerPane" &&
          layer.options.icon &&
          layer.options.icon.options.className &&
          layer.options.icon.options.className.includes("custom-crisis-marker")
        ) {
          mapInstance.removeLayer(layer);
        }
      });

      activeAlerts.forEach((alert) => {
        const crisisIconHtml = `<div style="background-color: ${
          alert.severity === "Krytyczna"
            ? "#dc2626" /* red-600 */
            : alert.severity === "Wysoka"
            ? "#f97316" /* orange-500 */
            : "#f59e0b" /* amber-500 */
        }; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px; border: 2px solid white; box-shadow: 0 0 5px ${
          alert.severity === "Krytyczna"
            ? "#dc2626"
            : alert.severity === "Wysoka"
            ? "#f97316"
            : "#f59e0b"
        };">🚨</div>`;

        const crisisIcon = L.divIcon({
          className: "custom-crisis-marker",
          html: crisisIconHtml,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        });
        L.marker([alert.lat, alert.lng], { icon: crisisIcon })
          .bindPopup(
            `<b>${alert.gmina} - ${alert.type}</b><br/>Stopień: ${alert.severity}<br/>Status: ${alert.status}<hr/>${alert.details}`
          )
          .addTo(mapInstance);
      });
    }

    return () => {
      if (mapRefGlobalCrisis.current) {
        const mapContainer = document.getElementById("mapGlobalCrisis");
        if (
          mapContainer &&
          mapRefGlobalCrisis.current._container === mapContainer
        ) {
          mapRefGlobalCrisis.current.remove();
        }
        mapRefGlobalCrisis.current = null;
      }
    };
  }, [activeAlerts]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div style={{ backgroundColor: "#182139" }} className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentView("home")}
                className="flex items-center px-3 py-2 text-white hover:bg-opacity-75 hover:bg-gray-700 rounded-md"
              >
                <HomeIcon />
                <span className="ml-2 text-sm">Powrót do wyboru</span>
              </button>
              <h1 className="ml-6 text-xl font-semibold text-white">
                Tryb Kryzysowy - Globalny (Centrala)
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content Area with Sidebar and Map */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-96 bg-white p-6 shadow-lg overflow-y-auto border-r border-gray-200">
          <div className="flex items-center text-xl font-semibold text-red-700 mb-6">
            <ShieldIcon /> {/* Using the 48x48 ShieldIcon */}
            <span className="ml-3">Panel Centrali Kryzysowej</span>
          </div>

          {/* Section: Global Crisis Notifications */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Zgłoszenia Kryzysowe (Województwo)
            </h3>
            {activeAlerts.length > 0 ? (
              <ul className="space-y-3">
                {activeAlerts.map((alert) => (
                  <li
                    key={alert.id}
                    className={`p-3 rounded-md border ${
                      alert.severity === "Krytyczna"
                        ? "border-red-500 bg-red-50"
                        : alert.severity === "Wysoka"
                        ? "border-orange-500 bg-orange-50"
                        : "border-yellow-400 bg-yellow-50" // Default for 'Średnia'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p
                          className={`font-semibold ${
                            alert.severity === "Krytyczna"
                              ? "text-red-700"
                              : alert.severity === "Wysoka"
                              ? "text-orange-700"
                              : "text-yellow-600"
                          }`}
                        >
                          {alert.gmina}: {alert.type}
                        </p>
                        <p className="text-xs text-gray-600">{alert.details}</p>
                      </div>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          alert.status === "Nowe"
                            ? "bg-blue-200 text-blue-800"
                            : alert.status === "Weryfikacja"
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-green-200 text-green-800" // Default for 'W toku' or other statuses
                        }`}
                      >
                        {alert.status}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        if (mapRefGlobalCrisis.current) {
                          mapRefGlobalCrisis.current.flyTo(
                            [alert.lat, alert.lng],
                            10
                          ); // Zoom to alert
                        }
                      }}
                      className="mt-2 text-xs text-blue-600 hover:underline"
                    >
                      Zobacz na mapie / Zarządzaj
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-sm text-green-600 text-center">
                  Brak aktywnych zgłoszeń kryzysowych na poziomie województwa.
                </p>
              </div>
            )}
          </div>

          {/* Section: Global Situation Overview */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Przegląd Sytuacji Globalnej
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-700">Gminy z alertami</p>
                <p className="text-lg font-bold text-blue-800">
                  {new Set(activeAlerts.map((a) => a.gmina)).size}
                </p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <p className="text-xs text-red-700">Alerty krytyczne</p>
                <p className="text-lg font-bold text-red-800">
                  {
                    activeAlerts.filter((a) => a.severity === "Krytyczna")
                      .length
                  }
                </p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                <p className="text-xs text-orange-700">Alerty wysokie</p>
                <p className="text-lg font-bold text-orange-800">
                  {activeAlerts.filter((a) => a.severity === "Wysoka").length}
                </p>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                <p className="text-xs text-yellow-700">Alerty średnie</p>
                <p className="text-lg font-bold text-yellow-800">
                  {activeAlerts.filter((a) => a.severity === "Średnia").length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Area */}
        <main className="flex-1 p-6 bg-gray-200 overflow-y-auto">
          <div
            id="mapGlobalCrisis"
            style={{
              height: "100%",
              minHeight: "calc(100vh - 150px)",
              borderRadius: "8px",
            }}
            className="shadow-lg bg-white"
          >
            {/* Map will be rendered here by Leaflet */}
          </div>
        </main>
      </div>
    </div>
  );
};

// Placeholder Global Admin Component
const GlobalAdmin = () => {
  // REMOVING painPoints array and PainPointAccordion usage
  // ADDING new state and logic for multi-gmina map view

  // Mock data for multiple municipalities (gminy)
  const gminaData = {
    gminaA: {
      id: "gminaA",
      name: "Gmina Bełchatów",
      center: [51.367, 19.367],
      zoom: 12,
      population: 12489,
      resources: [
        {
          id: "m1-A",
          name: "Magazyn A1 (Żywność)",
          lat: 51.365,
          lng: 19.375,
          type: "storage",
        },
        {
          id: "osp-A",
          name: "OSP Gmina A",
          lat: 51.372,
          lng: 19.378,
          type: "emergency_service",
        },
      ],
      populationZones: [
        {
          name: "Centrum Gminy A",
          lat: 51.37,
          lng: 19.365,
          density: "high",
          radius: 300,
        },
      ],
    },
    gminaB: {
      id: "gminaB",
      name: "Gmina Kleszczów",
      center: [51.217, 19.3],
      zoom: 12,
      population: 5800,
      resources: [
        {
          id: "m1-B",
          name: "Magazyn K1 (Medykamenty)",
          lat: 51.215,
          lng: 19.305,
          type: "storage",
        },
        {
          id: "szpital-B",
          name: "Szpital Powiatowy Kleszczów",
          lat: 51.22,
          lng: 19.29,
          type: "medical_point",
        },
      ],
      populationZones: [
        {
          name: "Osiedle Kleszczów",
          lat: 51.217,
          lng: 19.3,
          density: "medium",
          radius: 400,
        },
      ],
    },
    gminaC: {
      id: "gminaC",
      name: "Gmina Drużbice",
      center: [51.45, 19.4],
      zoom: 12,
      population: 5200,
      resources: [
        {
          id: "wodociagi-C",
          name: "Ujęcie Wody Drużbice",
          lat: 51.455,
          lng: 19.405,
          type: "institution",
        },
      ],
      populationZones: [],
    },
  };

  const [selectedGminaId, setSelectedGminaId] = React.useState("gminaA");
  const mapRefGlobal = React.useRef(null);
  const layerControlRefGlobal = React.useRef(null);

  const currentGmina = gminaData[selectedGminaId];

  // Simplified getCustomIcon - can be expanded later if needed
  const getCustomIconGlobal = (type) => {
    let color = "gray";
    switch (type) {
      case "storage":
        color = "#2ecc71";
        break; // Green
      case "emergency_service":
        color = "#e74c3c";
        break; // Red
      case "medical_point":
        color = "#e91e63";
        break; // Pink
      case "institution":
        color = "#3498db";
        break; // Blue
      default:
        color = "#7f8c8d";
    }
    return L.divIcon({
      className: "custom-div-icon",
      html: `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 3px ${color};"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });
  };

  React.useEffect(() => {
    if (!currentGmina) return;

    if (mapRefGlobal.current) {
      // If map exists, just update view and layers
      mapRefGlobal.current.setView(currentGmina.center, currentGmina.zoom);
      // Clear previous layers (simplified - ideally manage layers better)
      mapRefGlobal.current.eachLayer((layer) => {
        if (!!layer.toGeoJSON) {
          // Basic check if it's a data layer
          mapRefGlobal.current.removeLayer(layer);
        }
      });
      if (layerControlRefGlobal.current) {
        layerControlRefGlobal.current.remove();
      }
    } else {
      // Initialize map
      mapRefGlobal.current = L.map("mapGlobalAdmin").setView(
        currentGmina.center,
        currentGmina.zoom
      );
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRefGlobal.current);
    }

    const map = mapRefGlobal.current;

    // Add resources for the selected gmina
    const resourceLayer = L.layerGroup();
    currentGmina.resources.forEach((resource) => {
      const icon = getCustomIconGlobal(resource.type);
      L.marker([resource.lat, resource.lng], { icon })
        .bindPopup(`<b>${resource.name}</b><br/>Typ: ${resource.type}`)
        .addTo(resourceLayer);
    });
    resourceLayer.addTo(map);

    // Add population zones for the selected gmina
    const populationLayer = L.layerGroup();
    currentGmina.populationZones.forEach((zone) => {
      let zoneColor =
        zone.density === "high"
          ? "#d32f2f"
          : zone.density === "medium"
          ? "#f57c00"
          : "#fbc02d";
      L.circle([zone.lat, zone.lng], {
        color: zoneColor,
        fillColor: zoneColor,
        fillOpacity: 0.3,
        radius: zone.radius,
      })
        .bindPopup(`<b>${zone.name}</b><br/>Gęstość: ${zone.density}`)
        .addTo(populationLayer);
    });
    populationLayer.addTo(map);

    // Simplified Layer Control
    const overlayMapsGlobal = {
      "Zasoby Gminy": resourceLayer,
      "Strefy Populacji": populationLayer,
    };

    layerControlRefGlobal.current = L.control
      .layers(null, overlayMapsGlobal)
      .addTo(map);

    return () => {
      // Cleanup on component unmount or before re-render if selectedGminaId changes and map needs full reinitialization
      // For simplicity, not fully cleaning up map instance here, but in a real app, you might want to.
      if (layerControlRefGlobal.current) {
        // layerControlRefGlobal.current.remove(); // Avoids error if map is removed first
      }
    };
  }, [selectedGminaId, currentGmina]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar for Gmina Selection */}
      <div
        style={{ backgroundColor: "#182139" }}
        className="w-72 p-4 space-y-2 text-white"
      >
        <button
          onClick={() => setCurrentView("home")}
          className="flex items-center px-3 py-2 text-white hover:bg-opacity-75 hover:bg-gray-700 rounded-md w-full mb-4"
        >
          <HomeIcon />
          <span className="ml-2 text-sm">Powrót do wyboru</span>
        </button>
        <h2 className="text-lg font-semibold mb-3">Wybierz Gminę:</h2>
        {Object.values(gminaData).map((gmina) => (
          <div
            key={gmina.id}
            className={`p-3 mb-3 rounded-lg border-2 transition-all duration-200 ease-in-out cursor-pointer transform hover:scale-105 ${
              selectedGminaId === gmina.id
                ? "bg-blue-700 border-blue-500 shadow-xl"
                : "bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-blue-600"
            }`}
            onClick={() => setSelectedGminaId(gmina.id)}
          >
            <h4
              className="font-semibold text-white text-base mb-1 truncate"
              title={gmina.name}
            >
              {gmina.name}
            </h4>
            <p className="text-xs text-gray-200 mb-3">
              Populacja: {gmina.population.toLocaleString()}
            </p>
            <div className="space-y-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert("Generowanie raportu dla: " + gmina.name);
                }}
                className="w-full text-xs bg-sky-600 hover:bg-sky-700 text-white py-1.5 px-2 rounded-md transition-colors duration-150 flex items-center justify-center"
              >
                <span>Raport</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert("Przesuwanie zasobów dla: " + gmina.name);
                }}
                className="w-full text-xs bg-teal-600 hover:bg-teal-700 text-white py-1.5 px-2 rounded-md transition-colors duration-150 flex items-center justify-center"
              >
                <span>Przesuń Zasoby</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert("Centralne zakupy dla: " + gmina.name);
                }}
                className="w-full text-xs bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 px-2 rounded-md transition-colors duration-150 flex items-center justify-center"
              >
                <span>Centralne Zakupy</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content with Map */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md">
          <div className="px-6 py-4 border-b">
            <h1 className="text-xl font-semibold text-green-700">
              Panel Zarządcy Globalnego - Województwo Łódzkie - Przegląd Gmin
            </h1>
          </div>
        </header>
        <main className="flex-1 p-6 bg-gray-200">
          <div
            id="mapGlobalAdmin"
            style={{ height: "100%", borderRadius: "8px" }}
            className="shadow-lg"
          ></div>
        </main>
      </div>
    </div>
  );
};

const LocalAdminDashboard = () => {
  const [activeTab, setActiveTab] = React.useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [animalManagementStrategy, setAnimalManagementStrategy] =
    React.useState("feed"); // 'feed', 'food_source', 'ignore'
  const mapRef = React.useRef(null); // Ref to store the map instance
  const mapContainerRef = React.useRef(null); // Ref for the map container div
  const layerControlRef = React.useRef(null); // Ref for layer control

  // State for Purchase Planning
  const [purchases, setPurchases] = React.useState([
    {
      id: 1,
      supplier: "Przetarg w toku",
      buyer: "Łódzkie", // Corrected: Buyer is Łódzkie
      item: "Agregaty prądotwórcze",
      quantity: "",
      isAiInput: false, // Will be true after clicking "Dołącz"
      canJoin: true, // Show "Dołącz" button initially
      isJoined: false, // New state to track if user joined the purchase
    },
  ]);
  const [showAiPanel, setShowAiPanel] = React.useState(false);
  const [currentAiContext, setCurrentAiContext] = React.useState(null); // { type: 'generators'/'cans', purchaseId: X }
  const [aiSuggestions, setAiSuggestions] = React.useState([]);
  const [aiAnalysisPlan, setAiAnalysisPlan] = React.useState([]);
  const [aiAssistantLog, setAiAssistantLog] = React.useState([]);
  const [crisisAlert, setCrisisAlert] = React.useState(false);
  const [aiPanelWidth, setAiPanelWidth] = React.useState(400); // Default width for AI panel
  const [isResizing, setIsResizing] = React.useState(false);

  const supplierOptions = [
    "Puszki&Słoiki S.A.",
    "SharkIT",
    "MedykTrans",
    "RolnikLokalny",
  ];

  // Mock resource data - EXPANDED
  const mockResources = [
    {
      id: "ug",
      name: "Urząd Gminy",
      lat: 51.37,
      lng: 19.36,
      type: "institution",
      category: "other",
    },
    {
      id: "m1",
      name: "Magazyn A1 (Żywność kons.)",
      lat: 51.365,
      lng: 19.375,
      type: "storage",
      category: "consumer_food",
    },
    {
      id: "m2",
      name: "Magazyn B2 (Woda tech.)",
      lat: 51.36,
      lng: 19.38,
      type: "storage",
      category: "technical_water",
    },
    {
      id: "osp",
      name: "OSP Stradom (Agregat)",
      lat: 51.372,
      lng: 19.378,
      type: "emergency_service",
      category: "energetics",
    },
    {
      id: "beczkowoz1",
      name: "Beczkowóz Woda Pitna",
      lat: 51.362,
      lng: 19.355,
      type: "mobile_unit",
      category: "potable_water",
      capacity: 5000, // Liters
      fillLevel: 80, // Percentage
    },
    {
      id: "alert_zone",
      name: "Strefa Alertu Żywnościowego",
      lat: 51.368,
      lng: 19.37,
      type: "alert",
      category: "consumer_food",
    },
    {
      id: "rolnik_zboze",
      name: "Gosp. Rolne (Zboże)",
      lat: 51.38,
      lng: 19.35,
      type: "storage",
      category: "agricultural_food",
    },
    {
      id: "studnia_gminna",
      name: "Studnia Gminna Głębinowa",
      lat: 51.375,
      lng: 19.365,
      type: "institution",
      category: "potable_water",
    },
    {
      id: "schron1",
      name: "Schron Podstawowy Alfa",
      lat: 51.378,
      lng: 19.365,
      type: "shelter",
      category: "infrastructure",
      capacity: 50, // persons
    },
    {
      id: "med1",
      name: "Punkt Medyczny Omega",
      lat: 51.36,
      lng: 19.35,
      type: "medical_point",
      category: "medical",
      staff: 2, // number of staff
    },
  ];

  // Data for population density simulation
  const populationZones = [
    {
      name: "Centrum Gminy (Rynek)",
      lat: 51.37,
      lng: 19.365,
      density: "high",
      radius: 350,
    },
    {
      name: "Osiedle Mieszkaniowe Wschód",
      lat: 51.365,
      lng: 19.385,
      density: "medium",
      radius: 500,
    },
    {
      name: "Tereny Rolne Północne",
      lat: 51.385,
      lng: 19.36,
      density: "low",
      radius: 700,
    },
    {
      name: "Obszar Przemysłowy Południe",
      lat: 51.35,
      lng: 19.37,
      density: "low",
      radius: 600,
    },
    {
      name: "Osiedle Zachodnie",
      lat: 51.368,
      lng: 19.345,
      density: "medium",
      radius: 450,
    },
  ];

  // Function to create custom DivIcons - UPDATED
  const getCustomIcon = (type) => {
    let color = "gray";
    let iconHtml = "";

    switch (type) {
      case "institution":
        color = "#3498db";
        break; // Blue
      case "storage":
        color = "#2ecc71";
        break; // Green
      case "emergency_service":
        color = "#e74c3c";
        break; // Red
      case "mobile_unit":
        color = "#f39c12";
        break; // Orange
      case "shelter":
        color = "#8e44ad";
        break; // Purple
      case "medical_point":
        color = "#e91e63";
        break; // Pink/Crimson
      case "alert":
        return L.divIcon({
          className: "custom-div-icon",
          html: '<div style="background-color: #f1c40f; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 5px #f1c40f;"></div>',
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        });
      default:
        color = "#7f8c8d";
    }

    iconHtml = `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 3px ${color};"></div>`;
    return L.divIcon({
      className: "custom-div-icon",
      html: iconHtml,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });
  };

  React.useEffect(() => {
    if (
      activeTab === "dashboard" &&
      mapContainerRef.current &&
      !mapRef.current
    ) {
      const map = L.map(mapContainerRef.current).setView([51.367, 19.367], 12);
      mapRef.current = map;

      const osmLayer = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      );
      const satelliteLayer = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution:
            "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
        }
      );
      const roadsLayer = L.tileLayer(
        "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
        {
          attribution:
            'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        }
      );
      osmLayer.addTo(map);

      const baseMaps = {
        Standard: osmLayer,
        Satelita: satelliteLayer,
        "Drogi i Teren": roadsLayer,
      };

      // --- Overlay Layers (Data Layers) --- UPDATED
      const energeticsLayer = L.layerGroup();
      const techWaterLayer = L.layerGroup();
      const potableWaterLayer = L.layerGroup();
      const consumerFoodLayer = L.layerGroup();
      const agriFoodLayer = L.layerGroup();
      const infrastructureLayer = L.layerGroup(); // New
      const medicalLayer = L.layerGroup(); // New
      const otherResourcesLayer = L.layerGroup();
      const populationDensityLayer = L.layerGroup(); // New

      // Populate populationDensityLayer
      populationZones.forEach((zone) => {
        let zoneColor = "gray";
        let zoneOpacity = 0.3;
        let fontWeight = 1;
        switch (zone.density) {
          case "high":
            zoneColor = "#d32f2f";
            zoneOpacity = 0.4;
            fontWeight = 2;
            break; // Darker Red
          case "medium":
            zoneColor = "#f57c00";
            zoneOpacity = 0.3;
            break; // Darker Orange
          case "low":
            zoneColor = "#fbc02d";
            zoneOpacity = 0.2;
            break; // Darker Yellow
        }
        L.circle([zone.lat, zone.lng], {
          color: zoneColor, // Border color
          fillColor: zoneColor, // Fill color
          fillOpacity: zoneOpacity,
          radius: zone.radius,
          weight: fontWeight, // Border weight
        })
          .bindPopup(
            `<b>${zone.name}</b><br/>Gęstość zaludnienia: ${zone.density}`
          )
          .addTo(populationDensityLayer);
      });

      mockResources.forEach((resource) => {
        const icon = getCustomIcon(resource.type);
        let markerOrCircle;
        // UPDATED Popup Content
        let popupContent = `<b>${resource.name}</b><br/>Typ: ${resource.type}`;
        if (resource.capacity !== undefined) {
          popupContent += `<br/>Pojemność: ${resource.capacity}${
            resource.type === "mobile_unit" ? "L" : " osób"
          }`;
        }
        if (resource.fillLevel !== undefined) {
          popupContent += `<br/>Napełnienie: ${resource.fillLevel}%`;
        }
        if (resource.staff !== undefined) {
          popupContent += `<br/>Personel: ${resource.staff}`;
        }
        if (resource.notes) {
          // Example if you add notes later
          popupContent += `<br/>Notatki: ${resource.notes}`;
        }

        if (resource.type === "alert") {
          markerOrCircle = L.circle([resource.lat, resource.lng], {
            color: "#f1c40f",
            fillColor: "#f1c40f",
            fillOpacity: 0.3,
            radius: 300,
          }).bindPopup(popupContent); // Use updated popupContent
        } else {
          markerOrCircle = L.marker([resource.lat, resource.lng], {
            icon: icon,
          }).bindPopup(popupContent); // Use updated popupContent
        }

        // Add to appropriate category layer - UPDATED
        switch (resource.category) {
          case "energetics":
            markerOrCircle.addTo(energeticsLayer);
            break;
          case "technical_water":
            markerOrCircle.addTo(techWaterLayer);
            break;
          case "potable_water":
            markerOrCircle.addTo(potableWaterLayer);
            break;
          case "consumer_food":
            markerOrCircle.addTo(consumerFoodLayer);
            break;
          case "agricultural_food":
            markerOrCircle.addTo(agriFoodLayer);
            break;
          case "infrastructure":
            markerOrCircle.addTo(infrastructureLayer);
            break; // New
          case "medical":
            markerOrCircle.addTo(medicalLayer);
            break; // New
          default:
            markerOrCircle.addTo(otherResourcesLayer);
        }
      });

      // Add default layers to map - UPDATED
      energeticsLayer.addTo(map);
      potableWaterLayer.addTo(map);
      consumerFoodLayer.addTo(map);
      infrastructureLayer.addTo(map); // Show new layer by default
      medicalLayer.addTo(map); // Show new layer by default
      populationDensityLayer.addTo(map); // Show heatmap by default
      // otherResourcesLayer.addTo(map);

      // UPDATED overlayMaps
      const overlayMaps = {
        Energetyka: energeticsLayer,
        "Woda Techniczna": techWaterLayer,
        "Woda Pitna": potableWaterLayer,
        "Żywność Konsumencka": consumerFoodLayer,
        "Żywność Rolna": agriFoodLayer,
        "Infrastruktura Kryt.": infrastructureLayer, // New
        "Punkty Medyczne": medicalLayer, // New
        "Pozostałe Zasoby": otherResourcesLayer,
        "Gęstość Zaludnienia (Sym.)": populationDensityLayer, // New
      };

      if (layerControlRef.current) {
        layerControlRef.current.remove();
      }
      layerControlRef.current = L.control
        .layers(baseMaps, overlayMaps)
        .addTo(map);
    }

    return () => {
      if (mapRef.current) {
        if (layerControlRef.current) {
          layerControlRef.current.remove();
          layerControlRef.current = null;
        }
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [activeTab]);

  // Sample data
  const demographicData = {
    residents: 11539,
    tourists: 500,
    registeredVoters: 6890,
    publicInstitutions: 14,
    animalPopulations: [
      {
        id: "cattle",
        name: "Bydło",
        count: 1200,
        foodPerDayKg: 10,
        waterPerDayL: 50,
      },
      {
        id: "pigs",
        name: "Trzoda chlewna",
        count: 3500,
        foodPerDayKg: 3,
        waterPerDayL: 10,
      },
      {
        id: "poultry",
        name: "Drób",
        count: 15000,
        foodPerDayKg: 0.15,
        waterPerDayL: 0.3,
      },
      {
        id: "sheep",
        name: "Owce/Kozy",
        count: 300,
        foodPerDayKg: 2,
        waterPerDayL: 8,
      },
    ],
    grainReservesForSowingTonnes: 250, // in tonnes
  };

  const resources = [
    {
      id: 1,
      name: "Agregat prądotwórczy 5kW",
      category: "Sprzęt",
      status: "sprawny",
      location: "Magazyn A1",
      responsible: "Jan Kowalski",
      nextInspection: "2025-06-15",
    },
    {
      id: 2,
      name: "Woda pitna (1000L)",
      category: "Zasoby",
      status: "dostępny",
      location: "Magazyn B2",
      responsible: "Maria Nowak",
      nextInspection: "2025-05-20",
    },
    {
      id: 3,
      name: "Radiostacja VHF",
      category: "Sprzęt",
      status: "w_naprawie",
      location: "Punkt serwisowy",
      responsible: "Piotr Wiśniewski",
      nextInspection: "-",
    },
    {
      id: 4,
      name: "Namiot ratowniczy (6-osobowy)",
      category: "Infrastruktura",
      status: "w_użyciu",
      location: "OSP Stradom",
      responsible: "Anna Kowal",
      nextInspection: "2025-07-30",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "sprawny":
      case "dostępny":
        return "bg-green-100 text-green-800";
      case "w_użyciu":
        return "bg-blue-100 text-blue-800";
      case "w_naprawie":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const statusLabels = {
    sprawny: "Sprawny",
    dostępny: "Dostępny",
    w_użyciu: "W użyciu",
    w_naprawie: "W naprawie",
  };

  // Icons for local admin dashboard
  const ChevronRightIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  const MenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const ShoppingCartIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  );

  const PackageIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  );

  const RefreshCwIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 4 23 10 17 10"></polyline>
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
    </svg>
  );

  const BarChart3Icon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="20" x2="12" y2="10"></line>
      <line x1="18" y1="20" x2="18" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );

  const BellIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
    </svg>
  );

  const ScaleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
      <path d="M7 21h10"></path>
      <path d="M12 3v18"></path>
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
    </svg>
  );

  const DownloadIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  );

  const NavigationIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
    </svg>
  );

  const MapPinIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const TruckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 18H3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h7l3-3h9l-1 1v11c0 .55-.45 1-1 1h-2"></path>
      <circle cx="5" cy="18" r="2"></circle>
      <circle cx="19" cy="18" r="2"></circle>
    </svg>
  );

  /* PlusCircleIcon was here, now moved to global scope */

  const EyeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );

  const Edit2Icon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
      <path d="m15 5 4 4"></path>
    </svg>
  );

  const CalendarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  const FileTextIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );

  const UploadIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="17 8 12 3 7 8"></polyline>
      <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
  );

  const UserCheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <polyline points="16 11 18 13 22 9"></polyline>
    </svg>
  );

  // Key indicators - simplified for this example
  const KeyIndicators = () => {
    return (
      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Kluczowe Wskaźniki Gminy Bełchatów
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-600 font-semibold">
              Liczba Mieszkańców (2021)
            </p>
            <p className="text-2xl font-bold text-blue-800">11,539</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-600 font-semibold">
              Szacowani Turyści (Lipiec)
            </p>
            <p className="text-2xl font-bold text-green-800">
              500 - 1,500 (szac.)
            </p>
            <button
              onClick={() =>
                alert("Wyświetlanie wykresu turystów - do implementacji")
              }
              className="mt-2 px-3 py-1.5 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition duration-150"
            >
              Pokaż wykres turystów
            </button>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-600 font-semibold">
              Aktywne Zasoby Kryzysowe
            </p>
            <p className="text-2xl font-bold text-yellow-800">
              {mockResources.length}
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-600 font-semibold">
              Alerty Wysokiego Ryzyka
            </p>
            <p className="text-2xl font-bold text-red-800">
              {mockResources.filter((r) => r.type === "alert").length}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const addNewPurchaseRow = () => {
    setPurchases([
      ...purchases,
      {
        id: Date.now(), // Use timestamp for unique ID
        supplier: "",
        buyer: "Gmina Bełchatów",
        item: "",
        quantity: "",
        isAiInput: false,
        canJoin: false,
        isJoined: true, // For new rows, quantity field is directly available
      },
    ]);
  };

  const handlePurchaseChange = (id, field, value) => {
    setPurchases(
      purchases.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const checkFireAlarmCondition = (purchaseId, itemValue) => {
    // Only trigger for the third line potentially, or based on itemValue for any new item
    const triggeringPurchase = purchases.find((p) => p.id === purchaseId);
    // Example: trigger if it's a newly added row (not the first one) and item matches
    if (
      triggeringPurchase &&
      purchaseId !== 1 &&
      itemValue &&
      itemValue.toLowerCase().includes("obsługa systemu")
    ) {
      // Check if this is the 3rd row overall, or a more robust condition
      const nonDefaultPurchases = purchases.filter((p) => p.id !== 1);
      if (purchases.length >= 3) {
        // Simple check if it's the 3rd+ row
        setCrisisAlert(true);
      }
    }
  };

  const toggleAiPanel = (contextType, purchaseId) => {
    // Toggle panel if already showing
    if (
      showAiPanel &&
      currentAiContext &&
      currentAiContext.type === contextType
    ) {
      setShowAiPanel(false);
      return;
    }

    setShowAiPanel(true);
    setCurrentAiContext({ type: contextType, purchaseId });
    setAiAssistantLog([]); // Clear previous logs
    setAiAnalysisPlan([]);
    setAiSuggestions([]);

    // Simulate AI interaction based on context
    if (contextType === "generators") {
      setAiAnalysisPlan([
        "Sprawdzenie obecnej ilości agregatów w gminie.",
        "Analiza wymagań prawnych (np. Ustawa o OC) dot. ilości agregatów.",
        "Weryfikacja zapotrzebowania strategicznego (np. dla schronów, szpitali polowych).",
        "Rekomendacja ilości.",
      ]);
      setAiAssistantLog([
        {
          sender: "ai",
          message:
            "Rozpoczynam analizę zakupu agregatów prądotwórczych dla Gminy Bełchatów.",
        },
        {
          sender: "ai",
          message:
            "Sprawdzam obecny stan posiadania... Gmina posiada 5 agregatów (3 sprawne, 2 w naprawie).",
        },
        {
          sender: "ai",
          message:
            "Analizuję wymagania prawne... Ustawa XYZ sugeruje 1 agregat na 2000 mieszkańców.",
        },
        {
          sender: "ai",
          message:
            "Biorąc pod uwagę populację ~11,500, sugerowane jest posiadanie co najmniej 6 sprawnych agregatów.",
        },
        {
          sender: "ai",
          message:
            "Sugeruję zamówienie 3 nowych agregatów, aby osiągnąć stan 6 sprawnych i 2 w rezerwie/naprawie.",
          actions: [
            {
              type: "accept_suggestion",
              value: 3,
              label: "Zaakceptuj sugestię (3 szt.)",
            },
          ],
        },
      ]);
      setAiSuggestions([{ label: "Zamów 3 agregaty", value: 3 }]);
    } else if (contextType === "cans") {
      setAiAnalysisPlan([
        "Sprawdzenie obecnych stanów magazynowych konserw.",
        "Analiza dat ważności posiadanych zapasów.",
        "Weryfikacja norm żywnościowych dla populacji.",
        "Rekomendacja ilości do zakupu.",
      ]);
      setAiAssistantLog([
        {
          sender: "ai",
          message: "Rozpoczynam analizę zakupu konserw dla Gminy Bełchatów.",
        },
        {
          sender: "ai",
          message:
            "Sprawdzam stany magazynowe... Obecnie posiadamy 1500 szt. konserw mięsnych i 800 szt. konserw warzywnych.",
        },
        {
          sender: "ai",
          message:
            "Analizuję daty ważności... 30% konserw mięsnych traci ważność w ciągu najbliższych 3 miesięcy.",
        },
        {
          sender: ai,
          message:
            "Sugeruję uzupełnienie zapasów o 500 szt. konserw mięsnych i 200 szt. warzywnych, aby zapewnić 3-dniowy bufor bezpieczeństwa.",
          actions: [
            {
              type: "accept_suggestion_cans",
              value: { meat: 500, veg: 200 },
              label: "Zaakceptuj (500 mięsnych, 200 warzywnych)",
            },
          ],
        },
      ]);
      setAiSuggestions([
        {
          label: "Zamów 500 mięsnych, 200 warzywnych",
          value: { meat: 500, veg: 200 },
        },
      ]);
    }
  };

  const applyAiSuggestion = (value) => {
    if (currentAiContext) {
      const { purchaseId, type } = currentAiContext;
      let newQuantityString = "";
      if (type === "generators") {
        newQuantityString = String(value);
      } else if (type === "cans" && typeof value === "object") {
        newQuantityString = `Mięsne: ${value.meat}, Warzywne: ${value.veg}`;
      }

      setPurchases(
        purchases.map((p) =>
          p.id === purchaseId
            ? { ...p, quantity: newQuantityString, isAiInput: false }
            : p
        )
      );
      setAiAssistantLog((prev) => [
        ...prev,
        {
          sender: "user",
          message: `Zaakceptowano sugestię: ${newQuantityString}`,
        },
      ]);
      setShowAiPanel(false); // Optionally close panel after accepting
    }
  };

  const handleAiAction = (actionType, value) => {
    if (actionType === "accept_suggestion") {
      applyAiSuggestion(value);
    } else if (actionType === "accept_suggestion_cans") {
      applyAiSuggestion(value); // Value is an object {meat: X, veg: Y}
    }
    // Potentially add more AI actions here
  };

  const startResize = (mouseDownEvent) => {
    setIsResizing(true);
    const startX = mouseDownEvent.clientX;
    const startWidth = aiPanelWidth;

    const doDrag = (mouseMoveEvent) => {
      const newWidth = startWidth - (mouseMoveEvent.clientX - startX);
      if (newWidth > 250 && newWidth < window.innerWidth * 0.8) {
        // Min/max width
        setAiPanelWidth(newWidth);
      }
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", doDrag, false);
      document.removeEventListener("mouseup", stopDrag, false);
      setIsResizing(false);
    };

    document.addEventListener("mousemove", doDrag, false);
    document.addEventListener("mouseup", stopDrag, false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Floating AI Assistant Button */}
      <button
        className="ai-floating-button"
        onClick={() => toggleAiPanel("resources")}
        aria-label="Asystent AI"
        title="Otwórz Asystenta AI"
      >
        <img src="SharkIT-assistant.png" alt="AI Assistant" />
      </button>
      {/* Navigation Sidebar */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
        style={{
          backgroundColor: "#182139",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <div className="p-4">
          <h1
            className={`font-bold ${
              sidebarOpen ? "text-xl" : "text-xs"
            } truncate text-white`}
          >
            {sidebarOpen ? "Centrum Zasobów Gminy" : "CZG"}
          </h1>
        </div>

        <nav className="mt-4">
          <button
            onClick={() => setCurrentView("home")}
            className="w-full flex items-center px-4 py-3 text-white transition-colors hover:bg-blue-800"
          >
            <HomeIcon />
            {sidebarOpen && <span className="ml-3">Powrót do wyboru</span>}
          </button>

          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center px-4 py-3 text-white transition-colors ${
              activeTab === "dashboard" ? "bg-blue-500" : "hover:bg-blue-800"
            }`}
          >
            <HomeIcon />
            {sidebarOpen && <span className="ml-3">Mapa gminy</span>}
          </button>

          <button
            onClick={() => setActiveTab("demographic")}
            className={`w-full flex items-center px-4 py-3 text-white transition-colors ${
              activeTab === "demographic" ? "bg-blue-500" : "hover:bg-blue-800"
            }`}
          >
            <UserCheckIcon />
            {sidebarOpen && (
              <span className="ml-3">Informacje demograficzne</span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("purchase-planning")}
            className={`w-full flex items-center px-4 py-3 text-white transition-colors ${
              activeTab === "purchase-planning"
                ? "bg-blue-500"
                : "hover:bg-blue-800"
            }`}
          >
            <BriefcaseIcon />
            {sidebarOpen && <span className="ml-3">Planowanie zakupów</span>}
          </button>

          <button
            onClick={() => setActiveTab("resources")}
            className={`w-full flex items-center px-4 py-3 text-white transition-colors ${
              activeTab === "resources" ? "bg-blue-500" : "hover:bg-blue-800"
            }`}
          >
            <ShoppingCartIcon />
            {sidebarOpen && <span className="ml-3">Zapotrzebowanie</span>}
          </button>

          <button
            onClick={() => setActiveTab("storage")}
            className={`w-full flex items-center px-4 py-3 text-white transition-colors ${
              activeTab === "storage" ? "bg-blue-500" : "hover:bg-blue-800"
            }`}
          >
            <PackageIcon />
            {sidebarOpen && <span className="ml-3">Magazynowanie</span>}
          </button>

          <button
            onClick={() => setActiveTab("inventory")}
            className={`w-full flex items-center px-4 py-3 text-white transition-colors ${
              activeTab === "inventory" ? "bg-blue-500" : "hover:bg-blue-800"
            }`}
          >
            <RefreshCwIcon />
            {sidebarOpen && <span className="ml-3">Remanent</span>}
          </button>

          <button
            onClick={() => setActiveTab("reports")}
            className={`w-full flex items-center px-4 py-3 text-white transition-colors ${
              activeTab === "reports" ? "bg-blue-500" : "hover:bg-blue-800"
            }`}
          >
            <BarChart3Icon />
            {sidebarOpen && <span className="ml-3">Raporty</span>}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded hover:bg-gray-100"
              >
                <MenuIcon />
              </button>
              <h2 className="ml-4 text-xl font-semibold text-gray-800">
                Centrum Zasobów Gminy - Gmina Bełchatów
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center"
                onClick={() =>
                  alert(
                    "Dane pogodowe: Wiatr: SW 15 km/h, Temperatura: 22°C. Dane z systemu IMGW (placeholder)."
                  )
                }
              >
                <WindIcon />
                {sidebarOpen && (
                  <span className="ml-2 text-xs">Dane pogodowe</span>
                )}
              </button>
              <button className="p-2 rounded-lg bg-blue-100 text-blue-600">
                <DownloadIcon />
              </button>
              <span className="text-sm text-gray-600">11 maja 2025, 14:23</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Ludność</p>
                      <p className="text-2xl font-bold text-gray-800">
                        {demographicData.residents.toLocaleString()}
                        <span className="text-blue-500">
                          {" "}
                          / {demographicData.tourists.toLocaleString()}
                        </span>
                      </p>
                      <button
                        onClick={() => setActiveTab("demographic")}
                        className="text-xs text-blue-600 hover:underline mt-1"
                      >
                        Zobacz szczegóły
                      </button>
                    </div>
                    <UsersIcon />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Zasoby sprawne</p>
                      <p className="text-2xl font-bold text-gray-800">
                        127 / 156
                      </p>
                    </div>
                    <CheckCircleIcon />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Aktywne alerty</p>
                      <p className="text-2xl font-bold text-gray-800">3</p>
                    </div>
                    <BellIcon />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Zapasy na dni</p>
                      <p className="text-2xl font-bold text-gray-800">5.2</p>
                    </div>
                    <ScaleIcon />
                  </div>
                </div>
              </div>

              {/* Main Map Area */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Mapa zasobów gminy
                  </h3>
                  <div className="flex space-x-2">
                    <button className="flex items-center px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">
                      <NavigationIcon />
                      <span className="ml-1">Wyśrodkuj</span>
                    </button>
                    <button className="flex items-center px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">
                      <MapPinIcon />
                      <span className="ml-1">Dodaj marker</span>
                    </button>
                  </div>
                </div>

                {/* Placeholder for map */}
                <div
                  className="relative h-96 bg-gray-100 rounded-lg overflow-hidden"
                  ref={mapContainerRef}
                  id="mapid"
                  style={{ height: "400px" }}
                >
                  {/* Map markers and content from original code - REMOVED as Leaflet will render the map */}
                </div>
              </div>

              {/* Legend and filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <h4 className="font-medium text-gray-700 mb-3">Legenda</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Instytucje</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Magazyny</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">
                        Służby ratownicze
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-orange-600 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">
                        Jednostki mobilne
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <h4 className="font-medium text-gray-700 mb-3">
                    Szybkie akcje
                  </h4>
                  <div className="space-y-2">
                    <button className="w-full flex items-center justify-center px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                      <MapPinIcon />
                      <span className="ml-2">Dodaj nowy zasób</span>
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-2 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">
                      <RefreshCwIcon />
                      <span className="ml-2">Rozpocznij remanent</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "demographic" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Informacje demograficzne
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                      <div className="flex items-center">
                        <UsersIcon />
                        <span className="ml-3 text-gray-600">
                          Mieszkańcy stali
                        </span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        {demographicData.residents.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                      <div className="flex items-center">
                        <UsersIcon />
                        <span className="ml-3 text-gray-600">
                          Szacowana liczba turystów
                        </span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        {demographicData.tourists.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                      <div className="flex items-center">
                        <UserCheckIcon />
                        <span className="ml-3 text-gray-600">
                          Zarejestrowani wyborcy
                        </span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        {demographicData.registeredVoters.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                      <div className="flex items-center">
                        <PackageIcon />
                        <span className="ml-3 text-gray-600">
                          Instytucje publiczne
                        </span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        {demographicData.publicInstitutions}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Population Increase Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-md font-semibold text-gray-700 mb-4">
                    Okresowe wzrosty liczby ludności (wizualizacja szacunkowa)
                  </h4>
                  <div className="space-y-6">
                    {/* Summer Months */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        Miesiące letnie (Czerwiec - Sierpień)
                      </p>
                      <div className="flex items-end justify-around h-32 bg-gray-100 p-2 rounded-lg">
                        {/* Czerwiec */}
                        <div className="flex flex-col items-center w-16">
                          <p className="text-xs font-semibold text-blue-700">
                            ~+10%
                          </p>
                          <div
                            className="bg-blue-300 h-12 w-full rounded-sm mt-1"
                            title="Czerwiec: Szacunkowy wzrost o 10%"
                          ></div>
                          <p className="text-xs text-center text-gray-600 mt-1">
                            Cze
                          </p>
                        </div>
                        {/* Lipiec */}
                        <div className="flex flex-col items-center w-16">
                          <p className="text-xs font-semibold text-blue-700">
                            ~+18%
                          </p>
                          <div
                            className="bg-blue-400 h-16 w-full rounded-sm mt-1"
                            title="Lipiec: Szacunkowy wzrost o 15-20%"
                          ></div>
                          <p className="text-xs text-center text-gray-600 mt-1">
                            Lip
                          </p>
                        </div>
                        {/* Sierpień */}
                        <div className="flex flex-col items-center w-16">
                          <p className="text-xs font-semibold text-blue-700">
                            ~+18%
                          </p>
                          <div
                            className="bg-blue-400 h-16 w-full rounded-sm mt-1"
                            title="Sierpień: Szacunkowy wzrost o 15-20%"
                          ></div>
                          <p className="text-xs text-center text-gray-600 mt-1">
                            Sie
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Wzrost liczby turystów, popularna agroturystyka i
                        wydarzenia lokalne.
                      </p>
                    </div>

                    {/* Holiday Periods */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        Okresy świąteczne i długie weekendy
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-yellow-100 p-2 rounded-lg text-center flex flex-col justify-between h-28">
                          <p className="text-xs font-medium text-yellow-700">
                            Wielkanoc
                          </p>
                          <div
                            className="relative bg-yellow-300 h-8 w-full my-1 rounded-sm mx-auto flex items-center justify-center"
                            title="Niewielki wzrost"
                          >
                            <span className="text-xs font-semibold text-yellow-800">
                              ~+5%
                            </span>
                          </div>
                          <p className="text-xs text-yellow-600 mt-1">
                            Przyjazdy rodzinne
                          </p>
                        </div>
                        <div className="bg-orange-100 p-2 rounded-lg text-center flex flex-col justify-between h-28">
                          <p className="text-xs font-medium text-orange-700">
                            Majówka
                          </p>
                          <div
                            className="relative bg-orange-400 h-10 w-full my-1 rounded-sm mx-auto flex items-center justify-center"
                            title="Znaczący wzrost"
                          >
                            <span className="text-xs font-semibold text-orange-800">
                              ~+20%
                            </span>
                          </div>
                          <p className="text-xs text-orange-600 mt-1">
                            Krótkie wyjazdy
                          </p>
                        </div>
                        <div className="bg-red-100 p-2 rounded-lg text-center flex flex-col justify-between h-28">
                          <p className="text-xs font-medium text-red-700">
                            Boże Ciało
                          </p>
                          <div
                            className="relative bg-red-400 h-10 w-full my-1 rounded-sm mx-auto flex items-center justify-center"
                            title="Znaczący wzrost"
                          >
                            <span className="text-xs font-semibold text-red-800">
                              ~+20%
                            </span>
                          </div>
                          <p className="text-xs text-red-600 mt-1">
                            Długi weekend
                          </p>
                        </div>
                        <div className="bg-indigo-100 p-2 rounded-lg text-center flex flex-col justify-between h-28">
                          <p className="text-xs font-medium text-indigo-700">
                            Boże Narodz./Sylw.
                          </p>
                          <div
                            className="relative bg-indigo-300 h-9 w-full my-1 rounded-sm mx-auto flex items-center justify-center"
                            title="Wzrost"
                          >
                            <span className="text-xs font-semibold text-indigo-800">
                              ~+15%
                            </span>
                          </div>
                          <p className="text-xs text-indigo-600 mt-1">
                            Turystyka świąteczna
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Local Festivals */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        Festiwale i wydarzenia lokalne
                      </p>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-xs text-purple-700">
                          Należy monitorować kalendarz wydarzeń gminnych (np.
                          dożynki, festyny), które mogą powodować
                          krótkoterminowe, znaczące wzrosty liczby osób
                          przebywających na terenie gminy.
                          <span className="block mt-1 font-medium">
                            Potencjalny wzrost: Zależny od skali wydarzenia.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "purchase-planning" && (
            <div className="flex flex-1 overflow-hidden">
              {" "}
              {/* Outer flex for tab content */}
              {/* Main Purchase Planning Content (Table Area) */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Planowanie Zakupów Strategicznych
                    </h3>
                    <button
                      onClick={addNewPurchaseRow}
                      className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <PlusCircleIcon />
                      <span className="ml-2">Dodaj nowy wiersz</span>
                    </button>
                  </div>

                  <table className="w-full">
                    <thead>
                      <tr
                        style={{
                          backgroundColor: "#182139",
                          color: "white",
                        }}
                      >
                        <th className="px-4 py-3 text-left font-medium">
                          Dostawca
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Nabywca
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Co kupujemy
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Ilość
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Akcje
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {purchases.map((purchase, index) => (
                        <tr
                          key={purchase.id}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-4 py-3 text-sm">
                            {purchase.id === 1 ? (
                              purchase.supplier
                            ) : (
                              <select
                                value={purchase.supplier}
                                onChange={(e) =>
                                  handlePurchaseChange(
                                    purchase.id,
                                    "supplier",
                                    e.target.value
                                  )
                                }
                                className="w-full p-1 border border-gray-300 rounded-md"
                              >
                                <option value="">Wybierz...</option>
                                {supplierOptions.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            {purchase.buyer}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <input
                              type="text"
                              value={purchase.item}
                              onChange={(e) =>
                                handlePurchaseChange(
                                  purchase.id,
                                  "item",
                                  e.target.value
                                )
                              }
                              onBlur={() =>
                                checkFireAlarmCondition(
                                  purchase.id,
                                  purchase.item
                                )
                              } // Pass ID for context
                              className="w-full p-1 border border-gray-300 rounded-md"
                              disabled={purchase.buyer === "Łódzkie"} // Disabled if buyer is Łódzkie
                            />
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {/* Conditional rendering for quantity input based on 'isJoined' or 'isAiInput' for row 1 */}
                            {(purchase.id === 1 && purchase.isJoined) ||
                            purchase.id !== 1 ? (
                              <div className="flex items-center">
                                <input
                                  type="number"
                                  value={purchase.quantity}
                                  onChange={(e) =>
                                    handlePurchaseChange(
                                      purchase.id,
                                      "quantity",
                                      e.target.value
                                    )
                                  }
                                  className="w-20 p-1 border border-gray-300 rounded-md mr-2"
                                />
                                <button
                                  onClick={() =>
                                    toggleAiPanel(
                                      purchase.id === 1
                                        ? "generators"
                                        : purchase.item
                                            .toLowerCase()
                                            .includes("konserw")
                                        ? "cans"
                                        : "generic",
                                      purchase.id
                                    )
                                  }
                                  className="p-1 text-blue-600 hover:text-blue-800"
                                >
                                  <BotIcon />
                                </button>
                              </div>
                            ) : null}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {purchase.id === 1 && purchase.canJoin && (
                              <button
                                onClick={() => {
                                  setPurchases(
                                    purchases.map((p) =>
                                      p.id === purchase.id
                                        ? {
                                            ...p,
                                            isJoined: true,
                                            canJoin: false,
                                            isAiInput: true,
                                          }
                                        : p
                                    )
                                  );
                                  // Optionally trigger AI panel directly, or wait for user to click bot icon
                                  // toggleAiPanel('generators', purchase.id);
                                }}
                                className="px-3 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600"
                              >
                                Dołącz się do zakupu
                              </button>
                            )}
                            {/* Placeholder for other actions like delete row? */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* AI Assistant Panel */}
              {showAiPanel && (
                <div
                  className="bg-gray-800 text-white shadow-lg flex flex-col overflow-hidden transition-all duration-300 ease-in-out relative ai-panel-fixed"
                  style={{ width: `${aiPanelWidth}px` }}
                >
                  <div
                    className="absolute top-0 bottom-0 left-0 w-2 cursor-col-resize bg-gray-600 hover:bg-blue-500 transition-colors z-10"
                    onMouseDown={startResize}
                  ></div>
                  {/* Actual AI content needs padding due to resizer taking up left edge */}
                  <div className="pl-2 flex flex-col h-full">
                    {" "}
                    {/* Added pl-2 to not overlap resizer, and h-full */}
                    <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                      <h4 className="font-semibold text-lg">Asystent AI</h4>
                      <button
                        onClick={() => setShowAiPanel(false)}
                        className="text-gray-400 hover:text-white"
                      >
                        &times;
                      </button>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
                      <p className="font-semibold">
                        Kontekst:{" "}
                        {currentAiContext?.type === "generators"
                          ? "Zakup agregatów"
                          : "Zakup konserw"}
                      </p>

                      {/* AI Analysis Plan */}
                      {aiAnalysisPlan.length > 0 && (
                        <div className="mb-3">
                          <p className="font-medium text-gray-300">
                            Plan Analizy:
                          </p>
                          <ul className="list-disc list-inside pl-2 text-gray-400 text-xs">
                            {aiAnalysisPlan.map((step, i) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* AI Log / Chat */}
                      <div className="space-y-2">
                        {aiAssistantLog.map((log, i) => (
                          <div
                            key={i}
                            className={`p-2 rounded-md ${
                              log.sender === "ai"
                                ? "bg-gray-700"
                                : "bg-blue-600 self-end"
                            }`}
                          >
                            <p className="font-bold text-xs mb-0.5">
                              {log.sender === "ai" ? "Asystent" : "Użytkownik"}
                            </p>
                            <p className="text-xs whitespace-pre-wrap">
                              {log.message}
                            </p>
                            {log.actions &&
                              log.actions.map((action, idx) => (
                                <button
                                  key={idx}
                                  onClick={() =>
                                    handleAiAction(action.type, action.value)
                                  }
                                  className="mt-1.5 mr-1.5 px-2 py-0.5 bg-blue-500 text-white text-xs rounded hover:bg-blue-400"
                                >
                                  {action.label}
                                </button>
                              ))}
                          </div>
                        ))}
                      </div>

                      {/* AI Suggestions (Buttons) */}
                      {aiSuggestions.length > 0 && (
                        <div className="pt-3 border-t border-gray-700">
                          <p className="font-medium text-gray-300">Sugestie:</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {aiSuggestions.map((sug, i) => (
                              <button
                                key={i}
                                onClick={() => applyAiSuggestion(sug.value)}
                                className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-500"
                              >
                                {sug.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-3 border-t border-gray-700">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setShowAiPanel(false)}
                          className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-2 rounded text-sm"
                        >
                          Zamknij Asystenta
                        </button>
                        <button
                          onClick={() => {
                            setShowAiPanel(false);
                            // Clear conversation if needed
                            // mockAI.clearConversation();
                          }}
                          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm"
                        >
                          Minimalizuj
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "resources" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Zapotrzebowanie na zasoby
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-700 mb-2">
                      Zasoby konsumpcyjne - Mieszkańcy
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Kalorie dziennie:</span>
                        <span className="font-medium">
                          {(demographicData.residents * 2200).toLocaleString()}{" "}
                          kcal
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Woda pitna:</span>
                        <span className="font-medium">
                          {(demographicData.residents * 3).toLocaleString()}{" "}
                          L/dzień
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Woda techniczna:</span>
                        <span className="font-medium">
                          {(demographicData.residents * 150).toLocaleString()}{" "}
                          L/dzień
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-700 mb-2">
                      Zasoby konsumpcyjne - Turyści
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Kalorie dziennie:</span>
                        <span className="font-medium">
                          {(demographicData.tourists * 2200).toLocaleString()}{" "}
                          kcal
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Woda pitna:</span>
                        <span className="font-medium">
                          {(demographicData.tourists * 3).toLocaleString()}{" "}
                          L/dzień
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Woda techniczna:</span>
                        <span className="font-medium">
                          {(demographicData.tourists * 150).toLocaleString()}{" "}
                          L/dzień
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-700 mb-2">
                      Łączne zapotrzebowanie (Ludzie{" "}
                      {animalManagementStrategy === "feed" ? "+ Zwierzęta" : ""}
                      )
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Kalorie dziennie:</span>
                        <span className="font-medium">
                          {(
                            (demographicData.residents +
                              demographicData.tourists) *
                            2200
                          ).toLocaleString()}{" "}
                          kcal
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Woda pitna (Ludzie):
                        </span>
                        <span className="font-medium">
                          {(
                            (demographicData.residents +
                              demographicData.tourists) *
                            3
                          ).toLocaleString()}{" "}
                          L/dzień
                        </span>
                      </div>
                      {animalManagementStrategy === "feed" && (
                        <>
                          <div className="flex justify-between pt-1 mt-1 border-t border-dashed">
                            <span className="text-gray-500">
                              Pasza dla zwierząt:
                            </span>
                            <span className="font-medium">
                              {demographicData.animalPopulations
                                .reduce(
                                  (sum, animal) =>
                                    sum + animal.count * animal.foodPerDayKg,
                                  0
                                )
                                .toLocaleString()}{" "}
                              kg/dzień
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">
                              Woda dla zwierząt:
                            </span>
                            <span className="font-medium">
                              {demographicData.animalPopulations
                                .reduce(
                                  (sum, animal) =>
                                    sum + animal.count * animal.waterPerDayL,
                                  0
                                )
                                .toLocaleString()}{" "}
                              L/dzień
                            </span>
                          </div>
                        </>
                      )}
                      <div className="flex justify-between pt-1 mt-1 border-t">
                        <span className="text-gray-600 font-semibold">
                          Woda techniczna (Łącznie):
                        </span>
                        <span className="font-bold text-gray-800">
                          {(
                            (demographicData.residents +
                              demographicData.tourists) *
                              150 +
                            (animalManagementStrategy === "feed"
                              ? demographicData.animalPopulations.reduce(
                                  (sum, animal) =>
                                    sum + animal.count * animal.waterPerDayL,
                                  0
                                )
                              : 0)
                          ).toLocaleString()}{" "}
                          L/dzień
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animal Resources Section - MOVED HERE */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Zasoby i zapotrzebowanie - Zwierzęta rolnicze
                </h3>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">
                    Strategia zarządzania zwierzętami:
                  </h4>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setAnimalManagementStrategy("feed")}
                      className={`px-3 py-1.5 text-sm rounded-md ${
                        animalManagementStrategy === "feed"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      Karmimy zwierzęta
                    </button>
                    <button
                      onClick={() => setAnimalManagementStrategy("food_source")}
                      className={`px-3 py-1.5 text-sm rounded-md ${
                        animalManagementStrategy === "food_source"
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      Zwierzęta jako źródło żywności
                    </button>
                    <button
                      onClick={() => setAnimalManagementStrategy("ignore")}
                      className={`px-3 py-1.5 text-sm rounded-md ${
                        animalManagementStrategy === "ignore"
                          ? "bg-red-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      Ignorujemy (bez zaopatrzenia)
                    </button>
                  </div>
                </div>

                <h4 className="font-medium text-gray-700 mb-2">
                  Populacja zwierząt (dane szacunkowe z ARiMR/innych źródeł):
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {demographicData.animalPopulations.map((animal) => (
                    <div key={animal.id} className="p-3 bg-gray-50 rounded-md">
                      <p className="font-semibold text-gray-700">
                        {animal.name}: {animal.count.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                {animalManagementStrategy === "feed" && (
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      Dzienne zapotrzebowanie zwierząt (przy strategii
                      'Karmimy'):
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                      {demographicData.animalPopulations.map((animal) => {
                        const totalFoodKg = animal.count * animal.foodPerDayKg;
                        const totalWaterL = animal.count * animal.waterPerDayL;
                        return (
                          <div
                            key={animal.id + "-demand"}
                            className="border-b pb-2 mb-2"
                          >
                            <p className="font-semibold text-gray-600">
                              {animal.name}:
                            </p>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Pasza:</span>
                              <span className="font-medium">
                                {totalFoodKg.toLocaleString()} kg/dzień
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Woda:</span>
                              <span className="font-medium">
                                {totalWaterL.toLocaleString()} L/dzień
                              </span>
                            </div>
                          </div>
                        );
                      })}
                      {/* Total for animals */}
                      <div className="md:col-span-2 mt-2 pt-2 border-t">
                        <p className="font-semibold text-gray-700">
                          Łącznie dla zwierząt (przy strategii 'Karmimy'):
                        </p>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Pasza:</span>
                          <span className="font-bold text-gray-800">
                            {demographicData.animalPopulations
                              .reduce(
                                (sum, animal) =>
                                  sum + animal.count * animal.foodPerDayKg,
                                0
                              )
                              .toLocaleString()}{" "}
                            kg/dzień
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Woda:</span>
                          <span className="font-bold text-gray-800">
                            {demographicData.animalPopulations
                              .reduce(
                                (sum, animal) =>
                                  sum + animal.count * animal.waterPerDayL,
                                0
                              )
                              .toLocaleString()}{" "}
                            L/dzień
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {animalManagementStrategy === "food_source" && (
                  <div className="p-3 bg-orange-50 border border-orange-200 rounded-md">
                    <h4 className="font-medium text-orange-700 mb-1">
                      Informacja: Zwierzęta jako źródło żywności
                    </h4>
                    <p className="text-sm text-orange-600">
                      Przy tej strategii, zasoby zwierzęce są traktowane jako
                      potencjalne źródło pożywienia dla ludności. Należy
                      uwzględnić ich wartość kaloryczną i wagę mięsa w bilansie
                      żywnościowym. Nie jest kalkulowane zapotrzebowanie na
                      paszę i wodę dla zwierząt.
                    </p>
                  </div>
                )}
              </div>

              {/* Strategic Grain Reserves Section - MOVED HERE */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Zapasy strategiczne - Rolnictwo
                </h3>
                <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-md">
                  <h4 className="font-medium text-indigo-700 mb-1">
                    Rezerwy zboża na siewy
                  </h4>
                  <p className="text-2xl font-bold text-indigo-800">
                    {demographicData.grainReservesForSowingTonnes.toLocaleString()}{" "}
                    ton
                  </p>
                  <p className="text-sm text-indigo-600 mt-1">
                    Uwaga: W sytuacji krytycznej, te rezerwy mogą zostać
                    rozważone jako źródło pożywienia dla ludności lub paszy dla
                    zwierząt (po odpowiednim przetworzeniu).
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "storage" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Magazynowanie zasobów
                  </h3>
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <PlusCircleIcon />
                    <span className="ml-2">Dodaj zasób</span>
                  </button>
                </div>

                <div className="mb-4 flex gap-4">
                  <input
                    type="text"
                    placeholder="Szukaj zasobów..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="">Wszystkie kategorie</option>
                    <option value="sprzęt">Sprzęt</option>
                    <option value="zasoby">Zasoby</option>
                    <option value="infrastruktura">Infrastruktura</option>
                    <option value="personel">Personel</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="">Wszystkie statusy</option>
                    <option value="sprawny">Sprawny</option>
                    <option value="dostępny">Dostępny</option>
                    <option value="w_użyciu">W użyciu</option>
                    <option value="w_naprawie">W naprawie</option>
                  </select>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr
                        style={{
                          backgroundColor: "#182139",
                          color: "white",
                        }}
                      >
                        <th className="px-4 py-3 text-left font-medium">
                          Nazwa zasobu
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Kategoria
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Status
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Lokalizacja
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Odpowiedzialny
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Przegląd
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Akcje
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {resources.map((resource, index) => (
                        <tr
                          key={resource.id}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-4 py-3 text-sm text-gray-800">
                            {resource.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {resource.category}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                                resource.status
                              )}`}
                            >
                              {statusLabels[resource.status]}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {resource.location}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {resource.responsible}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {resource.nextInspection}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex space-x-2">
                              <button className="p-1 text-gray-400 hover:text-blue-600">
                                <EyeIcon />
                              </button>
                              <button className="p-1 text-gray-400 hover:text-green-600">
                                <Edit2Icon />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h4 className="font-medium text-gray-700 mb-4">
                    Jednostki stałe
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Publiczne:</span>
                      <span className="font-medium">8</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Prywatne (z umową):</span>
                      <span className="font-medium">3</span>
                    </div>
                    <div className="flex justify-between text-sm border-t pt-2">
                      <span className="text-gray-600">Łącznie:</span>
                      <span className="font-medium">11</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h4 className="font-medium text-gray-700 mb-4">
                    Jednostki mobilne
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Beczkowozy:</span>
                      <span className="font-medium">2</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Kontenery mobilne:</span>
                      <span className="font-medium">4</span>
                    </div>
                    <div className="flex justify-between text-sm border-t pt-2">
                      <span className="text-gray-600">Łącznie:</span>
                      <span className="font-medium">6</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h4 className="font-medium text-gray-700 mb-4">
                    Warunki przechowywania
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Chłodnicze:</span>
                      <span className="font-medium">3 jednostki</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Suche:</span>
                      <span className="font-medium">5 jednostek</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Specjalne:</span>
                      <span className="font-medium">2 jednostki</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "inventory" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Remanent zasobów
                  </h3>
                  <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <RefreshCwIcon />
                    <span className="ml-2">Rozpocznij remanent</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Zasoby sprawne
                      </span>
                      <CheckCircleIcon />
                    </div>
                    <div className="mt-2">
                      <span className="text-2xl font-bold text-gray-800">
                        127
                      </span>
                      <span className="text-sm text-gray-600 ml-1">/ 156</span>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">W użyciu</span>
                      <EyeIcon />
                    </div>
                    <div className="mt-2">
                      <span className="text-2xl font-bold text-gray-800">
                        42
                      </span>
                      <span className="text-sm text-gray-600 ml-1">/ 156</span>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">W naprawie</span>
                      <AlertCircleIcon />
                    </div>
                    <div className="mt-2">
                      <span className="text-2xl font-bold text-gray-800">
                        8
                      </span>
                      <span className="text-sm text-gray-600 ml-1">/ 156</span>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Wymagają przeglądu
                      </span>
                      <CalendarIcon />
                    </div>
                    <div className="mt-2">
                      <span className="text-2xl font-bold text-gray-800">
                        12
                      </span>
                      <span className="text-sm text-gray-600 ml-1">/ 156</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-gray-700 mb-4">
                    Historia remanentu
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div>
                        <span className="text-sm font-medium">
                          Remanent roczny 2025
                        </span>
                        <span className="block text-xs text-gray-600">
                          15 kwietnia 2025, 08:30
                        </span>
                      </div>
                      <span className="text-sm text-green-600">Zakończony</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div>
                        <span className="text-sm font-medium">
                          Remanent kwartalny Q1
                        </span>
                        <span className="block text-xs text-gray-600">
                          28 marca 2025, 14:15
                        </span>
                      </div>
                      <span className="text-sm text-green-600">Zakończony</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div>
                        <span className="text-sm font-medium">
                          Remanent nadzwyczajny
                        </span>
                        <span className="block text-xs text-gray-600">
                          10 lutego 2025, 10:00
                        </span>
                      </div>
                      <span className="text-sm text-yellow-600">W trakcie</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Raporty i analizy
                  </h3>
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <FileTextIcon />
                    <span className="ml-2">Generuj raport</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-700">
                        Raport cykliczny
                      </h4>
                      <CalendarIcon />
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Automatyczny raport miesięczny stanu zasobów
                    </p>
                    <button className="text-sm text-blue-600 hover:text-blue-700">
                      Skonfiguruj
                    </button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-700">
                        Raport CAP-Resource
                      </h4>
                      <UploadIcon />
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Eksport w formacie CAP-Resource dla integracji
                    </p>
                    <button className="text-sm text-green-600 hover:text-green-700">
                      Generuj
                    </button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-700">
                        Analiza trendów
                      </h4>
                      <BarChart3Icon />
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Trendy wykorzystania i stanu zasobów
                    </p>
                    <button className="text-sm text-purple-600 hover:text-purple-700">
                      Zobacz
                    </button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-gray-700 mb-4">
                    Ostatnie raporty
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div className="flex items-center">
                        <FileTextIcon />
                        <div className="ml-3">
                          <span className="text-sm font-medium">
                            Raport miesięczny - Kwiecień 2025
                          </span>
                          <span className="block text-xs text-gray-600">
                            5 maja 2025, 09:15
                          </span>
                        </div>
                      </div>
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        Pobierz
                      </button>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div className="flex items-center">
                        <FileTextIcon />
                        <div className="ml-3">
                          <span className="text-sm font-medium">
                            Raport remanentu Q1 2025
                          </span>
                          <span className="block text-xs text-gray-600">
                            2 kwietnia 2025, 14:30
                          </span>
                        </div>
                      </div>
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        Pobierz
                      </button>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div className="flex items-center">
                        <FileTextIcon />
                        <div className="ml-3">
                          <span className="text-sm font-medium">
                            Analiza zapotrzebowania - Marzec 2025
                          </span>
                          <span className="block text-xs text-gray-600">
                            28 marca 2025, 11:00
                          </span>
                        </div>
                      </div>
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        Pobierz
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// Main App Component - TEMPORARILY SIMPLIFIED FOR DEBUGGING
const App = () => {
  const [currentView, setCurrentView] = React.useState("home");

  // Home Screen Component
  const HomeScreen = () => {
    const roles = [
      {
        id: "local-admin",
        title: "Zarządca Lokalny",
        description: "Panel dla wójta, burmistrza i koordynatora lokalnego",
        icon: UserIcon,
        color: "blue",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
        action: () => setCurrentView("local-admin"),
      },
      {
        id: "global-admin",
        title: "Zarządca Globalny",
        description: "Panel dla wojewody i koordynatora regionu",
        icon: UsersIcon,
        color: "green",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        textColor: "text-green-700",
        action: () => setCurrentView("global-admin"),
      },
      {
        id: "local-crisis",
        title: "Tryb Kryzysowy - Lokalny",
        description: "Panel dla strażaka, dyspozytora OSP",
        icon: AlertCircleIcon,
        color: "orange",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        textColor: "text-orange-700",
        action: () => setCurrentView("local-crisis"),
      },
      {
        id: "global-crisis",
        title: "Tryb Kryzysowy - Globalny",
        description: "Panel dla wojewody i centrali kryzysowej",
        icon: ShieldIcon,
        color: "red",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        textColor: "text-red-700",
        action: () => setCurrentView("global-crisis"),
      },
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header
          style={{ backgroundColor: "#182139", color: "white" }}
          className="shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold">
              Centrum Monitorowania Zasobów
            </h1>
            <p className="mt-1 text-gray-300">
              System zarządzania kryzysowego i obrony cywilnej
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Wybierz swoją rolę
            </h2>
            <p className="text-gray-600">
              Kliknij na odpowiednią rolę, aby uzyskać dostęp do dedykowanego
              panelu
            </p>
          </div>

          {/* Role Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={role.action}
                  className={`role-card p-6 rounded-lg border ${role.bgColor} ${role.borderColor} transition-all duration-200 hover:shadow-lg`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`p-4 rounded-full ${role.bgColor} border ${role.borderColor} ${role.textColor}`}
                    >
                      <Icon />
                    </div>
                    <h3 className="mt-4 font-medium text-gray-800">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {role.description}
                    </p>
                    <div
                      className={`mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${role.bgColor} ${role.textColor}`}
                    >
                      Otwórz panel
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Info Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-medium text-gray-700 mb-2">O systemie</h3>
            <p className="text-sm text-gray-600">
              System Centrum Monitorowania Zasobów został opracowany, aby
              zapewnić służbom zarządzania kryzysowego i obrony cywilnej
              bieżący, wiarygodny obraz zasobów dostępnych na danym terenie.
              Pozwala na skrócenie czasu alokacji zasobów w sytuacji zagrożenia,
              ograniczenie dublowania zakupów i chaos logistyczny, oraz
              ułatwienie wspólnego planowania między gminami, powiatami i NGO.
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <p className="text-sm text-gray-600 text-center">
              System zgodny z wymaganiami przepisów o ochronie ludności i
              obronie cywilnej
            </p>
          </div>
        </footer>
      </div>
    );
  };

  // Expose setCurrentView for child components
  window.setCurrentView = setCurrentView;

  // Render appropriate view based on current state
  switch (currentView) {
    case "local-admin":
      return <LocalAdminDashboard />;
    case "global-admin":
      return <GlobalAdmin />;
    case "local-crisis":
      return <LocalCrisisMode />;
    case "global-crisis":
      return <GlobalCrisisMode />;
    default:
      return <HomeScreen />;
  }
};

// Render the app
ReactDOM.render(<App />, document.getElementById("root"));
