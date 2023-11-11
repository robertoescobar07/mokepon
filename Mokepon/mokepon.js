let ataqueJugador; //una variable se encuentra fuera de una función cuando se denomina "variable global"
let ataqueEnemigo;

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonfuego = document.getElementById("botonFuego");
  botonfuego.addEventListener("click", ataquefuego);

  let botonagua = document.getElementById("botonAgua");
  botonagua.addEventListener("click", ataqueagua);
  let botontierra = document.getElementById("botonTierra");
  botontierra.addEventListener("click", ataquetierra);
  let botonaire = document.getElementById("botonAire");
  botonaire.addEventListener("click", ataqueaire);
}

function seleccionarMascotaJugador() {
  let inpunthipodoge = document.getElementById("hipodoge");
  let inpuntcapipepo = document.getElementById("capipepo");
  let inpuntratigueya = document.getElementById("ratigueya");
  let inpuntrapifris = document.getElementById("rapifris");
  let spanMascotaJugador = document.getElementById("mascota - jugador");

  if (inpunthipodoge.checked) {
    spanMascotaJugador.innerHTML = "hipodoge";
  } else if (inpuntcapipepo.checked) {
    spanMascotaJugador.innerHTML = "capipepo";
  } else if (inpuntratigueya.checked) {
    spanMascotaJugador.innerHTML = "ratigueya";
  } else if (inpuntrapifris.checked) {
    spanMascotaJugador.innerHTML = "rapifris";
  } else {
    alert("Selecciona una mascota");
  }

  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 4);
  let spanMascotaEnemigo = document.getElementById("mascota - enemigo");

  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "hipodoge";
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "capipepo";
  } else if (mascotaAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = "ratigueya";
  } else if (mascotaAleatorio == 4) {
    spanMascotaEnemigo.innerHTML = "rapifris";
  } else {
    alert("Selecciona una mascota");
  }
}

function ataquefuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
  alert("Entro");
}

function ataqueagua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}

function ataquetierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueaire() {
  ataqueJugador = "AIRE";
  ataqueAlearioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataquealetorio = aleatorio(1, 4);

  if (ataquealetorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataquealetorio == 2) {
    ataqueEnemigo = "AGUA";
  } else if (ataquealetorio == 3) {
    ataqueEnemigo = "TIERRA";
  } else {
    ataqueEnemigo = "AIRE";
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
