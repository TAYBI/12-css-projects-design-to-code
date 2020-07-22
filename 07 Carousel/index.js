let left = document.querySelector(".left");
let right = document.querySelector(".right");
let card = document.querySelectorAll(".card");
let cards = document.querySelector(".cards");
let cards_Class = document.getElementsByClassName("card");
let numCard = card.length;
let index = 3;

function move_card(x) {
  for (let i = 0; i < cards_Class.length; i++) {
    const _card = cards_Class[i];
    _card.style.transform = `translateX(${x}px)`;
  }
}

left.addEventListener("click", () => {
  if (index <= numCard) move_card(-290);
  console.log("left");
  index++;
});

right.addEventListener("click", () => {
  if (index != 2) move_card(290);
  index--;
  console.log("right");
});
