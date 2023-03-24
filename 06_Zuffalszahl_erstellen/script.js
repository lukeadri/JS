let random = Math.random() * 1000;
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);


//wenn größer als 800
if (randomAsInteger>800){
    console.log("Bigger than 800");
}

//wenn zwischen 500 und 800
if (randomAsInteger>500&&randomAsInteger<800){
    console.log("Between 500 and 800");
}

//wenn zwischen 200 und 500
if (randomAsInteger>200&&randomAsInteger<500){
    console.log("Between 200 and 500");
}

//wenn zwischen 0 und 200
if (randomAsInteger>0&&randomAsInteger<200){
    console.log("Between 0 and 200");
}