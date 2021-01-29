document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const playerDisplay = document.querySelector('#player');

   let currentPlayer = 'Player X';

    squares.forEach(square => {
        square.addEventListener('click', clickoutcome)
    });

    function clickoutcome (e) {
        const squareArray = Array.from(squares);
        const index = squareArray.indexOf(e.target);
        playerDisplay.innerHTML = currentPlayer;


        if (currentPlayer === 'Player X') {
            currentPlayer = 'Player O';
            squares[index].classList.add('playerX');
        } else {
            currentPlayer = 'Player X';
            squares[index].classList.add('playerO');

        }
    }




});