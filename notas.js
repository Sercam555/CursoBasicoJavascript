/*campo de notas
  
  function calcularPromedio() {

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
 
    var totalNotas = 3;
    var sumaNotas = 0;
  
    for (var i = 1; i <= totalNotas; i++) {
      var nota = parseFloat(document.getElementById("nota-" + i).value);
  
      if (isNaN(nota)) {
        mostrarError("Por favor, ingresa notas válidas en todas las materias.");
        return;
      }
  
      sumaNotas += nota;
    }
  
    var promedio = sumaNotas / totalNotas;
    mostrarPromedio(promedio);
  }
  
  function mostrarPromedio(promedio) {
    var promedioElemento = document.getElementById("promedio");
    promedioElemento.textContent = "Promedio: " + promedio.toFixed(2);
  
    var mensajeElemento = document.getElementById("mensaje");
    
    if (promedio >= 5.0) {
      mensajeElemento.textContent = "¡Felicitaciones! Pasaste el curso.";
    } else if (promedio >= 4.5) {
      mensajeElemento.textContent = "Bravo, sigue así.";
    } else if (promedio >= 4.0) {
      mensajeElemento.textContent = "Muy bien.";
    } else if (promedio >= 3.5) {
      mensajeElemento.textContent = "Puedes hacerlo mejor.";
    } else if (promedio >= 3.0) {
      mensajeElemento.textContent = "Pasas de chepa.";
    } else {
      mensajeElemento.textContent = "Reprobaste, sigue estudiando.";
    }
  }
  
  function mostrarError(mensaje) {
    var mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.textContent = mensaje;
    mensajeElemento.style.color = "red";
  }*/

function calcularPromedio() {
// Pedir al usuario que ingrese las 3 notas
var nota1 =  parseFloat(document.getElementById("n1").value);
var nota2 =  parseFloat(document.getElementById("n2").value);
var nota3 =  parseFloat(document.getElementById("n3").value);

// Calcular el total de las notas
var total = nota1 + nota2 + nota3;

// Calcular el promedio
var promedio = total / 3;

// Evaluar el promedio y mostrar el mensaje correspondiente

if (promedio >= 5) {
  mostrarResultado("¡Felicitaciones! Pasaste el curso.");
} else if (promedio >= 4.5) {
  mostrarResultado("Bravo, sigue así.");
} else if (promedio >= 3.5) {
  mostrarResultado("Muy bien.");
} else if (promedio >= 3) {
  mostrarResultado("Puedes hacerlo mejor.");
} else if (promedio >2.9) {
  mostrarResultado("Reprobaste, sigue estudiando.");
}
else
{
alert("Por favor, ingresa números válidos.");
}
}

function mostrarResultado(resultado) {
    var resultadoElemento = document.getElementById("promedio");
    resultadoElemento.textContent = " Resultado es: " + resultado;
    resultadoElemento.style.color = "black";
  }
  