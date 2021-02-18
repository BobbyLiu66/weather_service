# weather service
a weather service supply by openweatherapi
### description
this back end project could get current / 5 day 3 hour forecast weather infomation based on the user ip.
### version 1
1. get current forcast
2. get 5 day 3 hour forcast

### data sample
current weather
Get: https://localhost:3002/weather?type=current
```$xslt
{  
   "coord":{  
      "lon":172.75,
      "lat":-43.65
   },
   "weather":[  
      {  
         "id":803,
         "main":"Clouds",
         "description":"broken clouds",
         "icon":"04n"
      }
   ],
   "base":"stations",
   "main":{  
      "temp":281.15,
      "pressure":1015,
      "humidity":70,
      "temp_min":281.15,
      "temp_max":281.15
   },
   "visibility":10000,
   "wind":{  
      "speed":4.1,
      "deg":240
   },
   "clouds":{  
      "all":80
   },
   "dt":1523430000,
   "sys":{  
      "type":1,
      "id":8278,
      "message":0.0074,
      "country":"NZ",
      "sunrise":1523386638,
      "sunset":1523426531
   },
   "id":7910036,
   "name":"Christchurch City",
   "cod":200
}
```
