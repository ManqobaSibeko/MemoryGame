document.addEventListener('DOMContentLoaded', ()=>{

    const cardArray = [{
        name:'pic1',
        img: "images/pic1.jpg"
    },
    {
        name:'pic1',
        img: "images/pic1.jpg"
    },
    {
        name:'pic2',
        img: "images/pic2.jpeg"
    },
    {
        name:'pic2',
        img: "images/pic2.jpeg"
    },
    {
        name:'pic3',
        img: "images/pic3.jpg"
    },
    {
        name:'pic3',
        img: "images/pic3.jpg"
    },
    {
        name:'pic4',
        img: "images/pic4.jpg"
    },
    {
        name:'pic4',
        img: "images/pic4.jpg"
    },
    {
        name:'pic5',
        img: "images/pic5.jpg"
    },
    {
        name:'pic5',
        img: "images/pic5.jpg"
    },
    {
        name:'pic6',
        img: "images/pic6.jpg"
    },
    {
        name:'pic6',
        img: "images/pic6.jpg"
    }

]


//refresh the gae with new card position is to randomize
cardArray.sort(()=> 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result ')
var cardChosen = [];
var cardChosenId = [];
var cardsWon= [];


//create the board 
function createBoard(){

    for(let i =0;i < cardArray.length; i++){
        
        var card = document.createElement('img');
        card.setAttribute('src', "images/blank.jpg");
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card);
    }
}


//check for match
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if (cardChosen[0] ===cardChosen[1]){
        alert('You found a match');
        cards[optionOneId].setAttribute('src','images/white.jpg')
        cards[optionTwoId].setAttribute('src','images/white.jpg')

        cardsWon.push(cardChosen)
    }else{
        //if the cards don't match flip the cards over to the blank pic
        cards[optionOneId].setAttribute('src','images/blank.jpg')
        cards[optionTwoId].setAttribute('src','images/blank.jpg')
        alert('Sorry , try again')
    }

    cardChosen=[];
    cardChosenId=[];
    resultDisplay.textContent = cardsWon.length

    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = `Congradutions !!! You've found them all`
    };
}



//flip your card
function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}

createBoard();

});
