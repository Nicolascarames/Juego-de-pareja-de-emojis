"use strict";

import { ReStart, Start, HandleClick, OpenCloseMod } from "./js.js";

const localStorageState = window.localStorage.getItem("storage");

const state = {
  usuarios: localStorageState ? JSON.parse(localStorageState).usuarios : [],
  dark: localStorageState ? JSON.parse(localStorageState).dark : false,
};

const saveState = () => {
  const jsonState = JSON.stringify(state);
  window.localStorage.setItem("storage", jsonState);
};

const ulPuntuacionesElement = document.querySelector(".ul__puntuaciones");

const render = () => {
  const fragmentUsuarios = document.createDocumentFragment();
  for (const usuario of state.usuarios) {
    const liElement = document.createElement("li");
    const h7Element = document.createElement("h7");
    const span1Element = document.createElement("span");

    liElement.append(h7Element);
    liElement.append(span1Element);

    h7Element.textContent = usuario.nombre;
    span1Element.textContent = usuario.puntuacion;

    fragmentUsuarios.prepend(liElement);
  }
  //limpio tabla puntuaciones
  ulPuntuacionesElement.innerHTML = "";
  //añado todos los usuarios al ul
  ulPuntuacionesElement.append(fragmentUsuarios);
};

//añade un usuario
const addUser = (usuarioNombre) => {
  const nombreUsuario = usuarioNombre;
  return nombreUsuario;
  // const datoUsuario = {
  //   nombre: usuarioNombre,
  //   puntuacion: 0,
  // };
  // state.usuarios.push(datoUsuario);
  // saveState();
};

const formPrincipalElement = document.forms.form__principal;

let nombreUsuario;

const funcionSubmit = (evento) => {
  evento.preventDefault();
  const inputUsuarioElement = formPrincipalElement.elements.userName;
  const nombreUsuarioElement = inputUsuarioElement.value.trim();
  if (nombreUsuarioElement !== "") {
    nombreUsuario = addUser(nombreUsuarioElement);
    // render();
    Start();
    OpenCloseMod();
    return nombreUsuario;
  } else {
    alert("Nombre no valido");
  }
  // inputUsuarioElement.value = "";
  //se ha quitado el setattribute porqué no dejaba escribir despues de el alert
  //inputUsuarioElement.setAttribute("readonly", "");
};

formPrincipalElement.addEventListener("submit", funcionSubmit);

//añade la puntuacion

const addPuntos = (puntosUsuario) => {
  const datoUsuario = {
    nombre: nombreUsuario,
    puntuacion: puntosUsuario,
  };
  state.usuarios.push(datoUsuario);
  saveState();
};

// const funcionUltima = (evento) => {
//   evento.preventDefault();
//   addPuntos(puntosUsuario);
//   render();
// };

//recarga de pagina web

const btnHomeElement = document.querySelector(".btn__home");

const funcionHome = (evento) => {
  console.log("recarga de web");
  evento.preventDefault();
  location.reload();
};

btnHomeElement.addEventListener("click", funcionHome);

export { addPuntos, render, nombreUsuario };
