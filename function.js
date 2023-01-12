var cityCode;
var apikey = "bd2ebdf12e3d42e783c9e26fdebcc919";
var data;
var flag = false;
const udt = document.querySelector("#updatetime");
const date = document.querySelector("#date");
const sr = document.querySelector("#sunrise");
const ss = document.querySelector("#sunset");
const mr = document.querySelector("#moonrise");
const ms = document.querySelector("#moonset");
const mp = document.querySelector("#moonphase");
const tmax = document.querySelector("#tempmax");
const tmin = document.querySelector("#tempmin");
const wead = document.querySelector("#weatherday");
const wean = document.querySelector("#weathernight");
const wdd = document.querySelector("#winddirday");
const wsd = document.querySelector("#windscaleday");
const wdn = document.querySelector("#winddirnight");
const wsn = document.querySelector("#windscalenight");

function getSubmit(){
    cityCode = document.getElementById("searchCity").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://devapi.qweather.com/v7/weather/7d?location="
    + cityCode +"&key="+ apikey,true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            data = JSON.parse(xhr.responseText);
            flag = true;
            weatherDisplay(0);
        }
    }
}

function weatherDisplay(day) {
    udt.innerHTML = data.updateTime;
    date.innerHTML = data['daily'][day]['fxDate'];
    sr.innerHTML = data['daily'][day]['sunrise'];
    ss.innerHTML = data['daily'][day]['sunset'];
    mr.innerHTML = data['daily'][day]['moonrise'];
    ms.innerHTML = data['daily'][day]['moonset'];
    mp.innerHTML = data['daily'][day]['moonPhase'] + " " +
    "<img src='./icons/" + data['daily'][day]['moonPhaseIcon'] +".svg' style='width:30px;height:30px'>";;
    tmax.innerHTML = data['daily'][day]['tempMax'] + "℃";
    tmin.innerHTML = data['daily'][day]['tempMin'] + "℃";
    wead.innerHTML = data['daily'][day]['textDay'] + " " +
    "<img src='./icons/" + data['daily'][day]['iconDay'] +".svg' style='width:30px;height:30px'>";
    wean.innerHTML = data['daily'][day]['textNight'] + " " +
    "<img src='./icons/" + data['daily'][day]['iconNight'] +".svg' style='width:30px;height:30px'>";;
    wdd.innerHTML = data['daily'][day]['windDirDay'];
    wsd.innerHTML = data['daily'][day]['windScaleDay'] +"级";
    wdn.innerHTML = data['daily'][day]['windDirNight'];
    wsn.innerHTML = data['daily'][day]['windScaleNight'] +"级";
}

function day1Color(){
    const element = document.querySelector("#forecastSpace");
    if(flag) {
        weatherDisplay(0);
    }
}

function day2Color(){
    const element = document.querySelector("#forecastSpace");
    if(flag) {
        weatherDisplay(1);
    }
}

function day3Color(){
    const element = document.querySelector("#forecastSpace");
    if(flag) {
        weatherDisplay(2);
    }
}

function day4Color(){
    const element = document.querySelector("#forecastSpace");
    if(flag) {
        weatherDisplay(3);
    }
}

function day5Color(){
    const element = document.querySelector("#forecastSpace");
    if(flag) {
        weatherDisplay(4);
    }
}

function day6Color(){
    const element = document.querySelector("#forecastSpace");
    if(flag) {
        weatherDisplay(5);
    }
}

function day7Color(){
    const element = document.querySelector("#forecastSpace");
    if(flag) {
        weatherDisplay(6);
    }
}