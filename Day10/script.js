// Map

const numbers = [1,2,3,4,5];

const squares = numbers.map(square);
console.log(squares)

function square(element){
    return Math.pow(element,2)
}

const fruits = ["Mango","Apple","Lemon"];


const fruitsuppercase = fruits.map(UpperCase);
console.log(fruits)

function UpperCase(element){
    return element.toUpperCase()
}



// Filter

let MyNum = [1,2,3,4,5,6,7,8,9];

let evenNumber = MyNum.filter(isEven);
console.log(evenNumber)
function isEven(element){
    return element % 2 === 0
}



const ages = [11,54,32,81,9,32,19,7,34];

let AdultAges = ages.filter(adultNum);
console.log(AdultAges)

function adultNum(elem){
    return elem >= 18;
}


const drinks = ["Tea","Coffee","Milk","Shake","Mojito","Soda"];


let shortdrink = drinks.filter(ShortNameDrink);
console.log(shortdrink)

function ShortNameDrink(drink){
    return drink.length <= 4;
}


// Reduce

const NumList = [11,21,44,54,15,26,73,58,9,18];

const total = NumList.reduce(AllNumber);
console.log(total)

function AllNumber(accu,elem){
    return accu + elem;
}

const maxnum = NumList.reduce(GiveMax);
console.log(maxnum)

function GiveMax(acc,ele){
    return Math.max(acc,ele)
}


// Function Declaration


function Sayhello(){
    console.log("Hello Maaz");
}
Sayhello()

// Function Expression

const  SayHello2  = () => {
    console.log("Hello Maaz")
}
SayHello2()

const numbernum = [1,2,3,4,5,6,7,8,9,10];

const newevenNumber = numbernum.filter(function(element){
   return element % 2 === 0;
})

console.log(newevenNumber);


// Arrow Function

const hello = () => console.log("Hello");
hello()

const onlineven = newevenNumber.filter((elem) => elem % 2 === 0);
console.log(onlineven)