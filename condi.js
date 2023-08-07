function checkNumber() {
    var number = parseInt(document.getElementById("number-input").value);
    var output = document.getElementById("output1");
  
    if (isNaN(number)) {
      output.innerText = "Por favor, ingresa un número válido.";
    } else {
      if (number > 0) {
        output.innerText = "El número es positivo.";
        return;
      } else if (number < 0) {
        output.innerText = "El número es negativo.";
        return;
      } else {
        output.innerText = "El número es cero.";
        return;
      }
    }
  }

  function clearCode() {
    var editor = document.getElementById("number-input");
    editor.value = ""; // Limpiar el contenido del área de texto
  }

  //Loops
  var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel',"Sofia","Gabriel"];

  function saludarEstudiante(estudiante) {
      alert(`Hola, ${estudiante}`);
  }

  function saludarEstudiantes() {
      for (var i = 0; i < estudiantes.length; i++) {
          saludarEstudiante(estudiantes[i]);
      }
  }