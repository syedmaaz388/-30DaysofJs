// Counter Program

// const heading = document.getElementById("counterlable");
// const Incrase = document.getElementById("increase");
// const Reset = document.getElementById("Reset");
// const Decrease = document.getElementById("Decrease");


// let count = 0;
// Incrase.onclick = function(){
//     count++;
//     heading.textContent = count
// }
// Reset.onclick = function(){
//     count = 0;
//     heading.textContent = count
// }
// Decrease.onclick = function(){
//     count--;
//     heading.textContent = count
// }

// Math - Build-in Object that provides collection of properties and methods

console.log(Math.PI)

let x = 3.12;
let z = Math.round(x);
console.log(z);
let xx = Math.ceil(x);
console.log(xx)
let yy = Math.floor(x);
console.log(yy)


let c = 81;
let d = Math.sqrt(c);
console.log(d);

let a = -51.21;
console.log(Math.abs(a))

let aa = 3;
let bb = 5;
let cc = 4;

let max = Math.max(aa,bb,cc);
console.log(max);

let value1 = 2;
let value2 = 3;
let answerOne = Math.pow(value1,value2);
let answerTwo = Math.pow(value2,value1);

console.log(answerOne);
console.log(answerTwo);


// Random Number 

let random = Math.random() * 5
let randomtwo = Math.floor(Math.random() * 5) + 1

console.log(random)
console.log(randomtwo)


let mininum = 50;
let maximum = 100;

let randomrange = Math.floor(Math.random() * (maximum - mininum)) + mininum
console.log(randomrange)

// Random Number Generator


// let RandomValue = document.getElementById("RandomValue");
// let Roll = document.getElementById("roll");
// let value;
// Roll.onclick = function(){

//     value = Math.floor(Math.random() * 6) + 1
//     RandomValue.textContent = value;

// }


// if else


let age = 20;
let isVoterId = true;
if(age >= 18){
    console.log("You are eiligble to vote");
    if(isVoterId){
        console.log("You can vote");
    }else{
        console.log("You cannot vote")
    }
}else{
    console.log("You are not eligible for vote");
}

// Zomato Rating System

let RateInput = document.getElementById("RateInput");
let RateBtn = document.getElementById("RateBtn");
let RatingPara = document.getElementById("RatingPara");



let Rating;
RateBtn.onclick = function(){
    Rating = RateInput.value;
    if(Rating <= 1){
        RatingPara.textContent = "Sorry for your experience we are trying to improve"
    }
    else if(Rating <= 2){
        RatingPara.textContent = "We are trying to improve"
    }
    else if(Rating <= 3){
        RatingPara.textContent = "We can improve"
    }
    else if(Rating <= 4){
        RatingPara.textContent = "Next Time Pakka 5"
    }
    else if(Rating <= 5){
        RatingPara.textContent = "Thank you visit again"
    }else{
        RatingPara.textContent = "Enter rating between 1 to 5"
    }
}

