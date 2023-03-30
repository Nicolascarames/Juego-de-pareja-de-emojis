import { addPuntos, render, nombreUsuario } from "./state.js";

//juego de pareja de emojis

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
let cont = 0;
let first;
let intentos = 0;
let puntos = 0;
let hardmode = false;
let time = 0;
let timer;
let finish = 0;
let extraPuntos = 200;
const HardMode = () => {
  hardmode = true;
};

const TimerOnOff = (boolean) => {
  if (!boolean) {
    clearInterval(timer);
    timer = 0;
    console.log("if timer");
  } else {
    timer = setInterval(() => {
      time++;
      document.getElementById("tiempo").textContent = `${time}s`;
    }, 1000);
  }
};
const GameFinished = () => {
  if (finish === 8) {
    TimerOnOff(false);
    document.querySelector(".modalgameover").style.display = "flex";
    addPuntos(puntos + extraPuntos - time);
    render();
  }
};
const OpenCloseMod = () => {
  document.querySelector(".modal").style.display = "none";
};
const HandleClick = (e) => {
  cont++;

  if (cont === 1) {
    first = e.target.id;
    document.getElementById(`${e.target.id}`).style.transform = "rotateX(0)";
    document
      .getElementById(`${e.target.id}`)
      .removeEventListener("click", HandleClick);
  }
  if (cont === 2) {
    document.getElementById(`${e.target.id}`).style.transform = "rotateX(0)";
    document
      .getElementById(`${e.target.id}`)
      .removeEventListener("click", HandleClick);
    let cartauno = document.querySelector(`#${first} .front`);
    let cartados = document.querySelector(`#${e.target.id} .front`);

    if (cartauno.textContent === cartados.textContent) {
      console.log("iguales!");
      document.getElementById(`${first}`).style.opacity = "0";
      document.getElementById(`${e.target.id}`).style.opacity = "0";
      puntos = puntos + 50;
      document.getElementById("puntos").textContent = `Puntos : ${puntos}`;
      cont = 0;
      finish++;
      GameFinished();
    } else {
      console.log("no iguales!");
      intentos++;
      if (intentos === 7 && hardmode) {
        document.querySelector(".modalgameover").style.display = "flex";
        addPuntos(puntos + extraPuntos - time);
        render();
      } else {
        document.getElementById(
          "intentos"
        ).textContent = `Intentos : ${intentos}${hardmode ? "/ 7" : ""}`;
      }
      //   intentos === 1
      //     ? (document.querySelector(".modalgameover").style.display = "flex")
      //     : (document.getElementById(
      //         "intentos"
      //       ).textContent = `Intentos : ${intentos}/5`);

      setTimeout(() => {
        document.getElementById(`${first}`).style.transform = "rotateY(180deg)";
        document.getElementById(`${e.target.id}`).style.transform =
          "rotateY(180deg)";
        document
          .querySelector(`#${first}`)
          .addEventListener("click", HandleClick);
        document
          .querySelector(`#${e.target.id}`)
          .addEventListener("click", HandleClick);

        cont = 0;
      }, 1000);
    }
  }
};

const Start = () => {
  const copia = [...caritas];
  for (let i = 0; i < caritas.length; i++) {
    const random = Math.floor(Math.random() * (copia.length - 0) + 0);
    const Card = document.createElement("div");
    const Front = document.createElement("div");
    Front.className = "front";
    Front.textContent = copia[random].imagen;
    Card.className = "card";
    Card.id = copia[random].id;
    Card.append(Front);

    setTimeout(() => {
      document.querySelector(".container").append(Card);
    }, 100 * i);
    Card.addEventListener("click", HandleClick);
    copia.splice(random, 1);
  }
  setTimeout(() => {
    TimerOnOff(true);
  }, 2000);
};
const ReStart = () => {
  console.log("restart");
  document.querySelector(".container").textContent = "";
  intentos = 0;
  puntos = 0;
  document.getElementById("intentos").textContent = `Intentos : ${intentos}/5`;
  document.getElementById("puntos").textContent = `Puntos : ${puntos}`;
  time = 0;
  Start();
  document.querySelector(".modalgameover").style.display = "none";
};

//restart juego

const btnRestartElement = document.querySelector(".btn__restart");

btnRestartElement.addEventListener("click", ReStart);

const BtnHard = document.querySelector(".btnred");
BtnHard.addEventListener("click", HardMode);

export { ReStart, Start, HandleClick, OpenCloseMod, time, intentos };
