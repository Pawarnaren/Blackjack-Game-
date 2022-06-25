// create a function , getRandomCard() that always return 5
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cardArray = [firstCard, secondCard];
let sum = firstCard + secondCard;


//  creating object player 
// let playerName = "Narender ";
// let playerChips = 145;
let player = {
    name : "Narender",
    chips : 180
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : " + "$" + player.chips;




let message = "";

//  ************************************************************************************************

//  fucntion to start the game
//  Store the message-el paragraph  a variable called messageEl
//  Store the sumGame paragraph  in a variable called sumEl

let messageEl = document.getElementById("message-ele");
let sumEl = document.getElementById("sumGame");
// let sumEl = document.querySelector(".sumGame");
let cardEl = document.getElementById("cardGame");



// console.log(sumEl);
// sumEl.textContent = sum;
// console.log(textContent);


function startGame(){
   
    renderGame();
}

let isAlive = true;
let hasBlackJack = false;

function renderGame(){  
    
    if(sum<=20){
        message = "Do you want to draw a new card ? 🙂";
        isAlive = true;
    }
    
    else if(sum===21){
        message = "Wohoo! you've got the Blackjack! 🥳";
        hasBlackJack = true;
    }
    
    else{
        message = "you're out of the game! 😭";
        isAlive = false;
    }
    // cardEl.textContent = "Cards : " + firstCard + " , " + secondCard;
    // cardEl.textContent = "Cards : " + cardArray[0] + " , " + cardArray[1];
    cardEl.textContent = "Cards : ";

    //  Create a for loop that renders out all the cards instead of just two
    for ( let i =0; i < cardArray.length; i++) {
        cardEl.textContent += cardArray[i] + " ";
    }



    sumEl.textContent = "Sum : " + sum;
    messageEl.textContent = message;
}

//  ************************************************************************************************

// function for new card 


// create a card variable, and hard code its value to a number (2-11)
// Add new card to sum variable 
// call startGame();




function newCard(){

    if ( isAlive === true && hasBlackJack === false){

        let nextcard = getRandomCard();
        sum += nextcard;
        //  push the card to the array 
        cardArray.push(nextcard);
        startGame();
    }
}

function resetGame(){
        location.reload();
}






