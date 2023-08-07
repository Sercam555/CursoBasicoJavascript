function play(forMe) {
    var pc = ["piedra", "papel", "tijera"];
    var computador = pc[Math.floor(Math.random() * pc.length)];
  
    var result = compare(forMe, computador);
  
    var resultText = "";
    if (result === 0) {
      resultText = "¡Es un empate!";
    } else if (result === 1) {
      resultText = "¡Ganaste! " + forMe + " vence a " + computador + ".";
    } else {
      resultText = "¡Perdiste! " + computador + " vence a " + forMe + ".";
    }
  
    document.getElementById("result").innerHTML = resultText;
  }
  
  function compare(observacion1, observacion2) {
    if (observacion1 === observacion2) {
      return 0; // Empate
    } else if (
      (observacion1 === "piedra" && observacion2 === "tijera") ||
      (observacion1 === "papel" && observacion2 === "piedra") ||
      (observacion1 === "tijera" && observacion2 === "papel")
    ) {
      return 1; // Ganaste
    } else {
      return -1; // Perdiste
    }
  }
  