function registerEvents(){
    document.getElementById("DadJoke").addEventListener("click",function(){
        DadJoke();
    })
}

function DadJoke(){
    fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", {
        method: "GET",
        headers: {
            "X-Api-Key": "r/awSOh+L1JFkW2oW7z7DA==HFYZ21UZjXmeTUKg"
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let html ="";
        data.forEach(dad => {
            html += "<li>" + dad.joke + "</li>"
            
        });
        
        document.getElementById("output").innerHTML = html;
        console.log(html);
    })
}

registerEvents();