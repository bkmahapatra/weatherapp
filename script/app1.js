let obb={
  "location": {
    "city": "new delhi",
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
//functions
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '71c1fa0bcemsh73b525be89b9064p1f1599jsna4d08da3676e',
    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
  }
};

let curr_lat,curr_long;
const curr_pos=()=>{
  const promise=new Promise((res,rej)=>{
    let curr_lat,curr_long;
    navigator.geolocation.getCurrentPosition(suc=>{
      res(suc);
    })
  });
  return promise;
}
//getting data 
const fetchData=(url,opt)=>{
  return fetch(url, opt)
    .then(response =>{
      return response.json();
      console.log(response.json());
    });
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
}
// async function run(){
  
//   const res=await curr_pos();
//   curr_lat=19.1712//res.coords.latitude;
//   curr_long=83.4163//res.coords.longitude;
  
//   console.log(curr_lat,curr_long);

//   const url=`https://yahoo-weather5.p.rapidapi.com/weather?lat=${curr_lat}&long=${curr_long}&format=json&u=c`;
//   const data= await fetchData(url,options);
//  obb=data;
  
// }

//run();


// curr_pos().then(res=>{
//     console.log(res.coords);
// })



//htmlbody
const appbody=document.getElementById('appbody');



const render=()=>{
console.log(obb.location.city);

/*locaion*/
const loca=appbody.querySelector('#location');
loca.innerHTML=`<div class="ques" id="city"><i class="fa-solid fa-location-crosshairs"></i> ${obb.location.city} </div>
            <div class="ques" id="region"><i class="fa-solid fa-earth-africa"></i> ${obb.location.region} </div>
            <div class="ques" id="country"><i class="fa-solid fa-flag"></i> ${obb.location.country} </div>
            <div class="ques" id="latlong"><i class="fa-solid fa-globe"></i> ${obb.location.lat+" "+obb.location.long}</div>
            <div class="ques" id="timezone"><i class="fa-solid fa-clock"></i> ${obb.location.timezone_id}</div>`;

/*condition*/
const condi=appbody.querySelector('#condition');
condi.innerHTML=`<div class="conques" id="temperature"><i class="fa-solid fa-temperature-high"></i> ${obb.current_observation.condition.temperature}</div>
            <div class="conques" id="whtext"><i class="fa-solid fa-cloud-moon"></i> ${obb.current_observation.condition.text}</div>`;

const obser=appbody.querySelector('#observation');
obser.innerHTML=` <div class="obques" id="wind"><i class="fa-solid fa-wind"></i> ${obb.current_observation.wind.chill}</div>
            <div class="obques" id="direction"><i class="fa-solid fa-location-arrow"></i> ${obb.current_observation.wind.direction}</div>
            <div class="obques" id="speed"><i class="fa-solid fa-gauge"></i> ${obb.current_observation.wind.speed}</div>`;

const atmo=appbody.querySelector('#atmosphere');
atmo.innerHTML=`<div class="atques" id="humidity"><i class="fa-solid fa-water"></i> ${obb.current_observation.atmosphere.humidity}</div>
            <div class="atques" id="visibility"><i class="fa-solid fa-eye"></i> ${obb.current_observation.atmosphere.visibility}</div>
            <div class="atques" id="pressure"><i class="fa-solid fa-bars-staggered"></i> ${obb.current_observation.atmosphere.pressure}</div>`;

const astro=appbody.querySelector('#astronomy');
astro.innerHTML=`<div class="astques" id="sunrise"><i class="fa-solid fa-sun"></i> ${obb.current_observation.astronomy.sunrise}</div>
            <div class="astques" id="sunset"><i class="fa-solid fa-moon"></i> ${obb.current_observation.astronomy.sunset}</div>`
}

render();