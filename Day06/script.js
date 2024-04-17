
// While Loop

// let username = "";
// while(username === ""){
//     username = window.prompt("Enter your name");
// }

// console.log(`Hello ${username}`);


// let loggedIn = false;

// let usernameOne;
// let passwordOne;

// while(!loggedIn){
//     usernameOne = prompt("Enter your name");
//     passwordOne = prompt("Enter your password");
//     if(usernameOne === "Syed Maaz" && passwordOne === "React@123"){
//         loggedIn = true;
//         console.log("You are loggedIn");
//     }else{
//         console.log("Invalid Credential");
//     }
// }


// For Loop

for(let i = 1; i <= 10;i++){
    console.log("Hello" + i)
}


// Break and Continue

for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue;
    }else

    console.log(i)
}

for(let i = 1; i <= 10; i++){
    console.log(i)
    if(i === 5){
        break;
    }

  
}

// // Number Guessing Game

// const minimum = 1;
// const maximum = 100;
// const answer = Math.floor(Math.random() * (maximum - minimum + 1) + 1);
// let attempt = 0;
// let guess;
// let running = true;

// while(running){
//     guess = prompt(`Guess a number between - ${minimum} - ${maximum}`);
//     guess = Number(guess);
//     if(isNaN(guess)){
//         alert("Please enter a valid number");
//     }else if(guess < minimum || guess > maximum){
//         alert("Please enter a valid number");
//     }
//     else{
//      attempt++;
//      if(guess < answer){
//         alert("To Low Try Again")
//      }else if(guess > answer){
//         alert("To High! Try Agiain");
//      }else{
//         alert(`Correct - You take ${attempt} attempt to win this game`);
//         running = false;
//      }
//     }
// }


// Function
function HappyBirthday(){
    console.log("Happy Birthday!");
}
HappyBirthday()


function BirthdayWish(name){
    console.log(`Happy Birthday ${name}`);
}

BirthdayWish("Maaz");

function Add(x,y){
    let result = x + y;
    return result;
}

let ans = Add(5,5);
console.log(ans)
console.log(Add(2,2))


function Multiply(x,y){
    return x * y;
}

let ansmulti = (2,2);
console.log(ansmulti)
console.log(Multiply(10,10))


function isEven(number){
    if(number % 2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(12))

function isEvenTwo(num){
    return num % 2 === 0 ? true : false
}
console.log(isEvenTwo(8))