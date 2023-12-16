/*funcion iniciar juego*/
const sectionSeleccionarataque = document.getElementById("seleccionar_ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("botonMascota");
const botonreiniciar = document.getElementById("botonReiniciar");

/*Fun. Seleccionar Mascotas*/
const sectionSeleccionarMascota = document.getElementById(
  "seleccionar_mascotas"
);

const spanMascotaJugador = document.getElementById("mascotaJugador");

/*Fun. Seleccionar mascota enemigo*/
const spanMascotaEnemigo = document.getElementById("mascotaEnemigo");

/*funcion combate*/
const spanvidaJugador = document.getElementById("vidasJugador");
const spanvidasEnemigo = document.getElementById("vidasEnemigo");

/*funcion crear Mensaje*/
const sectionMensaje = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataquesdelJugador");
const ataquesDelEnemigo = document.getElementById("ataquesdelEnemigo");

const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques");
/*funcion crear Mensaje Final*/
/*Se eliminaron las variables de esta función debido que estaban */
let mokepones = [];
let ataqueJugador = []; //una variable se encuentra fuera de una función cuando se denomina "variable global"
let ataqueEnemigo = [];
let opcionDeMokepones;
let inpunthipodoge;
let inpuntcapipepo;
let inpuntratigueya;
let inpuntrapifris;
let mascotaJugador;
let ataquesMokepon;
let ataquesMokeponEnemigo
let botonfuego;
let botonagua;
let botontierra;
let botonaire;
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidas_Jugador = 3;
let vidas_Enemigos = 3;

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}

let hipodoge = new Mokepon(
  "Hipodoge",
  "./img/mokepons_mokepon_hipodoge_attack.png",
  5
);

let capipepo = new Mokepon(
  "Capipepo",
  "./img/mokepons_mokepon_capipepo_attack.png",
  5
);

let ratigueya = new Mokepon(
  "Ratigueya",
  "./img/mokepons_mokepon_ratigueya_attack.png",
  5
);

let rapifris = new Mokepon(
  "Rapifris",
  "./img/mokepons_mokepon_rapifris_attack.png",
  5
);

hipodoge.ataques.push(
  { nombre: "💧", id: "botonAgua" },
  { nombre: "💧", id: "botonAgua" },
  { nombre: "💧", id: "botonAgua" },
  { nombre: "🔥", id: "botonFuego" },
  { nombre: "💨", id: "botonAire" },
  { nombre: "🌍", id: "botonTierra" }
);

capipepo.ataques.push(
  { nombre: "🌍", id: "botonTierra" },
  { nombre: "🌍", id: "botonTierra" },
  { nombre: "🌍", id: "botonTierra" },
  { nombre: "💧", id: "botonAgua" },
  { nombre: "🔥", id: "botonFuego" },
  { nombre: "💨", id: "botonAire" }
);

ratigueya.ataques.push(
  { nombre: "💨", id: "botonAire" },
  { nombre: "💨", id: "botonAire" },
  { nombre: "💨", id: "botonAire" },
  { nombre: "🌍", id: "botonTierra" },
  { nombre: "💧", id: "botonAgua" },
  { nombre: "🔥", id: "botonFuego" }
);

rapifris.ataques.push(
  { nombre: "🔥", id: "botonFuego" },
  { nombre: "🔥", id: "botonFuego" },
  { nombre: "🔥", id: "botonFuego" },
  { nombre: "💨", id: "botonAire" },
  { nombre: "🌍", id: "botonTierra" },
  { nombre: "💧", id: "botonAgua" }
);

mokepones.push(hipodoge, capipepo, ratigueya, rapifris);

function iniciarJuego() {
  sectionSeleccionarataque.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
    <input type="radio" name="mascotas" id=${mokepon.nombre} />
        <label class="tarjetaDeMokepon" for=${mokepon.nombre}>
          <p>${mokepon.nombre}</p>
          <img src=${mokepon.foto} alt=${mokepon.nombre}/>
        </label>
    `;
    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inpunthipodoge = document.getElementById("Hipodoge");
    inpuntcapipepo = document.getElementById("Capipepo");
    inpuntratigueya = document.getElementById("Ratigueya");
    inpuntrapifris = document.getElementById("Rapifris");
  });

  sectionReiniciar.style.display = "none";

  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  botonreiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
  if (inpunthipodoge.checked) {
    spanMascotaJugador.innerHTML = inpunthipodoge.id;
    mascotaJugador = inpunthipodoge.id;
  } else if (inpuntcapipepo.checked) {
    spanMascotaJugador.innerHTML = inpuntcapipepo.id;
    mascotaJugador = inpuntcapipepo.id;
  } else if (inpuntratigueya.checked) {
    spanMascotaJugador.innerHTML = inpuntratigueya.id;
    mascotaJugador = inpuntratigueya.id;
  } else if (inpuntrapifris.checked) {
    spanMascotaJugador.innerHTML = inpuntrapifris.id;
    mascotaJugador = inpuntrapifris.id;
  } else {
    spanMascotaJugador.innerHTML = "";
    alert("Selecciona una Mascota");
  }

  if (spanMascotaJugador.innerHTML != "") {
    sectionSeleccionarMascota.style.display = "none";

    sectionSeleccionarataque.style.display = "flex";

    extraerAtaque(mascotaJugador);
    seleccionarMascotaEnemigo();
  }
}

function extraerAtaque(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }

  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataques) => {
    ataquesMokepon = `<button id=${ataques.id} class="botonAtaques BAtaque">${ataques.nombre}</button>`;

    contenedorAtaques.innerHTML += ataquesMokepon;
  });

  botonfuego = document.getElementById("botonFuego");
  botonagua = document.getElementById("botonAgua");
  botontierra = document.getElementById("botonTierra");
  botonaire = document.getElementById("botonAire");
  botones = document.querySelectorAll(".BAtaque");

}

function secuenciaAtaque() {
  botones.forEach((boton)=>{
    boton.addEventListener("click", (e)=>{
      if (e.target.textContent === "🔥") {
        ataqueJugador.push("FUEGO")
        console.log(ataqueJugador)
        boton.style.background =  "#117f58"
      } else if (e.target.textContent === "💧"){
        ataqueJugador.push("AGUA")
        console.log(ataqueJugador)
        boton.style.background =  "#117f58"
      }else if (e.target.textContent === "🌍"){
        ataqueJugador.push("TIERRA")
        console.log(ataqueJugador)
        boton.style.background =  "#117f58"
      }else {
        ataqueJugador.push("AIRE")
        console.log(ataqueJugador)
        boton.style.background =  "#117f58"
      }
      ataqueAleatorioEnemigo()
    })
  })
  
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(0, mokepones.length - 1);
  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre;
  ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques
  secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
  let ataquealetorio = aleatorio(0, ataquesMokeponEnemigo.length -1);

  if (ataquealetorio == 0 || ataquealetorio ==1) {
    ataqueEnemigo.push("Fuego");
  } else if (ataquealetorio == 3 || ataquealetorio ==4) {
    ataqueEnemigo.push("Agua");
  } else if (ataquealetorio == 5 || ataquealetorio ==6) {
    ataqueEnemigo.push("Tierra");
  } else {
    ataqueEnemigo.push("Aire");
  }
console.log(ataqueEnemigo);
iniciarcombate()
  combate();
}

function iniciarcombate(){
  if (ataqueJugador.length === 5) {
    combate()
  }
}

function indexAmbosOponentes(jugador, enemigo){
  indexAtaqueJugador = ataqueJugador[jugador]
  indexAtaqueEnemigo = ataqueEnemigo[enemigo]

}

function combate() {

  for (let index = 0; index < ataqueJugador.length; index++) {
   if(ataqueJugador[index] === ataqueEnemigo[index]){
    indexAmbosOponentes(index, index)
    crearMensaje("EMPATE")
    victoriasJugador++
    spanvidaJugador.innerHTML = victoriasJugador
   }else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo [index] === "TIERRA"){
    indexAmbosOponentes(index, index)
    crearMensaje("GANASTE")
    victoriasJugador++
    spanvidaJugador.innerHTML = victoriasJugador
   }else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo [index] == "FUEGO"){
    indexAmbosOponentes(index, index)
    crearMensaje("GANASTE")
    victoriasJugador++
    spanvidaJugador.innerHTML = victoriasJugador
   }else if (ataqueJugador[index] === "TIERRA" && ataqueEnemigo [index] == "AGUA"){
    indexAmbosOponentes(index, index)
    crearMensaje("GANASTE")
    victoriasJugador++
    spanvidaJugador.innerHTML = victoriasJugador
   }else if (ataqueJugador[index] === "AIRE" && ataqueEnemigo [index] == "FUEGO"){
    indexAmbosOponentes(index, index)
    crearMensaje("GANASTE")
    victoriasJugador++
    spanvidaJugador.innerHTML = victoriasJugador
   }else {
    indexAmbosOponentes(index, index)
    crearMensaje("PERDISTE")
    victoriasJugador++
    spanMascotaEnemigo.innerHTML = victoriasEnemigo
   }
    
  }

  /*switch (ataqueJugador) {
    case "Fuego":
      if (ataqueEnemigo == "Tierra") {
        ganastePartida();
      }
      break;
    case "Agua":
      if (ataqueEnemigo == "Fuego") {
        ganastePartida();
      }
      break;
    case "Tierra":
      if (ataqueEnemigo == "Agua") {
        ganastePartida();
      }
      break;
    case "Aire":
      if (ataqueEnemigo == "Fuego") {
        ganastePartida();
      }
      break;

    default:
      crearMensaje("PERDISTE");
      vidas_Jugador--;
      spanvidaJugador.innerHTML = vidas_Jugador;
      break;
  }*/

  revisarvidas();
}
/*function ganastePartida() {
  crearMensaje("GANASTE");
  vidas_Enemigos--;
  spanvidaJugador.innerHTML = vidas_Enemigos;
}*/

function revisarvidas() {
  if (victoriasJugador === victoriasEnemigo) {
    crearMensajeFinal("Esto es un empate!!!");
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("FELICITACIONES! GANASTE 🎉")
  }else {
    crearMensajeFinal("LO SIENTO, PERDISTE 💔");
  }
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensaje.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadofinal) {
  //let parrafo = document.createElement("p");
  sectionMensaje.innerHTML = resultadofinal;

  //sectionMensaje.appendChild(parrafo);

  botonfuego.disabled = true;

  botonagua.disabled = true;

  botontierra.disabled = true;

  botonaire.disabled = true;

  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
