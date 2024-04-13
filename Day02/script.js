// Arithmetic Operators
// Operands (Values,Variables,etc)
// Operators(+,-,*,/)

let students  = 30;
students = students + 1;
console.log(students);
students -= 1;
console.log(students);
students *= 1.5;
console.log(students)

students = students % 2;
console.log(students);

// Operator Precedence
let res = 1 + 2 * 3 + 4 ** 2;
console.log(res);

// How to accept user input

// let username;
// username = window.prompt("username");
// console.log(username)


// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myHi").textContent = `Hello ${username}`
// }


// Type Conversion - Change the datatype of a value to another

// let age = prompt("How old are you ?");
// age = Number(age);
// age += 1;
// console.log(age)

let x = "Pizza";
let y = "Pizza";
let z = "Pizza";
let xx = [];

x = Number(x);
y = String(y);
z = Boolean(z);
xx = Boolean(xx)

console.log(x,typeof x)
console.log(y,typeof y)
console.log(z,typeof z)
console.log(xx,typeof xx)




// Task - Make input form take radius and give circumference


const pi = 3.14
let radius;
let circumference;

document.getElementById("myradiussubmit").onclick = function(){
    radius = document.getElementById("radiusinput").value;
    circumference = 2 * pi * radius;
    console.log(circumference);

    document.getElementById("ans").textContent  = `Circumference is ${circumference} cm`
}