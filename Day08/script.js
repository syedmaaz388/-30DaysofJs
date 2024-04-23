let numbers = [1,2,3,4,5];
let max = Math.max(...numbers);
console.log(max)
let min = Math.min(...numbers);
console.log(min);

let username = "BrodCode";
console.log(...username)

let fruits = ["Apple","Mango","Banana"];
let Vegetables = ["Carrots","Celery","Onion"];

console.log(...fruits,...Vegetables)


// Rest parameters


const food1 = "Ice cream";
const food2 = "Chocolate";
const food3 = "Pizza";
const food4 = "Burger";

function getFoods(...food){
    console.log(...food);
}
getFoods(food1,food2,food3,food4)


// Dice Roller program


function rollDice(){
    const numofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let i = 0; i < numofDice;i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="diceimages/${value}.png" alt="Dice ${value}">`)

        diceResult.textContent = `dice: ${values.join(', ')}`;
        diceImages.innerHTML = images.join('');
    }


}
