const appbody=document.getElementById('appbody');
console.log(appbody);

const obb={
    "location": {
      "city": "Bhubaneswar",
      "region": " OR",
      "woeid": 2294941,
      "country": "India",
      "lat": 20.279961,
      "long": 85.818604,
      "timezone_id": "Asia/Kolkata"
    },
    "current_observation": {
      "wind": {
        "chill": 94,
        "direction": 158,
        "speed": 4
      },
      "atmosphere": {
        "humidity": 90,
        "visibility": 10,
        "pressure": 29.65,
        "rising": 0
      },
      "astronomy": {
        "sunrise": "5:30 am",
        "sunset": "6:4 pm"
      },
      "condition": {
        "code": 33,
        "text": "Mostly Clear",
        "temperature": 82
      },
      "pubDate": 1661807700
    },
    "forecasts": [
      {
        "day": "Mon",
        "date": 1661742000,
        "low": 81,
        "high": 91,
        "text": "Thunderstorms",
        "code": 4
      },
      {
        "day": "Tue",
        "date": 1661828400,
        "low": 79,
        "high": 90,
        "text": "Thunderstorms",
        "code": 4
      },
      {
        "day": "Wed",
        "date": 1661914800,
        "low": 79,
        "high": 89,
        "text": "Thunderstorms",
        "code": 4
      },
      {
        "day": "Thu",
        "date": 1662001200,
        "low": 80,
        "high": 89,
        "text": "Thunderstorms",
        "code": 4
      },
      {
        "day": "Fri",
        "date": 1662087600,
        "low": 79,
        "high": 90,
        "text": "Thunderstorms",
        "code": 4
      },
      {
        "day": "Sat",
        "date": 1662174000,
        "low": 80,
        "high": 90,
        "text": "Thunderstorms",
        "code": 4
      },
      {
        "day": "Sun",
        "date": 1662260400,
        "low": 80,
        "high": 90,
        "text": "Thunderstorms",
        "code": 4
      },
      {
        "day": "Mon",
        "date": 1662346800,
        "low": 80,
        "high": 89,
        "text": "Thunderstorms",
        "code": 4
      },
      {
        "day": "Tue",
        "date": 1662433200,
        "low": 78,
        "high": 88,
        "text": "Thunderstorms",
        "code": 4
      },
      {
        "day": "Wed",
        "date": 1662519600,
        "low": 78,
        "high": 87,
        "text": "Scattered Thunderstorms",
        "code": 47
      },
      {
        "day": "Thu",
        "date": 1662606000,
        "low": 79,
        "high": 85,
        "text": "Scattered Thunderstorms",
        "code": 47
      }
    ]
  }

console.log(obb.location.city);


/*locaion*/
const loca=appbody.querySelector('#location');
loca.innerHTML=`<div class="ques" id="city">City: ${obb.location.city} </div>
            <div class="ques" id="region">Region:  ${obb.location.region} </div>
            <div class="ques" id="country">Country: ${obb.location.country} </div>
            <div class="ques" id="latlong">lotilongi: ${obb.location.lat+" "+obb.location.long}</div>
            <div class="ques" id="timezone">timezone: ${obb.location.timezone_id}</div>`;

/*condition*/
const condi=appbody.querySelector('#condition');
condi.innerHTML=`<div class="conques" id="temperature">temperature: ${obb.current_observation.condition.temperature}</div>
            <div class="conques" id="whtext">wheather: ${obb.current_observation.condition.text}</div>`;

const obser=appbody.querySelector('#observation');
obser.innerHTML=` <div class="obques" id="wind">wind: ${obb.current_observation.wind.chill}</div>
            <div class="obques" id="direction">direction: ${obb.current_observation.wind.direction}</div>
            <div class="obques" id="speed">speed: ${obb.current_observation.wind.speed}</div>`;

const atmo=appbody.querySelector('#atmosphere');
atmo.innerHTML=`<div class="atques" id="humidity">humidity: ${obb.current_observation.atmosphere.humidity}</div>
            <div class="atques" id="visibility">visibility: ${obb.current_observation.atmosphere.visibility}</div>
            <div class="atques" id="pressure">pressure: ${obb.current_observation.atmosphere.pressure}</div>`;

const astro=appbody.querySelector('#astronomy');
astro.innerHTML=`<div class="astques" id="sunrise">sunrise: ${obb.current_observation.astronomy.sunrise}</div>
            <div class="astques" id="sunset">sunset: ${obb.current_observation.astronomy.sunset}</div>`;