const arr = [
  { nombre: "nicolas", puntuacion: 334, intentos: 7, tiempo: 16 },
  { nombre: "carmen", puntuacion: 472, intentos: 7, tiempo: 28 },
  { nombre: "pablo", puntuacion: 235, intentos: 7, tiempo: 15 },
  { nombre: "belen", puntuacion: 190, intentos: 7, tiempo: 10 },
  { nombre: "juego1", puntuacion: 284, intentos: 7, tiempo: 16 },
  { nombre: "hola", puntuacion: 189, intentos: 7, tiempo: 11 },
];

const arrOrdenado = arr.sort((a, b) => {
  return b.puntuacion - a.puntuacion;
});

console.log(arrOrdenado);

let tiempo = 160;

let segundos = tiempo % 60;
let minutos = tiempo / 60;

console.log(parseInt(minutos), segundos);
