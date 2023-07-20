//Juego: AHORCADO

/**
 * Clase Palabra
 * Representa la palabra que se va a adivinar
 * Internamente verifica si la letra existe en la palabra
 */
class Palabra{
    palabra;

    //Recibe una palabra por parametro y la almacena en si misma
    constructor(palabra){
        this.palabra = palabra;
    }

    //Verifica si la letra existe en la palabra
    verificarLetra(letra){
        return this.palabra.includes(letra);
    }
}

/**
 * Clase Tablero
 * Representa el estado de la palabra a adivinar
 * con las letras que van siendo adivinadas
 */
class Tablero{

    palabra;
    constructor(palabra){

    }

    obtenerEstadoTablero(){

    }
    actualizarTablero(){

    }
}
/**
 * Clase juego
 * Maneja la logica del juego
 * Controla la interaccion entre las distintas clases
 */
class Juego{

    palabra;
    intento

    constructor(palabra){
        palabra = new Palabra(palabra)
        tablero = new Tablero(palabra);
    }

    iniciarJuego(){

    }

    adivinarLetra(){
        //si no la adivina, restar un intento
    }

    //Si el juego se termina porque se han adivinado las letras
    //o si en cambio se han acabado la cantidad de intentos
    estadoJuego(){

    }
}



/*************** COMIENZO DEL JUEGO *****************/

//De momento la lista de palabras estarán harcodeadas.
//Próximamente se me ocurre incorporar una lista con JSON
const arrayPalabras = ["Naranja","Manzana","Coco","Perro","Gato"];

//Consigo un indice aleatorio del array para construir un nuevo juego con esa palabra
let indiceAleatorio = Math.random()* arrayPalabras.length;

//Instancio el juego con la palabra elegida
const juego = new Juego(arrayPalabras[indiceAleatorio].toUpperCase());
