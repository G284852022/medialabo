/*let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    { 
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};*/

let a = document.querySelector('#searchBotton');
a.addEventListener('click', search);

function search() {
  let r = document.querySelectorAll('input[name="where"]');
  let SearchId;

  for(let i = 0;i<r.length;i++){
    if(r[i].checked){
      SearchId = r[i].id;
      let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+SearchId+'.json'
      console.log('選択されているボックスID:', SearchId);
      console.log('URL:', url);
      break;
      
    }
  }

  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+SearchId+'.json'
  axios.get(url)
  .then(showResult)
  .catch(showError)
  .then(finish);
}

let data;

function showResult(resp) {
  data = resp.data;

  

  let s1=document.querySelector('td#d1');
  s1.textContent=data.coord.lon;
  let s2=document.querySelector('td#d2');
  s2.textContent=data.coord.lat;
  let s3=document.querySelector('td#d3');
  s3.textContent=data.weather[0].description;
  let s8=document.querySelector('td#d8');
  s8.textContent=data.main.temp_max;
  let s4=document.querySelector('td#d4');
  s4.textContent=data.main.temp_min;
  let s5=document.querySelector('td#d5');
  s5.textContent=data.wind.speed;
  let s6=document.querySelector('td#d6');
  s6.textContent=data.wind.deg;
  let s7=document.querySelector('td#d7');
  s7.textContent=data.name;

  if(typeof data === 'string'){
    data = JSON.parse(data);
  }

  console.log(data);
}

  function showError(error) {
    console.log('Error fetching weather data:');
}

function finish() {
  console.log('Ajax 通信が終わりました');
}

