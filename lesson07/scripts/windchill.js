let tempF = -1;
let windSpeed = -1;
const windyboi = document.getElementById("weatherText");
let windChill;
if(tempF <= 50 && windSpeed > 3.0){
    windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempF * Math.pow(windSpeed, 0.16));
}
else{
    windChill = 'N/A';
}

windyboi.innerHTML = tempF + '°F<br>Sunny<br>humidity: 35%<br>WindChill: '+ windChill;