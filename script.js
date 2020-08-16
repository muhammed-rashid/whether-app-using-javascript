window.addEventListener('load',()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position=>{
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid= choose your api key`)
            .then((res)=>{
                return(res.json())
            }).then((data=>{
               
                var whetherCondition = data.weather[0].description;
                var location = data.name;
                var temp = Math.floor((data.main.temp -273)*9/5+32);
                var humidity = data.main.humidity;
                var pressure =data.main.pressure;
                var windSpeed = data.wind.speed;
                var code = data.weather[0].icon;
                 data = {
                    whetherCondition,
                    location,
                    temp,
                    humidity,
                    pressure,
                    windSpeed,
                    code

                }
                setitem(data);
               
            }));

           setitem =(data)=>{
               
               document.getElementById('whether-condition').innerHTML = data.whetherCondition;
               document.getElementById('location').innerHTML = data.location;
               document.getElementById('temp').innerHTML = data.temp;
               document.getElementById('hum').innerHTML = data.humidity;
               document.getElementById('wind').innerHTML = data.windSpeed;
               document.getElementById('pressure').innerHTML = data.pressure;
               var imgsrc = document.getElementById('img');
               imgsrc.src = `http://openweathermap.org/img/wn/${data.code}@2x.png`;
               far_temp = data.temp;
               sel_temp = Math.floor((far_temp-32)*5/9) ;
               change_val(far_temp,sel_temp);
 }
    });
        } 
            });
var far = document.getElementById('temp');
var ico =document.getElementById('model')

change_val = (far_temp,sel_temp)=>{

    far.addEventListener('click',()=>{
        if(ico.innerText === 'F'){
          ico.innerText = 'C';
          far.innerText = sel_temp;
        }else{
            far.innerText = far_temp;
            ico.innerText = 'F';
        }
 })

}