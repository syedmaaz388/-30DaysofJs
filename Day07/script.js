



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