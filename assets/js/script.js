const cards = document.querySelectorAll('.card');
let hasFlipperCard = false;
let firstCard, secondCard;
let lockBoard = false;

//função virar a carta
function flipCard(){
    if(lockBoard) return;
    if(this === flipCard) return;

    this.classList.add('flip');

    if(!hasFlipperCard){
        hasFlipperCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlipperCard = false;
    checkForMatch();
}

//função que checa se as cartas são iguais
function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlipperCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});






