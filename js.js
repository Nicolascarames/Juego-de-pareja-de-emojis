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
  let puntos=0;
const OpenCloseMod = () =>{
 
   document.querySelector('.modal').style.display = "none"
}
const HandleClick = (e) =>{
     cont++;
     console.log(cont)
    if(cont === 1){
        first = e.target.id;
        document.getElementById(`${e.target.id}`).style.transform = 'rotateX(0)';
        document.getElementById(`${e.target.id}`).removeEventListener('click',HandleClick);
        
    }
    if(cont === 2){
        document.getElementById(`${e.target.id}`).style.transform = 'rotateX(0)'; 
        document.getElementById(`${e.target.id}`).removeEventListener('click',HandleClick);
      let cartauno = document.querySelector(`#${first} .front`);
      let cartados = document.querySelector(`#${e.target.id} .front`);
        
      if(cartauno.textContent === cartados.textContent){
        console.log('iguales!')
        document.getElementById(`${first}`).style.opacity = '0';
        document.getElementById(`${e.target.id}`).style.opacity ='0';
        puntos= puntos+50;
        document.getElementById('puntos').textContent = `Puntos : ${puntos}`
        cont = 0
      }else{
        console.log('no iguales!');
        intentos++;
        intentos === 5 ? document.querySelector('.modalgameover').style.display = 'flex':document.getElementById('intentos').textContent = `Intentos : ${intentos}/5`;
        
        

        setTimeout(() => {
            document.getElementById(`${first}`).style.transform = 'rotateY(180deg)';
            document.getElementById(`${e.target.id}`).style.transform = 'rotateY(180deg)';
            document.querySelector(`#${first}`).addEventListener('click',HandleClick);
            document.querySelector(`#${e.target.id}`).addEventListener('click',HandleClick);

            cont= 0;
        }, 1000);
       

      }
       
    }
    
}


const Start = () =>{
    const copia = [...caritas];
    for (let i = 0; i < caritas.length; i++) {
        const random = Math.floor(Math.random() * (copia.length - 0) + 0);
        const Carita = document.createElement('p');
        const Card = document.createElement('div');
        const Front = document.createElement('div');
        Front.className = 'front';
        Front.textContent= copia[random].imagen
        Card.className = 'card';
        Card.id = copia[random].id
        Card.append(Front)
       document.querySelector('.container').append(Card);
       Card.addEventListener('click',HandleClick)
       copia.splice(random, 1);



    }
  
}