const API_KEY = `b7998f8def683bdacb9ab0793a7d23c0`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city',temperature.name)
    setInnerText('temperature',temperature.main.temp)
    setInnerText('condition',temperature.weather[0].main)
    const iconURL = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src',iconURL);
}