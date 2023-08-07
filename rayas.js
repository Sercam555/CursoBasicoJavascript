var words = ["perro", "gato", "pájaro", "elefante", "tigre","conejo","ballena","cocodrilo","camaleon"]; // Array de palabras ocultas
// La palabra oculta se selecciona aleatoriamente del array words al inicio del juego.
var selectedWord = words[Math.floor(Math.random() * words.length)]; // Palabra seleccionada aleatoriamente
var hiddenWord = hideWord(selectedWord); // Palabra oculta

function hideWord(word) {
  return word.split("").map(function (letter) {
    return "_";
  }).join(" ");
}

//La función guessLetter() se ejecuta cuando el usuario hace clic en el botón "Adivinar". 
function guessLetter() {
  var letter = document.getElementById("letter-input").value.toLowerCase();
  var output = document.getElementById("output2");

  if (letter.length !== 1) {
    output.innerText = "Por favor, ingresa una sola letra.";
    return;
  }

  if (!/^[a-zA-Z]+$/.test(letter)) {
    output.innerText = "Por favor, ingresa solo letras.";
    return;
  }

  //La función hideWord(word) se utiliza para ocultar la palabra seleccionada, reemplazando cada letra con un guion bajo.
  var guessedWord = hiddenWord.split(" ").map(function (hiddenLetter, index) {
    if (selectedWord[index] === letter) {
      return letter;
    } else {
      return hiddenLetter;
    }
  }).join(" ");

  if (guessedWord === hiddenWord) {
    output.innerText = "¡Letra incorrecta! Intenta nuevamente.";
  } else {
    hiddenWord = guessedWord;
    output.innerText = hiddenWord;

    if (!hiddenWord.includes("_")) {
      output.innerText += "\n¡Felicitaciones! Has adivinado la palabra.";
    }
  }
}

function clearCode() {
    var editor = document.getElementById("letter-input");
    editor.value = ""; // Limpiar el contenido del área de texto
  }

  
  /*objetos */

  function Persona(nombre,edad) {
    this.nombre=nombre;
    this.edad=edad;

    this.validarDatos = function () {
        if (nombre.trim() === "" || isNaN(edad)) {
          return false;
        }
        return true;
      };
    }
  
  Persona.prototype.saludar=function() {
    alert("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
  };
 
  function crearPersona() {
    var nombre = document.getElementById("name-input").value;
    var edad = parseInt(document.getElementById("age-input").value);
    var persona=new Persona(nombre,edad);
    persona.saludar();
    var output = document.getElementById("punto");
    output.innerText = "Datos ingresados: " + persona.nombre + ", " + persona.edad + " años.";
  }
  
  function codeClear() {
    var nombre = document.getElementById("name-input");
    var edad = document.getElementById("age-input");

    if (nombre && edad) {
        nombre.value = "";
        edad.value = "";
      }
    
  }