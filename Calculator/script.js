let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
 
function calculateSquareRoot() {
    display.value = Math.sqrt(eval(display.value));
}

function calculateSin() {
    display.value = Math.sin(toRadians(eval(display.value))).toFixed(8);
}

function calculateCos() {
    display.value = Math.cos(toRadians(eval(display.value))).toFixed(8);
}

function calculateTan() {
    display.value = Math.tan(toRadians(eval(display.value))).toFixed(8);
}

function calculateLog() {
    display.value = Math.log10(eval(display.value)).toFixed(8);
}

function calculateFactorial() {
    let num = eval(display.value);
    if (num < 0) {
        display.value = "Error";
        return;
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    display.value = fact;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
