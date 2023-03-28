console.log("hola mundo");
const container = document.querySelector(".contenedor");
let cont = 0;
let carta1;
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

// // console.log(caritas[0]);
// const Click = (e) => {
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

// const Start = () => {
//   //copiar el array
//   //coger cara random
//   //quitar la cara escojida de el array
//   //random
//   const copia = [...caritas];

//   for (let i = 0; i < caritas.length; i++) {
//     const random = Math.floor(Math.random() * (copia.length - 0) + 0);
//     const div = document.createElement("div");
//     div.textContent = copia[random].imagen;
//     div.className = "card";
//     div.id = copia[random].id;
//     div.addEventListener("click", Click);
//     document.querySelector(".contenedor").append(div);
//     copia.splice(random, 1);
//   }
// };
