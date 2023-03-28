"use strict";

const localStorageState = window.localStorage.getItem("storage");

const state = {
  usuarios: localStorageState ? JSON.parse(localStorageState).usuarios : [],
  dark: localStorageState ? JSON.parse(localStorageState).dark : false,
};

const saveState = () => {
  const jsonState = JSON.stringify(state);
  window.localStorage.setItem("storage", jsonState);
};

//añade un usuario
const addUser = (usuarioNombre) => {
  const datoUsuario = {
    nombre: usuarioNombre,
    puntuacion: 0,
    puntuacionTotal: 0,
  };
  state.usuarios.push(datoUsuario);
  saveState();
};

const ulPuntuacionesElement = document.querySelector(".ul__puntuaciones");

const render = () => {
  const fragmentUsuarios = document.createDocumentFragment();
  for (const usuario of state.usuarios) {
    const liElement = document.createElement("li");
    const h7Element = document.createElement("h7");
    const span1Element = document.createElement("span");
    const span2Element = document.createElement("span");
    liElement.append(h7Element);
    liElement.append(span1Element);
    liElement.append(span2Element);
    h7Element.textContent = usuario.nombre;
    span1Element.textContent = usuario.puntuacion;
    span2Element.textContent = usuario.puntuacionTotal;
    fragmentUsuarios.prepend(liElement);
  }
  //limpio tabla puntuaciones
  ulPuntuacionesElement.innerHTML = "";
  //añado todos los usuarios al ul
  ulPuntuacionesElement.append(fragmentUsuarios);
};

const formPrincipalElement = document.forms.form__principal;

const funcionSubmit = (evento) => {
  evento.preventDefault();
  const inputUsuarioElement = formPrincipalElement.elements.userName;
  const nombreUsuarioElement = inputUsuarioElement.value.trim();
  if (nombreUsuarioElement !== "") {
    addUser(nombreUsuarioElement);
    render();
  } else {
    alert("Nombre no valido");
  }
  // inputUsuarioElement.value = "";
  inputUsuarioElement.setAttribute("readonly", "");
};

formPrincipalElement.addEventListener("submit", funcionSubmit);

render();

// event.stopPropagation();
