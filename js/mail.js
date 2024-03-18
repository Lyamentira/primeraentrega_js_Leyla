let jugador;
let oponente;

function aleatoria() {
    return Math.ceil(Math.random()*3);
}

alert ("Bienvenidos a tu juego favorito: Yan Kem Po 🎆")

jugador = parseInt(prompt("Elija: 1- Papel, 2 - Piedra, 3 - Tijera"));
oponente = aleatoria();

alert("Tu elegiste: " + eleccion(jugador));
alert("El oponente eligió: " + eleccion(oponente));

if (jugador === oponente) {
    alert("Empate 😁 ");
} else if ((jugador === 1 && oponente === 2) || 
           (jugador === 2 && oponente === 3) || 
           (jugador === 3 && oponente === 1)) {
    alert("Ganaste 🥳");
} else {
    alert("Perdiste 😢");
}

function eleccion(tipo){
    let resultado;
    if (tipo === 1){
        resultado = "Papel 🗑️";
    } else if (tipo === 2) {
        resultado = "Piedra 💎";
    } else if (tipo === 3){
        resultado = "Tijera ✂️";
    } else {
        resultado = "No has elegido correctamente. Vuelve a intentar.";
    } 
    return resultado;
}






























