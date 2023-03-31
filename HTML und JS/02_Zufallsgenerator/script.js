function generate(){
    let number1 = document.getElementById("field1").value;
    let number2 = document.getElementById("field2").value;

    let amountOfRandumNumbers = parseInt(number2) - parseInt(number1) + 1;
    let randomNumber = Math.floor(Math.random() * amountOfRandumNumbers) + parseInt(number1);
    console.log(randomNumber);

    document.getElementById("randomNumber").innerHTML = randomNumber;
}