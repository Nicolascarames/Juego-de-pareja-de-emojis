// const state = {
//   usuarios: localStorageState ? JSON.parse(localStorageState).usuarios : [],
//   dark: localStorageState ? JSON.parse(localStorageState).dark : false,
// };

// const saveState = () => {
//     const jsonState = JSON.stringify(state);
//     window.localStorage.setItem("storage", jsonState);
//   };

// console.log(state);

const headers = {};
if (true) headers["Content-Type"] = "application/json";

export const post = async (url, body) => {
  //   console.log(body);
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error("API error: " + res.status);
  }
  //   return await res.json();
};

// post('http://localhost:3000/newpuntuacion', {
//     "nombre":"navidad",
//     "puntuacion": 5555,
//     "intentos":76,
//     "tiempo":120,
//     "ultima": false
//   })

export const traer = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  //   console.log(data.data);
  return data;
};

// traer("http://localhost:3000/allScoresEmoji");
// const localStorageState = window.localStorage.getItem("storage");
// console.log(localStorageState);
