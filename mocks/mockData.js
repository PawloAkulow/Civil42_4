/**
 * Mock Data for Civil42 Application
 * This file contains all the mock data used in the application in a single object
 * It can be included directly in the HTML file before the main script
 */

const mockData = {
  // Resources data (previously mockResources)
  resources: [
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
      capacity: 5000,
      fillLevel: 80,
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
      capacity: 50,
    },
    {
      id: "med1",
      name: "Punkt Medyczny Omega",
      lat: 51.36,
      lng: 19.35,
      type: "medical_point",
      category: "medical",
      staff: 2,
    },
  ],

  // Gmina data
  gminas: {
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
  },

  // Demographic data
  demographic: {
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
    grainReservesForSowingTonnes: 250,
  },

  // Population zones for density simulation
  populationZones: [
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
  ],
};
