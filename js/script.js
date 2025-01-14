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
