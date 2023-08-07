const busqueda = document.getElementById('busqueda');
const searchSuggestions = document.getElementById('searchSuggestions');

busqueda.

addEventListener('input', function() {
  if (busqueda.value.length > 0) {
    // Aquí puedes realizar una llamada AJAX para obtener las sugerencias de búsqueda
    // y luego mostrarlas en el cuadro de sugerencias (searchSuggestions).

    

// Ejemplo: Mostrar sugerencias estáticas
    searchSuggestions.innerHTML = `
      <p>Solo puede buscar: variables, funciones, condicionales, loops, arrays, objetos y
      code</p>

    `;

    searchSuggestions.

   
style.display = 'block';
  } 
 
else {
    searchSuggestions.
   
style.display = 'none';
  }
});