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

  

  let x1=document.querySelector('td#p1');
  x1.textContent=data.coord.lon;
  let x2=document.querySelector('td#p2');
  x2.textContent=data.coord.lat;
  let x3=document.querySelector('td#p3');
  x3.textContent=data.weather[0].description;
  let x4=document.querySelector('td#p4');
  x4.textContent=data.main.temp_max;
  let x5=document.querySelector('td#p5');
  x5.textContent=data.main.temp_min;
  let x6=document.querySelector('td#p6');
  x6.textContent=data.wind.speed;
  let x7=document.querySelector('td#p7');
  x7.textContent=data.wind.deg;
  let x8=document.querySelector('td#p8');
  x8.textContent=data.name;

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

