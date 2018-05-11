# weather service
a weather service supply by openweatherapi
### description
this back end project could get current / 5 day 3 hour forecast weather infomation based on the user ip.
### version 1
1. get current forcast
2. get 5 day 3 hour forcast

### data sample
current weather
Get: http://localhost:3002/weather?type=current
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
5 day / 3 hour forcast
```$xslt
{
    "cod":"200",
    "message":0.0074,
    "cnt":37,
    "list":[{
        "dt":1523437200,
        "main":{
            "temp":282.31,
            "temp_min":282.31,
            "temp_max":283.814,
            "pressure":1020.25,
            "sea_level":1028.15,
            "grnd_level":1020.25,
            "humidity":100,
            "temp_kf":-1.51
        },
        "weather":[
            {
                "id":500,
                "main":"Rain",
                "description":"light rain",
                "icon":"10n"
            }
        ],
        "clouds":{
            "all":80
        },
        "wind":{
            "speed":8.62,
            "deg":196.503
        },
        "rain":{
            "3h":0.0024999999999995
        },
        "sys":{
            "pod":"n"
        },
        "dt_txt":"2018-04-11 09:00:00"
    },
             ...
           ],
    "city":{
        "id":7910036,
        "name":"Christchurch City",
        "coord":{
            "lat":-43.6458,
            "lon":172.7459
        },
        "country":"NZ"
    }
}
```
