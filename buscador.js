function buscar() {
    // Obtener el valor ingresado por el usuario
    var consulta = document.getElementById("busqueda").value;
    
    // Realizar la búsqueda
    if (consulta === "Datos" || consulta === "dato"  || consulta === "tipos de datos" || consulta === "Tipos de datos" ||  consulta === "variable" ||  consulta === "variables" ||  consulta === "Variable") {
        // Aquí puedes agregar tu lógica de búsqueda o redireccionamiento
        // Por ejemplo, puedes utilizar una API de búsqueda o simplemente redirigir a una URL predefinida
        // En este ejemplo, se redirige a una búsqueda en todo variables
        var url = "variable.html";
        window.location.href = url;
    }
    else if (consulta === "condicionales" || consulta === "Condicionales"  || consulta === "Loops" || consulta === "loops") {
        // Aquí puedes agregar tu lógica de búsqueda o redireccionamiento
        // Por ejemplo, puedes utilizar una API de búsqueda o simplemente redirigir a una URL predefinida
        // En este ejemplo, se redirige a una búsqueda en condicionlaes
        var url = "condicionales.html";
        window.location.href = url;
    }
    else if(consulta === "array" || consulta === "Array" || consulta === "objetos" || consulta === "Objetos") {
        // Aquí puedes agregar tu lógica de búsqueda o redireccionamiento
        // Por ejemplo, puedes utilizar una API de búsqueda o simplemente redirigir a una URL predefinida
        // En este ejemplo, se redirige a una búsqueda en array y objetos
        var url = "array.html";
        window.location.href = url;
    }
    else if(consulta === "code" || consulta === "Code" ) {
        // Aquí puedes agregar tu lógica de búsqueda o redireccionamiento
        // Por ejemplo, puedes utilizar una API de búsqueda o simplemente redirigir a una URL predefinida
        // En este ejemplo, se redirige a una búsqueda en code
        var url = "code.html";
        window.location.href = url;
    }
    else {
        //En este caso si el usuario ingresa otra información que no tenga que ver con lo convensional 
        //le aparece un cuadro de alerta...
        alert('Por favor, ingrese un término de búsqueda.');
        return;
    }

}

/*este funciona para el cuadro informativo*/
function mostrarTexto() {
    var cuadroTexto = document.getElementById("texto");
    if (cuadroTexto.style.display === "none") {
      cuadroTexto.
      cu
  style.display = "block";
    } else {
      cuadroTexto.
      cu
  style.display = "none";
    }
  }