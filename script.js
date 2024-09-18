let calculatorBtns = document.querySelectorAll(".input-button");
let display = document.querySelector(".display > input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");


equal.onclick = () => { 
    let displayValue = display.value; 
    try {      
        let solution = eval(displayValue)
    if (Number.isInteger(solution)) {
            display.value = solution;
    } else {
            display.value = solution.toFixed(2);
    }
} catch(err) {
    display.value = "syntax error"
}
}

clear.onclick = () => {
    display.value = "";
}
erase.onclick = () => {
    let displayVal = display.value.split("");
    lastValueRemove = displayVal.pop();
    let result = displayVal.join("");
    display.value = result;
}
calculatorBtns.forEach((button) => {
    let displayValue;
    button.onclick = () => {
        display.value += button.value;
    }
})