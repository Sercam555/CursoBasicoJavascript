//Valores 

function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      mostrarError("Por favor, ingresa números válidos.");
    } else {
      var resultado = num1 + num2;
      mostrarResultado(resultado);
    }
  }
  
  function restar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      mostrarError("Por favor, ingresa números válidos.");
    } else {
      var resultado = num1 - num2;
      mostrarResultado(resultado);
    }
  }

  function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      mostrarError("Por favor, ingresa números válidos.");
    } else {
      var resultado = num1 * num2;
      mostrarResultado(resultado);
    }
  }
  
  function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      mostrarError("Por favor, ingresa números válidos.");
    } else if (num2 === 0) {
      mostrarError("No se puede dividir entre cero.");
    } else {
      var resultado = num1 / num2;
      mostrarResultado(resultado);
    }
  }
  
  function mostrarResultado(resultado) {
    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = "  " + resultado;
    resultadoElemento.style.color = "black";
  }
  
  function mostrarError(mensaje) {
    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = mensaje;
    resultadoElemento.style.color = "red";
  }
  function mostrarResultado(resultado) {
    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = "El resultado es: " + resultado;
    resultadoElemento.style.color = "black";
  }
  
  function mostrarError(mensaje) {
    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = mensaje;
    resultadoElemento.style.color = "red";
  }

  