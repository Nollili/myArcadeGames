
document.addEventListener('DOMContentLoaded', () => {

    // Cards:
    const cardArray = [
        {
            name: 'apple',
            img: 'img/apple.png'
        },
        {
            name: 'apple',
            img: 'img/apple.png'
        },
        {
            name: 'heart',
            img: 'img/heart.png'
        },
        {
            name: 'heart',
            img: 'img/heart.png'
        },
        {
            name: 'house',
            img: 'img/house.png'
        },
        {
            name: 'house',
            img: 'img/house.png'
        },
        {
            name: 'icecream',
            img: 'img/icecream.png'
        },
        {
            name: 'icecream',
            img: 'img/icecream.png'
        },
        {
            name: 'jacko',
            img: 'img/jacko.png'
        },
        {
            name: 'jacko',
            img: 'img/jacko.png'
        },
        {
            name: 'nanu',
            img: 'img/nanu.png'
        },
        {
            name: 'nanu',
            img: 'img/nanu.png'
        },
        {
            name: 'rainbow',
            img: 'img/rainbow.png'
        },
        {
            name: 'rainbow',
            img: 'img/rainbow.png'
        },
        {
            name: 'sun',
            img: 'img/sun.png'
        },
        {
            name: 'sun',
            img: 'img/sun.png'
        },
        {
            name: 'tv',
            img: 'img/tv.png'
        },
        {
            name: 'tv',
            img: 'img/tv.png'
        },
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    // Create gameboard
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'img/cover.png');
            card.setAttribute('width', 200);
            card.setAttribute('data-id', i);
            grid.appendChild(card);
            card.addEventListener('click', flipcard);
        }
    }



    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            //alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            //alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'img/blank.png');
            cards[optionTwoId].setAttribute('src', 'img/blank.png');
            cards[optionOneId].removeEventListener('click', flipcard);
            cards[optionTwoId].removeEventListener('click', flipcard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'img/cover.png');
            cards[optionTwoId].setAttribute('src', 'img/cover.png');
            //alert('Sorry, try again');

        }
        
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulatins, You found them all!';
        }
    }

    // Flip cards
    function flipcard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 300);
        }
    }

    createBoard();
});