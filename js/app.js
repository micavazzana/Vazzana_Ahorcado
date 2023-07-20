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
    estadoTablero = [];

    constructor(palabra){
        this.palabra = palabra;
        this.estadoTablero = this.inicializarTablero();
    }

    inicializarTablero(){

        //Convierto la palabra en un array de letras
        const arrLetras = this.palabra.split("");

        //Creo un nuevo array de guiones para tener los lugares donde las letras estaran
        //Tendra el mismo largo que la palabra a adivinar
        const letrasGuion = arrLetras.map(()=>"-");

        return letrasGuion;
    }

    //Actualizara cada letra adivinada y la colocara en el lugar correspondiente
    actualizarTablero(letra){
        //Recorro la palabra para ver si la letra sugerida coincide con alguna de la palabra
        for(let i = 0; i < this.palabra.length; i++){
            if(letra == this.palabra[i]){
                //Si coincide entonces debo cambiar el guion por la letra en ese indice
                this.estadoTablero[i] = letra;
            }
        }
    }

    //Retorna en un string el estado del tablero, de forma que se pueda saber si la palabra ya fue adivinada
    obtenerEstadoTablero(){
        return this.estadoTablero.join("").toUpperCase();
    }


}
/**
 * Clase juego
 * Maneja la logica del juego
 * Controla la interaccion entre las distintas clases
 */
class Juego{

    palabra;
    tablero;
    intentos;

    constructor(palabra, intentos){
        this.palabra = new Palabra(palabra)
        this.tablero = new Tablero(palabra);
        this.intentos = intentos;
    }

    adivinarLetra(letra){

        //Si adivina la letra actualizo el tablero
        if(this.palabra.verificarLetra(letra)){
            this.tablero.actualizarTablero(letra);
            return true;
        }
        else
        {
            //si no la adivina, resta un intento
            this.intentos--;
            return false;
        }
        
    }

    //Si el juego se termina porque se han adivinado las letras
    //o si en cambio se han acabado la cantidad de intentos
    estadoJuego(){

        //Si se acabaron los intentos
        if(this.intentos == 0)
        {
            //Se perdio
            return "Fail";
        }
        //Si el tablero se completo y es igual a la palabra
        else if(this.tablero.palabra == this.tablero.obtenerEstadoTablero())
        {
            //Se gano
            return "Win";
        } 
        //Si no se adivino la palabra pero todavia hay intentos
        else
        {
            return "Continue";
        }
      
    }
}

/*************** COMIENZO DEL JUEGO *****************/

//De momento la lista de palabras estarán harcodeadas.
//Próximamente se me ocurre incorporar una lista con JSON
const arrayPalabras = ["Naranja","Manzana","Coco","Perro","Gato"];

//Consigo un indice aleatorio del array para construir un nuevo juego con esa palabra
let indiceAleatorio = Math.floor(Math.random() * arrayPalabras.length);

//Instancio el juego con la palabra elegida y la cantidad de intentos
const juego = new Juego(arrayPalabras[indiceAleatorio].toUpperCase(),10);

let letra;
let estadoJuego = "Continue";
let esLetraCorrecta;

//Mientras el juego no se haya ganado o perdido estara en "Continue"
while(estadoJuego == "Continue"){

    //Muestro el tablero en cada iteracion
    console.log(juego.tablero.obtenerEstadoTablero());
    letra = prompt("Ingrese letra").toUpperCase();

    //Analizo si la letra es correcta y en qué estado está el juego
    esLetraCorrecta = juego.adivinarLetra(letra);
    estadoJuego = juego.estadoJuego();

    if(!esLetraCorrecta){
        console.log("Letra ingresada: " + letra);
        console.log("Te quedan: " + juego.intentos + " intentos");
    }
} 

if(estadoJuego == "Win")
{
    //Muestro la palabra final
    console.log(juego.tablero.obtenerEstadoTablero());
    console.log("Ganaste");
}
else if(estadoJuego == "Fail"){
    console.log("Perdiste");
}