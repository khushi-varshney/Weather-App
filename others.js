  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Noida', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct1.innerHTML = response.cloud_pct
            temp1.innerHTML = response.temp
            min_temp1.innerHTML = response.min_temp
            max_temp1.innerHTML = response.max_temp
            humidity1.innerHTML = response.humidity
            wind_speed1.innerHTML = response.wind_speed
            wind_degrees1.innerHTML = response.wind_degrees
            sunrise1.innerHTML = response.sunrise
            sunset1.innerHTML = response.sunset
            feels_like1.innerHTML = response.feels_like

        })
        .catch(err => console.error(err));

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct2.innerHTML = response.cloud_pct
            temp2.innerHTML = response.temp
            min_temp2.innerHTML = response.min_temp
            max_temp2.innerHTML = response.max_temp
            humidity2.innerHTML = response.humidity
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees2.innerHTML = response.wind_degrees
            sunrise2.innerHTML = response.sunrise
            sunset2.innerHTML = response.sunset
            feels_like2.innerHTML = response.feels_like

        })
        .catch(err => console.error(err));

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Banglore', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct3.innerHTML = response.cloud_pct
            temp3.innerHTML = response.temp
            min_temp3.innerHTML = response.min_temp
            max_temp3.innerHTML = response.max_temp
            humidity3.innerHTML = response.humidity
            wind_speed3.innerHTML = response.wind_speed
            wind_degrees3.innerHTML = response.wind_degrees
            sunrise3.innerHTML = response.sunrise
            sunset3.innerHTML = response.sunset
            feels_like3.innerHTML = response.feels_like

        })
        .catch(err => console.error(err));

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seoul', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct4.innerHTML = response.cloud_pct
            temp4.innerHTML = response.temp
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            humidity4.innerHTML = response.humidity
            wind_speed4.innerHTML = response.wind_speed
            wind_degrees4.innerHTML = response.wind_degrees
            sunrise4.innerHTML = response.sunrise
            sunset4.innerHTML = response.sunset
            feels_like4.innerHTML = response.feels_like

        })
        .catch(err => console.error(err));
   