
function runCode() {
    var code = document.getElementById("editor").value;
    var output = document.getElementById("output");
    //La sentencia try consiste en un bloque try que contiene una o más sentencias. 
    try {
        //eval es el avaluador del codigo que se esta escribiendo en pantalla, verifica si esta bien o mal
      output.innerText = "El codigo esta bien escrito  "+eval(code);
      // señala un bloque de instrucciones a intentar ( try ), y especifica una 
      //respuesta si se produce una excepción ( catch )
    } catch (error) {
      output.innerText = "Error verifica el codigo: " + error.message;
    }
    //El método trim( ) elimina los espacios en blanco en ambos extremos del string. 
    //Los espacios en blanco en este contexto, son todos los caracteres sin contenido
    //(espacio, tabulación, etc.) y todos los caracteres de nuevas lineas (LF,CR,etc.).
    if (code.trim() === "") {
        output.innerText = "Error: No se ha ingresado código.";
        return;
      }
   
  }
  
  function clearCode() {
    var editor = document.getElementById("editor");
    editor.value = ""; // Limpiar el contenido del área de texto
  }
/*
  function runCode() {
    var code = document.getElementById("editor").value;
    var output = document.getElementById("output");
  
    // Validación del código utilizando Acorn.js
    try {
      var parsedCode = acorn.parse(code, { ecmaVersion: 2021 });
      var isValid = validateCode(parsedCode);
      if (!isValid) {
        output.innerText = "Error: Código no permitido.";
        return;
      }
    } catch (error) {
      output.innerText = "Error: " + error.message;
      return;
    }
  
    // Sanitización del código utilizando DOMPurify
    code = DOMPurify.sanitize(code);
  
    try {
      output.innerText = eval(code);
    } catch (error) {
      output.innerText = "Error: " + error.message;
    }
  }
  
  function validateCode(parsedCode) {
    // Verificar si el código cumple con ciertos criterios de seguridad
    // Puedes implementar tus propias reglas aquí
  
    // Ejemplo: Permitir solo el acceso a un conjunto limitado de funciones globales
    var allowedGlobals = ["Math", "Date"];
    var globalVariables = [];
  
    acorn.walk.simple(parsedCode, {
      Identifier(node) {
        if (node.name in global) {
          globalVariables.push(node.name);
        }
      }
    });
  
    var isCodeValid = globalVariables.every(function (variable) {
      return allowedGlobals.includes(variable);
    });
  
    return isCodeValid;
  }
  */

  