function buscar() {
    // Obtener el valor del campo de búsqueda
    var filtro = document.getElementById("busqueda").value.toLowerCase();
    
    // Obtener el elemento <h1>
    var titulo = document.getElementById("var");
    
    // Obtener el texto del <h1>
    var textoTitulo = titulo.textContent.toLowerCase();
    
    // Verificar si el texto del <h1> contiene el filtro
    if (textoTitulo.includes(filtro)) {
      // Mostrar el <h1> si el filtro coincide
      titulo.style.display = "block";
    } else {
      // Ocultar el <h1> si el filtro no coincide
      titulo.style.display = "none";
    }
  }