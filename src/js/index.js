const square = document.querySelector('.square');

square.addEventListener('click', ()=> {
    const blueSquare = square.classList.contains('blue');

    if(!blueSquare){
        square.classList.add('blue');
        alert('Esse quadrado TEM a cor azul');
    } else {
        square.classList.remove('blue');
    }
});