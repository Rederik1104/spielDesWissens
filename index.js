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
  window.startQuiz = function (planet) {
    alert("Du hast die Kategorie " + planet + " ausgewählt!");
    closeMenu();
  };
});
