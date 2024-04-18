
let globalVar = 10;
console.log(globalVar);
function Hello(){
    let localVar = 20;
    console.log(localVar);
    console.log(globalVar);
}
Hello()

// console.log(localVar) 



let tempinput = document.getElementById("tempinput");
let celfah = document.getElementById("celfah");
let fahcel = document.getElementById("fahcel");
let button = document.getElementById("button");
let answer = document.getElementById("answer");

let temp;

button.onclick = function(e){
    e.preventDefault();
    let value = Number(tempinput.value);
    if(celfah.checked){
temp = value * 9/5 + 32
        answer.textContent = temp.toFixed(1) + " ° f"
    }else if(fahcel.checked){
        temp = (value - 32) * (5/9);
        answer.textContent = temp.toFixed(1) + " ° c"
    }else{
        answer.textContent = "Select a unit"
    }


    console.log(value)
    
}




// Arrays

let fruits = ["Apple","Orange","Banana"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits.push("Guava");
fruits.push("Cherry");
console.log(fruits);

fruits.pop();
console.log(fruits);
fruits.unshift("Mango");
fruits.unshift("PineApple");
console.log(fruits)
fruits.shift();
console.log(fruits)

console.log(fruits.length)

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
    
}

for(let i = fruits.length - 1;i >= 0; i--){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

for(let fruit in fruits){
    console.log(fruit);
}
