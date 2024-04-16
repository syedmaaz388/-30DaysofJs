// String Slicing

const fullName = 'BroCode';

let firstName = fullName.slice(0,3);
console.log(firstName)

let lastName = fullName.slice(3,8)
console.log(lastName)

let firstChar = fullName.slice(0,1);
console.log(firstChar)
let lastChar = fullName.slice(-1);
console.log(lastChar)

let secondchar = fullName.slice(-2);
let secondchar2 = fullName.slice(-4);

console.log(secondchar)
console.log(secondchar2);


const fullNameOne = "Broseph Code";
let firstNameTwo = fullNameOne.slice(0,fullNameOne.indexOf(" "));
console.log(firstNameTwo);


const email = "Bro@gmail.com";
let useremail = email.slice(0,email.indexOf("@"));
console.log(useremail)

let extension = email.slice(email.indexOf("@"));
console.log(extension)

// Method Chaining

let userKaNaam = "    Brocode";
console.log(userKaNaam.trim().charAt(0).toLowerCase())

// Logical Operators


// And - &&
// Or - ||
// Not - !


const temp = 20;
if(temp > 0 && temp <= 30){
    console.log("The weather is good");
}else{
    console.log("Bad Weather");
}


// Strict Eqaulity

// = - Assignment Operator
// == - Comparision Operator
// === - Strict eqality operator
// != - inequality operator
// !=== - strict inequality operator
