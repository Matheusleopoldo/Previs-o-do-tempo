const key = "2cbc2d0520ce522732d69c3c81ef79d5";

function insertDados(dados) {

    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "º C"
    document.querySelector('.text-prev').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = "Umidade de " + dados.main.humidity + "%"
    document.querySelector('.img-prev').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCity(city){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    insertDados(dados)

}

function clickButton() {
    const city = document.querySelector(".input-city").value

    searchCity(city)
}