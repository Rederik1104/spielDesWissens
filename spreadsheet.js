const { google } = require("googleapis");
const fs = require("fs");

// Lade die Anmeldedaten für das Servicekonto
const credentials = require("./astral-volt-424216-r8-dea417bdc8b9.json"); // Pfad zur heruntergeladenen JSON-Datei

// Authentifizierung mit Google APIs
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// Deine Google Spreadsheet ID (findest du in der URL deines Sheets)
const SPREADSHEET_ID = "1tLrnvgR1QhExpwDztNmqgYRjjBjtUVyvrQbpyAN9qaU"; // Ersetze dies durch deine ID

// Daten, die du hinzufügen möchtest
const data = [
  {
    id: "P1",
    type: "Pluto",
    question: "Welcher Sportler hat die meisten Olympiamedaillen gewonnen?",
    answer: "Michael Phelps",
    difficultyLevel: "Hard",
  },
  {
    id: "P2",
    type: "Pluto",
    question:
      "In welchem Jahr wurde die erste Fußball-Weltmeisterschaft ausgetragen?",
    answer: "1930",
    difficultyLevel: "Hard",
  },
  {
    id: "P3",
    type: "Pluto",
    question:
      "Wer ist der erfolgreichste Tennisspieler aller Zeiten in Bezug auf Grand Slam-Titel?",
    answer: "Margaret Court",
    difficultyLevel: "Hard",
  },
  {
    id: "P4",
    type: "Pluto",
    question:
      "Welches Team gewann die erste Basketball-Weltmeisterschaft 1950?",
    answer: "Argentinien",
    difficultyLevel: "Hard",
  },
  {
    id: "P5",
    type: "Pluto",
    question: "Wer komponierte das berühmte Werk 'Die 9. Sinfonie'?",
    answer: "Ludwig van Beethoven",
    difficultyLevel: "Hard",
  },
  {
    id: "P6",
    type: "Pluto",
    question: "Wie heißt das weltweit größte Musikfestival?",
    answer: "Donauinselfest in Wien",
    difficultyLevel: "Hard",
  },
  {
    id: "P7",
    type: "Pluto",
    question:
      "Welcher Musikstil prägte die US-amerikanischen Südstaaten in den 1920er Jahren und beeinflusste viele andere Musikrichtungen?",
    answer: "Blues",
    difficultyLevel: "Hard",
  },
  {
    id: "P8",
    type: "Pluto",
    question: "In welchem Jahr fand das erste 'Wimbledon'-Tennisturnier statt?",
    answer: "1877",
    difficultyLevel: "Hard",
  },
  {
    id: "P9",
    type: "Pluto",
    question:
      "Welcher Musiker ist bekannt für die Erfindung des 'Moog-Synthesizers'?",
    answer: "Robert Moog",
    difficultyLevel: "Hard",
  },
  {
    id: "P10",
    type: "Pluto",
    question: "Wer gewann den Ballon d'Or 2009?",
    answer: "Lionel Messi",
    difficultyLevel: "Hard",
  },
  {
    id: "P11",
    type: "Pluto",
    question:
      "Wie heißt das älteste professionelle Fußballteam in Deutschland?",
    answer: "1. FC Nürnberg",
    difficultyLevel: "Hard",
  },
  {
    id: "P12",
    type: "Pluto",
    question: "Welche Musikband war bekannt für das Album 'Abbey Road'?",
    answer: "The Beatles",
    difficultyLevel: "Hard",
  },
  {
    id: "P13",
    type: "Pluto",
    question: "In welchem Jahr fand das erste Formel 1-Rennen statt?",
    answer: "1950",
    difficultyLevel: "Hard",
  },
  {
    id: "P14",
    type: "Pluto",
    question:
      "Welche berühmte Musikinstrumentenfirma wurde 1833 in Leipzig gegründet?",
    answer: "Bösendorfer",
    difficultyLevel: "Hard",
  },
  {
    id: "P15",
    type: "Pluto",
    question:
      "Welche deutsche Rockband hatte ihren größten Erfolg mit dem Album 'Mensch'?",
    answer: "Herbert Grönemeyer",
    difficultyLevel: "Hard",
  },
  {
    id: "P16",
    type: "Pluto",
    question: "Welches Land gewann die Fußball-Weltmeisterschaft 2014?",
    answer: "Deutschland",
    difficultyLevel: "Hard",
  },
  {
    id: "P17",
    type: "Pluto",
    question:
      "Welche Sportart wurde 1964 erstmals als olympische Disziplin aufgenommen?",
    answer: "Judo",
    difficultyLevel: "Hard",
  },
  {
    id: "P18",
    type: "Pluto",
    question:
      "Wie nennt man den ersten Teil einer symphonischen Musikkomposition?",
    answer: "Allegro",
    difficultyLevel: "Hard",
  },
  {
    id: "P19",
    type: "Pluto",
    question:
      "Welches berühmte Musikfestival findet jährlich in Glastonbury statt?",
    answer: "Glastonbury Festival",
    difficultyLevel: "Hard",
  },
  {
    id: "P20",
    type: "Pluto",
    question:
      "Welche sportliche Disziplin ist Teil der 'Leichtathletik' und umfasst den Wurf eines Hammers?",
    answer: "Hammerwerfen",
    difficultyLevel: "Hard",
  },
  // Füge hier weitere Fragen hinzu...
];

async function appendData() {
  try {
    // Wandelt die Daten in das 2D-Array um, das Google Sheets erwartet
    const rows = data.map((entry) => [
      entry.id,
      entry.type,
      entry.question,
      entry.answer,
      entry.difficultyLevel,
    ]);

    // Füge die Daten in das Google Spreadsheet ein
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Tabellenblatt1!A:E", // Der Bereich, in dem die Daten eingefügt werden
      valueInputOption: "RAW", // Die Eingabewerte werden als Rohwerte eingefügt
      requestBody: {
        values: rows,
      },
    });

    console.log("Daten erfolgreich hinzugefügt:", response.data);
  } catch (error) {
    console.error("Fehler beim Hinzufügen der Daten:", error);
  }
}

appendData();
