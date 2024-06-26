let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "cc228f34d79beace3fdadef127864001";

const data = async function (search) {
    let getdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)
    console.log(getdata);
    let jsonData = await getdata.json();

    if (jsonData.cod == 400) {
        image.src = "error1.png";
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
    }
    if (jsonData.cod == 404) {
        image.src = "error2.png";
        city.innerHTML ="";
        temp.innerHTML = "";
        type.innerHTML = "";
    }
    city.innerHTML = search;
    temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
    type.innerHTML = jsonData.weather[0].main;

    if (type.innerHTML == "Clouds") {
        image.src = "clouds.png"
    } else if (type.innerHTML == "Clear") {
        image.src = "clears.png"
    } else if (type.innerHTML == "Haze") {
        image.src = "haze.png"
    } else if (type.innerHTML == "Rain") {
        image.src = "rain.png"
    } else if (type.innerHTML == "Storm") {
        image.src = "storm.png"
    }
    input.value = "";
}

function myFun() {
    let search = input.value;
    data(search);
};


