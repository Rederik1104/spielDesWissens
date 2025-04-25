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
    id: 1,
    type: "Allgemeinwissen",
    question: "Welche ist die größte Insel der Welt?",
    answer: "Grönland",
    difficultyLevel: "Mittel",
  },
  {
    id: 2,
    type: "Allgemeinwissen",
    question: "Welches Land hat die meisten Nachbarländer?",
    answer: "Russland",
    difficultyLevel: "Mittel",
  },
  {
    id: 3,
    type: "Allgemeinwissen",
    question: "Wie heißt der längste Fluss der Welt?",
    answer: "Amazonas",
    difficultyLevel: "Mittel",
  },
  {
    id: 4,
    type: "Allgemeinwissen",
    question: "Welches Land hat die größte Bevölkerung?",
    answer: "China",
    difficultyLevel: "Mittel",
  },
  {
    id: 5,
    type: "Allgemeinwissen",
    question: "In welchem Kontinent liegt der Viktoriasee?",
    answer: "Afrika",
    difficultyLevel: "Mittel",
  },
  {
    id: 6,
    type: "Allgemeinwissen",
    question: "Was ist der härteste natürliche Stoff auf der Erde?",
    answer: "Diamant",
    difficultyLevel: "Mittel",
  },
  {
    id: 7,
    type: "Allgemeinwissen",
    question: "Was bezeichnet der Begriff 'Photosynthese'?",
    answer:
      "Den Prozess, bei dem Pflanzen Lichtenergie in chemische Energie umwandeln",
    difficultyLevel: "Mittel",
  },
  {
    id: 8,
    type: "Allgemeinwissen",
    question: "Welches Element hat das chemische Symbol 'O'?",
    answer: "Sauerstoff",
    difficultyLevel: "Mittel",
  },
  {
    id: 9,
    type: "Allgemeinwissen",
    question:
      "Wie nennt man den Effekt, bei dem die Erde das Sonnenlicht reflektiert?",
    answer: "Albedo",
    difficultyLevel: "Mittel",
  },
  {
    id: 10,
    type: "Allgemeinwissen",
    question:
      "Wie heißt der berühmte Physiker, der die Relativitätstheorie formuliert hat?",
    answer: "Albert Einstein",
    difficultyLevel: "Mittel",
  },
  {
    id: 11,
    type: "Allgemeinwissen",
    question: "Wer war der erste Präsident der Vereinigten Staaten?",
    answer: "George Washington",
    difficultyLevel: "Mittel",
  },
  {
    id: 12,
    type: "Allgemeinwissen",
    question: "Welcher Krieg führte zur Gründung der Vereinten Nationen?",
    answer: "Der Zweite Weltkrieg",
    difficultyLevel: "Mittel",
  },
  {
    id: 13,
    type: "Allgemeinwissen",
    question: "Welches Jahr markiert das Ende des Zweiten Weltkriegs?",
    answer: "1945",
    difficultyLevel: "Mittel",
  },
  {
    id: 14,
    type: "Allgemeinwissen",
    question:
      "Welche berühmte Mauer trennte während des Kalten Krieges Ost- und Westdeutschland?",
    answer: "Die Berliner Mauer",
    difficultyLevel: "Mittel",
  },
  {
    id: 15,
    type: "Allgemeinwissen",
    question: "In welchem Jahr wurde die französische Revolution gestartet?",
    answer: "1789",
    difficultyLevel: "Mittel",
  },
  {
    id: 16,
    type: "Allgemeinwissen",
    question: "Wer malte die Mona Lisa?",
    answer: "Leonardo da Vinci",
    difficultyLevel: "Mittel",
  },
  {
    id: 17,
    type: "Allgemeinwissen",
    question: "Welches ist das bekannteste Werk von William Shakespeare?",
    answer: "Hamlet",
    difficultyLevel: "Mittel",
  },
  {
    id: 18,
    type: "Allgemeinwissen",
    question:
      "In welchem Jahr wurde das erste Buch von J.K. Rowling über Harry Potter veröffentlicht?",
    answer: "1997",
    difficultyLevel: "Mittel",
  },
  {
    id: 19,
    type: "Allgemeinwissen",
    question:
      "Was versteht man unter dem Begriff 'Impressionismus' in der Kunst?",
    answer:
      "Eine Kunstrichtung, die vor allem durch den Einsatz von Licht und Farbe sowie durch ungenaue Darstellungen charakterisiert ist.",
    difficultyLevel: "Mittel",
  },
  {
    id: 20,
    type: "Allgemeinwissen",
    question: "Wer komponierte die '9. Sinfonie'?",
    answer: "Ludwig van Beethoven",
    difficultyLevel: "Mittel",
  },
  {
    id: 21,
    type: "Allgemeinwissen",
    question: "Wie viele Felder hat ein Schachbrett?",
    answer: "64 Felder",
    difficultyLevel: "Mittel",
  },
  {
    id: 22,
    type: "Allgemeinwissen",
    question: "Welches ist das meistverkaufte Videospiel aller Zeiten?",
    answer: "Minecraft",
    difficultyLevel: "Mittel",
  },
  {
    id: 23,
    type: "Allgemeinwissen",
    question:
      "Welcher bekannte Superheld wurde von Stan Lee und Steve Ditko erschaffen?",
    answer: "Spider-Man",
    difficultyLevel: "Mittel",
  },
  {
    id: 24,
    type: "Allgemeinwissen",
    question:
      "Wie heißt der berühmte, künstliche Intelligenz-gesteuerte Roboter in der Filmreihe „Star Wars“?",
    answer: "R2-D2",
    difficultyLevel: "Mittel",
  },
  {
    id: 25,
    type: "Allgemeinwissen",
    question: "Welches Brettspiel enthält ein 'Gefängnis'?",
    answer: "Monopoly",
    difficultyLevel: "Mittel",
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
