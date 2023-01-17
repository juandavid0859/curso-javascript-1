var piedra;
var tijera;
var papel;

piedra = 1;
papel = 2;
tijera = 3;

function juego (usuario, cpu) {
    if (usuario == 2 && cpu == 1) {
        console.log("ganaste");
    }else if (usuario == 3 && cpu == 2){
        console.log("ganaste");
    }else if (usuario == 1 && cpu == 3) {
        console.log("ganaste");
    } else {
        console.log("perdiste");
    }
}