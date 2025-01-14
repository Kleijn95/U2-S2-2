function aggiuntaHOT() {
  const cards = document.querySelectorAll(".cardHot");
  console.log(cards);

  for (let index = 0; index < cards.length; index++) {
    const card = cards[index]; // Seleziona ogni singola card
    const hot = document.createElement("span");
    hot.innerText = "HOT";
    hot.classList.add("position-absolute", "top-0", "end-0", "mt-1", "me-1", "badge", "rounded-pill", "bg-danger");

    card.appendChild(hot); // Aggiungi il nuovo span alla card
  }
}

aggiuntaHOT();

function toggleCards() {
  const bottone = document.querySelector("#linkHideCard");
  const allCards = document.querySelectorAll(".card");
  // Aggiungi l'evento click al bottone
  bottone.addEventListener("click", function () {
    for (let index = 0; index < allCards.length; index++) {
      const card = allCards[index];

      // Controlla se la card ha già la classe d-none
      if (card.classList.contains("d-none")) {
        card.classList.remove("d-none"); // Rendi la card visibile
      } else {
        card.classList.add("d-none"); // Nascondi la card
      }
    }
  });
}

toggleCards();

function countCards() {
  const bottone = document.querySelector("#linkHideCard");
  const allCards = document.querySelectorAll(".card");
  let contatore = 0;
  for (let i = 0; i < allCards.length; i++) {
    const element = allCards[i];

    // console.log(element);
    // console.dir(element.classList.contains("d-md-none"));

    if (window.getComputedStyle(element.parentElement).display !== "none") {
      contatore++;
    }
  }
  console.log(`Numero totale di viaggi: ${contatore}`);
}
countCards();
