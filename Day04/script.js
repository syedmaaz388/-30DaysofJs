// let mycheckbox = document.getElementById("mycheckbox");
// let visa = document.getElementById("visa");
// let mastercard = document.getElementById("mastercard");
// let rupay = document.getElementById("rupay");
// let Submit = document.getElementById("Submit");
// let subresult = document.getElementById("subresult");
// let paymentresult = document.getElementById("paymentresult");

// Submit.onclick = function(){
//     if(mycheckbox.checked){
//         subresult.textContent = "You are subscribe"
//     }else{
//         subresult.textContent = "You are not subscribe"

//     }
//     if(visa.checked){
//         paymentresult.textContent = "You selet visa for payment"
//     }else if(mastercard.checked){
//         paymentresult.textContent = "You selet mastercard for payment"

//     }else if(rupay.checked){
//         paymentresult.textContent = "You selet rupay for payment"

//     }
// }

// Ternary Operator

// let age = 21;
// let m = age >= 18 ? "Adult" : "Minor";
// console.log(m);

// let time = 16;
// let greeting = time < 12 ? "Good Morning" : "Good Afternoon";
// console.log(greeting);

// Switch

// let day  = 5;
// switch(day){
//     case 1:
//     console.log("Its Monday");
//     break;
//     case 2:
//     console.log("Its Tuesday");
//     break;
//     case 3:
//     console.log("Its Wednesday");
//     break;
//     case 4:
//     console.log("Its Thrusday");
//     break;
//     case 5:
//     console.log("Its Friday");
//     break;
//     case 6:
//     console.log("Its Saturday");
//     break;
//     case 7:
//     console.log("Its Sunday");
//     break;
//     default:
//         console.log("Its not any day")
// }


let testScore = 88;
let letterGrade;

switch(true){
    case testScore >= 80:
    letterGrade = "A";
    break;

    case testScore >= 75:
    letterGrade = "B";
    break;

    case testScore >= 55:
    letterGrade = "c";
    break;

    case testScore >= 40:
    letterGrade = "D";
    break;

    default:
        letterGrade = "Fail";
        

}

console.log(letterGrade)


// Strings method

let username = "BroCode";

console.log(username.charAt(0));

console.log(username.indexOf("o"));

console.log(username.lastIndexOf("o"));


console.log(username.length);

let usernameTwo = "  BroCode  ";
console.log(usernameTwo)
console.log(usernameTwo.trim())

console.log(username.toUpperCase());
console.log(username.toLowerCase());

console.log(username.repeat(3));

console.log(username.startsWith("B"));


console.log(username.includes("o"));

let phoneNumber = "123-456-789";
let newNumber = phoneNumber.replaceAll("-", "");

console.log(newNumber)