let obb = {
location: {
    city: "Mumbai",
    region: " OR",
    woeid: 2294941,
    country: "India",
    lat: 20.279961,
    long: 85.818604,
    timezone_id: "Asia/Kolkata",
  },
  current_observation: {
    wind: {
      chill: 94,
      direction: 158,
      speed: 4,
    },
    atmosphere: {
      humidity: 90,
      visibility: 10,
      pressure: 29.65,
      rising: 0,
    },
    astronomy: {
      sunrise: "5:30 am",
      sunset: "6:4 pm",
    },
    condition: {
      code: 33,
      text: "Mostly Clear",
      temperature: 82,
    },
    pubDate: 1661807700,
  }, 
  forecasts: [
    {
      day: "Mon",
      date: 1661742000,
      low: 81,
      high: 91,
      text: "Thunderstorms",
      code: 4,
    },
    {
      day: "Tue",
      date: 1661828400,
      low: 79,
      high: 90,
      text: "Thunderstorms",
      code: 4,
    },
    {
      day: "Wed",
      date: 1661914800,
      low: 79,
      high: 89,
      text: "Thunderstorms",
      code: 4,
    },
    {
      day: "Thu",
      date: 1662001200,
      low: 80,
      high: 89,
      text: "Thunderstorms",
      code: 4,
    },
    {
      day: "Fri",
      date: 1662087600,
      low: 79,
      high: 90,
      text: "Thunderstorms",
      code: 4,
    },
    {
      day: "Sat",
      date: 1662174000,
      low: 80,
      high: 90,
      text: "Thunderstorms",
      code: 4,
    },
    {
      day: "Sun",
      date: 1662260400,
      low: 80,
      high: 90,
      text: "Thunderstorms",
      code: 4,
    },
    {
      day: "Mon",
      date: 1662346800,
      low: 80,
      high: 89,
      text: "Thunderstorms",
      code: 4,
    },
    {
      day: "Tue",
      date: 1662433200,
      low: 78,
      high: 88,
      text: "Thunderstorms",
      code: 4,
    },
    {
      day: "Wed",
      date: 1662519600,
      low: 78,
      high: 87,
      text: "Scattered Thunderstorms",
      code: 47,
    },
    {
      day: "Thu",
      date: 1662606000,
      low: 79,
      high: 85,
      text: "Scattered Thunderstorms",
      code: 47,
    },
  ],
};
//functions
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "71c1fa0bcemsh73b525be89b9064p1f1599jsna4d08da3676e",
    "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
  },
};

// let curr_lat, curr_long;
// const curr_pos = () => {
//   const promise = new Promise((res, rej) => {
//     let curr_lat, curr_long;
//     navigator.geolocation.getCurrentPosition((suc) => {
//       res(suc);
//     });
//   });
//   return promise;
// };
//getting data
const fetchData = (url, opt) => {
  return fetch(url, opt).then((response) => {
    return response.json();
  });
  // .then(response => console.log(response))
  // .catch(err => console.error(err));
};

///////////////////////////////////////main
/*
async function run(pcity='bhubaneswar') {
  // const res = await curr_pos();
  // curr_lat =  res.coords.latitude; //19.1712;
  // curr_long = res.coords.longitude; //83.4163;

  // console.log(curr_lat, curr_long);
  
  const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${pcity}&format=json&u=c`; //lat=${curr_lat}&long=${curr_long}
  const data = await fetchData(url, options);
  obb = data;

  render();
  console.log("finished");
}

run(); 
*/
 

//htmlbody
const appbody = document.getElementById("appbody");
const searchtab = document.getElementById("scity");
const btn = document.getElementById("tap_search");

btn.addEventListener("click", () => {
  console.log("click");
  run(searchtab.value);
  searchtab.value="";
});

const render = () => { //<i class="fa-solid fa-flag"></i>
  console.log(obb.location.city);

  /*locaion*/
  const loca = appbody.querySelector("#location");
  loca.innerHTML = `<div class="ques tooltip" id="city"><i class="fa-solid fa-location-crosshairs"></i> ${
    obb.location.city
  } <span class="tooltiptext">City</span>  </div>
  <div class="ques tooltip" id="country">( ${
    obb.location.country
  } )<span class="tooltiptext">Country</span>   </div>
  <div class="ques tooltip" id="latlong"><i class="fa-solid fa-globe"></i>  ${
    obb.location.lat + " / " + obb.location.long
  } <span class="tooltiptext">latitude & longitude</span>  </div>
            <div class="ques tooltip" id="region"><i class="fa-solid fa-earth-africa"></i> ${
              obb.location.region
            } <span class="tooltiptext">Region</span>  </div> 
            
            <div class="ques tooltip" id="timezone"><i class="fa-solid fa-clock"></i> ${
              obb.location.timezone_id
            } <span class="tooltiptext">TimeZone</span>  </div>`;

  /*condition*/
  const condi = appbody.querySelector("#condition");
  condi.innerHTML = `<div class="conques tooltip" id="whtext"><i class="fa-solid fa-cloud-moon"></i> ${obb.current_observation.condition.text} <span class="tooltiptext">Wheather</span>  </div>
  <div class="conques tooltip" id="temperature"><i class="fa-solid fa-temperature-high"></i> ${obb.current_observation.condition.temperature} °c <span class="tooltiptext">Temperature</span>  </div>`;

  const obser = appbody.querySelector("#observation");
  obser.innerHTML = ` <div class="obques tooltip" id="wind"><i class="fa-solid fa-wind"></i> ${obb.current_observation.wind.chill} <span class="tooltiptext">Wind Chill</span>  </div>
            <div class="obques tooltip" id="direction"><i class="fa-solid fa-location-arrow"></i> ${obb.current_observation.wind.direction} ° <span class="tooltiptext">Wind Direction</span>  </div>
            <div class="obques tooltip" id="speed"><i class="fa-solid fa-gauge"></i> ${obb.current_observation.wind.speed} km/h<span class="tooltiptext">Wind Speed</span>  </div>`;

  const atmo = appbody.querySelector("#atmosphere");
  atmo.innerHTML = `<div class="atques tooltip" id="humidity"><i class="fa-solid fa-water"></i> ${obb.current_observation.atmosphere.humidity} % <span class="tooltiptext">Humidity</span>  </div>
            <div class="atques tooltip" id="visibility"><i class="fa-solid fa-eye"></i> ${obb.current_observation.atmosphere.visibility} km<span class="tooltiptext">Visibility</span>  </div>
            <div class="atques tooltip" id="pressure"><i class="fa-solid fa-bars-staggered"></i> ${obb.current_observation.atmosphere.pressure} bars <span class="tooltiptext">Pressure</span>  </div>`;

  const astro = appbody.querySelector("#astronomy");
  astro.innerHTML = `<div class="astques tooltip" id="sunrise"><i class="fa-solid fa-sun"></i> ${obb.current_observation.astronomy.sunrise} <span class="tooltiptext">Sunrise</span>  </div>
            <div class="astques tooltip" id="sunset"><i class="fa-solid fa-moon"></i> ${obb.current_observation.astronomy.sunset} <span class="tooltiptext">Sunset</span>  </div>`;
            
            
            
            //forecast
            const forecastData=document.getElementById("forebody");
            const tempnode=document.getElementById('temp');
            
            const whicon=(st)=>{
              if(st=="Sunny") return 'fa-sun';
              else if(st=="Mostly Sunny") return 'fa-cloud-sun';
              else if(st=="Mostly Cloudy") return 'fa-cloud';
              else if(st=="Cloudy") return 'fa-cloud-cloud';
              else if(st=="Thunderstorms") return 'fa-cloud-bolt';
              else if(st=="Scattered Thunderstorms") return 'fa-cloud-sun-rain';
              else if(st=="Partly Cloudy") return 'fa-cloud-sun';
              else if(st=="Showers") return "fa-cloud-showers-heavy";
              else if(st=="Rain") return  "fa-cloud-rain";
              else return "fa-cloud-moon";
            }
            
            obb.forecasts.forEach(data=>{
              let temp=document.importNode(tempnode.content,true);
              //console.log(temp.querySelector('#day'))
              temp.querySelector('#day').textContent=data.day;
              temp.querySelector('#lowt').innerHTML=`<i class="fa-solid fa-arrow-down"></i> ${data.low}`;
              temp.querySelector('#hight').innerHTML=`<i class="fa-solid fa-arrow-up"></i> ${data.high}`;               
              temp.querySelector('#whtext').innerHTML=`<i class="fa-solid ${whicon(data.text)}"></i> ${data.text}`;

              // temp.querySelector('#whtext').textContent=data.text;
              // console.log(data.date)   <i class="fa-solid fa-cloud"></i>
              // let alldate=new Date(Date.now())  ;
              // let date=alldate.getDate()+"/"+(parseInt(alldate.getMonth())+1)+"/"+alldate.getFullYear();
              // console.log(date);
              // temp.querySelector('#date').textContent=date;
              
              forecastData.append(temp);

            });
};

render();