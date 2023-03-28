"use strict";

const caritas = [
  { id: 1, imagen: "😄" },
  { id: 2, imagen: "😅" },
  { id: 3, imagen: "🤣" },
  { id: 4, imagen: "😎" },
  { id: 5, imagen: "😚" },
  { id: 6, imagen: "😞" },
  { id: 7, imagen: "😫" },
  { id: 8, imagen: "🤬" },
  { id: 1, imagen: "😄" },
  { id: 2, imagen: "😅" },
  { id: 3, imagen: "🤣" },
  { id: 4, imagen: "😎" },
  { id: 5, imagen: "😚" },
  { id: 6, imagen: "😞" },
  { id: 7, imagen: "😫" },
  { id: 8, imagen: "🤬" },
];

let cont = 0;
let carta1;

// console.log(caritas[0]);
// const Click = (e) => {
//   e.stopPropagation();
//   if (cont === 0) {
//     e.target.className = "cardflip";

//     carta1 = e.target.id;
//   } else if (cont === 1) {
//     e.target.className = "cardflip";

//     if (carta1 === e.target.id) {
//       console.log("correcto");
//       document.getElementById(`${carta1}`).className = "cardhide";
//       document.getElementById(`${e.target.id}`).className = "cardhide";
//     } else {
//       console.log("no correcto");
//       console.log(carta1, e.target.id);
//     }
//   }

//   cont++;
//   console.log(cont);
// };

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
    liElement.addEventListener("click", reveal);
    //
    boxJuegoElement.append(liElement);
    copia.splice(random, 1);
    // liElement.addEventListener("click", Click);
  }
};

const btnPrincipalElement = document.querySelector(".btn__principal");

btnPrincipalElement.addEventListener("click", empezarJuego);

//flip de las cartas

const reveal = (e) => {
  const currentCard = e.currentTarget;
  currentCard.classList.add("flipped");

  setTimeout(() => {
    currentCard.classList.remove("flipped");
  }, 2000);
};
