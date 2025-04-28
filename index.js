document.addEventListener("DOMContentLoaded", function () {
  // Alle Karten mit der Klasse 'planet-card' auswählen
  const planetCards = document.querySelectorAll(".planet-card");

  planetCards.forEach(function (card) {
    // Event-Listener für jede Karte hinzufügen
    card.addEventListener("click", function () {
      const planetMenu = document.getElementById("planet-menu");
      if (planetMenu) {
        planetMenu.style.display = "block";
      }
    });
  });

  // Menü schließen
  window.closeMenu = function () {
    const planetMenu = document.getElementById("planet-menu");
    if (planetMenu) {
      planetMenu.style.display = "none";
    }
  };

  // Quiz starten (zeigt eine einfache Alert-Nachricht)
});

let usedQuestions = []; // Merkt sich, welche Fragen schon gezeigt wurden

async function getCards(planet) {
  const response = await fetch("https://sheetdb.io/api/v1/a3qhfqqslvnns");
  const data = await response.json();

  const filteredData = data.filter((item) => item.type === planet);

  // Filtere heraus, welche noch NICHT verwendet wurden
  const availableQuestions = filteredData.filter(
    (q) => !usedQuestions.includes(q.id)
  );

  if (availableQuestions.length === 0) {
    alert(
      "Alle Fragen wurden bereits beantwortet! Drücke 'Alle Fragen freischalten', um neu zu starten."
    );
    return;
  }

  // Zufällig eine Frage auswählen
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const selectedQuestion = availableQuestions[randomIndex];

  usedQuestions.push(selectedQuestion.id); // Merke diese Frage als benutzt

  // Hier zeigst du die Frage schön an (z.B. in einem <div id="questionContainer">)
  closeMenu();
  displayQuestion(selectedQuestion);
}

function displayQuestion(question) {
  const container = document.getElementById("questionContainer");
  container.innerHTML = `
    <div class="question-card">
      <h2>${question.question}</h2>
      <button onclick="showAnswer('${question.answer}')">Antwort anzeigen</button>
    </div>
  `;
}

function showAnswer(answer) {
  const container = document.getElementById("questionContainer");
  container.innerHTML += `<p class="answer">Antwort: ${answer}</p>`;
}

function resetQuestions() {
  usedQuestions = [];
  alert("Alle Fragen sind wieder freigeschaltet!");
}
