function addieren(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) + parseFloat(num2);

    console.log(result);
}

function subtrahieren(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) - parseFloat(num2);

    console.log(result);
}

function multiplizieren(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) * parseFloat(num2);

    console.log(result);
}

function dividieren(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) / parseFloat(num2);

    console.log(result);
}