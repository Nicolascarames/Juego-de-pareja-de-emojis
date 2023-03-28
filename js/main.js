"use strict";

const caritas = [
  { id: "uno", imagen: "😄" },
  { id: "dos", imagen: "😅" },
  { id: "tres", imagen: "🤣" },
  { id: "cuatro", imagen: "😎" },
  { id: "cinco", imagen: "😚" },
  { id: "seis", imagen: "😞" },
  { id: "siete", imagen: "😫" },
  { id: "ocho", imagen: "🤬" },
  { id: "nueve", imagen: "😄" },
  { id: "diez", imagen: "😅" },
  { id: "once", imagen: "🤣" },
  { id: "doce", imagen: "😎" },
  { id: "catorce", imagen: "😚" },
  { id: "dieciseis", imagen: "😞" },
  { id: "diecisiete", imagen: "😫" },
  { id: "dieciocho", imagen: "🤬" },
];

const boxJuegoElement = document.querySelector(".box__juego");

let cards;

const empezarJuego = () => {
  //copiar el array
  //coger cara random
  //quitar la cara escojida de el array
  //random
  const copia = [...caritas];

  for (let i = 0; i < caritas.length; i++) {
    const random = Math.floor(Math.random() * (copia.length - 0) + 0);
    const liElement = document.createElement("li");
    const divContentElement = document.createElement("div");
    const divFrontElement = document.createElement("div");
    const divBackElement = document.createElement("div");
    //
    divFrontElement.classList.add("front");
    divContentElement.append(divFrontElement);
    //
    divBackElement.classList.add("back");
    divContentElement.append(divBackElement);
    divBackElement.textContent = copia[random].imagen;
    //
    divContentElement.classList.add("content");
    liElement.append(divContentElement);
    //
    liElement.classList.add("card");
    liElement.id = copia[random].id;
    //flip de las cartas
    liElement.addEventListener("click", Click);
    //
    boxJuegoElement.append(liElement);
    copia.splice(random, 1);
    // liElement.addEventListener("click", Click);
  }
};

const btnPrincipalElement = document.querySelector(".btn__principal");

btnPrincipalElement.addEventListener("click", empezarJuego);

//flip de las cartas

// const reveal = (e) => {
//   const currentCard = e.currentTarget;
//   currentCard.classList.add("flipped");

//   setTimeout(() => {
//     currentCard.classList.remove("flipped");
//   }, 2000);
// };

let cont = 0;
let carta;

const Click = (e) => {
  const caraCard = e.currentTarget.querySelector(".back");
  let caraCard1;
  let caraCard2;
  let Card1;
  let Card2;
  if (cont === 0) {
    // console.log(
    //   document.getElemetbyId("dos").queryselector(".front").textcontent
    // );
    caraCard1 = caraCard;
    const currentCard = e.currentTarget;
    Card1 = currentCard;
    currentCard.classList.add("flipped");
    carta = e.currentTarget.id;
    document.getElementById(`${carta}`).removeEventListener("click", Click);
    console.log(cont);
    console.log(Card1);
    cont++;
  } else {
    caraCard2 = caraCard;
  }

  if (cont === 1) {
    Card2 = e.currentTarget;
    e.currentTarget.classList.add("flipped");
    document
      .getElementById(`${e.currentTarget.id}`)
      .removeEventListener("click", Click);
    console.log(cont);
  }
  if (caraCard1 === caraCard2) {
    console.log("correcto");
    document.getElementById(`${carta}`).className = "back";

    document.getElementById(`${e.currentTarget.id}`).className = "back";
    cont = 0;
  } else {
    console.log("no correcto");
    console.log(Card1);
    console.log(Card2);
    caraCard1.classList.remove("flipped");
    caraCard1.addEventListener("click", Click);
    caraCard2.classList.remove("flipped");
    caraCard2.addEventListener("click", Click);

    // document.getElementById(`${carta}`).addEventListener("click", Click);
    setTimeout(() => {
      document.getElementById(`${e.currentTarget.id}`).className = "card";

      document.getElementById(`${carta}`).className = "card";
    }, 800);
    cont = 0;
    return;
  }
};
