// Random Password Generator
function GeneratePassword(PasswordLength,isUpperCase,isLowerCase,isNumber,isSpecialSymbol){   
const LowerLetter = "abcdefghijklmnopqrstuvwxyz";
const UpperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Number = "123456789";
const Specialsymbol = "!@#$%&";
    let allowedChar = "";
    let password ="";
    allowedChar += isUpperCase ? LowerLetter :"";
    allowedChar += isLowerCase ? UpperLetter :"";
    allowedChar += isNumber ? Number :"";
    allowedChar += isSpecialSymbol ? Specialsymbol :"";
    for(let i = 0; i < PasswordLength;i++){
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex]
    }
    return password
}
const PasswordLength = 12;
const isUpperCase = true;
const isLowerCase = true;
const isNumber = true;
const isSpecialSymbol = false;
let MyPassword = GeneratePassword(PasswordLength,isUpperCase,isLowerCase,isNumber,isSpecialSymbol);
console.log(MyPassword);

// Callback

sayHello(GoodBye)

function sayHello(cc){
    console.log("Hello");
    cc()
}

function GoodBye(){
    console.log("Good Bye");
}

Sum(display,10,10)
function Sum(cb,a,b){
    let result =  a + b;
    display(result)

}

function display(result){
    console.log(result)
}

// For Each

const number = [1,2,3,4,5];

number.forEach(double);
number.forEach(display);



function display(elem){
    console.log(elem)
}

function double(elem,index,array){
    array[index] = elem * 2;
}


console.log(number)



let fruits = ["Apple","Orange","Banana"];

fruits.forEach(displayFruits)
fruits.forEach(ToUpperCase)
fruits.forEach(displayFruits)

function displayFruits(Fal){
    console.log(Fal)
}

function ToUpperCase(Fal,i,array){
    array[i] = Fal.toUpperCase()
}