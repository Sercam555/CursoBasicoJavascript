function play(humanOption){
    const result = document.querySelector('.result');
    const humanImg = document.querySelector('.human-img');
    const cpuImg = document.querySelector('.cpu-img');
    const cpuOption = Math.floor(Math.random() * (4 - 1)) + 1;
    humanImg.src = './img/option'+humanOption+'.png';
    cpuImg.src = './img/option'+cpuOption+'.png';
    cpuImg.classList.add('reflex');
    document.querySelector('.cover').classList.add('reset');
    if(
        humanOption === 1 && cpuOption === 3 ||
        humanOption === 2 && cpuOption === 1 ||
        humanOption === 3 && cpuOption === 2
    )
        result.innerHTML = "!Felicidades! Has Ganado";
    else if(humanOption === cpuOption)
        result.innerHTML = "!Empate!";
    else
        result.innerHTML = "!Perdiste!";
}

function reset(){
    document.querySelector('.human-img').src = './img/question.png';
    document.querySelector('.cpu-img').src = './img/question.png';
    document.querySelector('.cpu-img').classList.remove('reflex');
    document.querySelector('.cover').classList.remove('reset');
    document.querySelector('.result').innerHTML = "Resultado";
}