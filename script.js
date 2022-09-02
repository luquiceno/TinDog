
import Dog from './Dog.js';
import dogsData from './data.js';

let currentDogIndex = 0;
let currentDog = new Dog(dogsData[currentDogIndex]);
document.getElementById("accept-button").addEventListener("click", likeDog);
document.getElementById("reject-button").addEventListener("click", rejectDog);


function render() {
    document.getElementById("card").innerHTML = currentDog.getDogHtml();
    document.getElementById("reject-button").disabled = false;
    document.getElementById("accept-button").disabled = false;
}

function getNewDog() {
    currentDogIndex += 1;
    currentDog = new Dog(dogsData[currentDogIndex]);
    setTimeout( () => {
        render();
    }, 1500);

    if(currentDogIndex === dogsData.length) {
        currentDogIndex = 0;
        currentDog = new Dog(dogsData[currentDogIndex]);
    }
}

function likeDog() {
    currentDog.setMatchStatus(true);
    getNewDog();
    document.getElementById("reject-button").disabled = true;
    document.getElementById("messageLike").style.display = "block";    
}

function rejectDog() {
    currentDog.setMatchStatus(false);
    getNewDog();  
    document.getElementById("accept-button").disabled = true;
    document.getElementById("messageNope").style.display = "block";    
}

render();

