const apiKey='26fbf940f906bb96a7d920d48ed3fbf0';
const apiUrl="https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";
let button=document.querySelector('button');
let input=document.querySelector('input');
let weather=document.querySelector('.weather-icon');

async function checkWeather(city){
    
    const response =await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data =await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=`${data.main.temp}°c`;
    document.querySelector('.wind').innerHTML=`${data.wind.speed}km/h`;
    document.querySelector('.humidity').innerHTML=`${data.main.humidity}%`;
    weather.setAttribute('src',`${data.weather[0].main}.png`);
    document.querySelector('.weather').style.display='block';
  
}



button.addEventListener('click',()=>{
    checkWeather(input.value);

});
    




