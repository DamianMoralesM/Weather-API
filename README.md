# Weather-API

# API Definition: 

### v1/current
> Response:
```

{
   "coord":{
      "lon":-77.49,
      "lat":39.04
   },
   "weather":[
      {
         "id":800,
         "main":"Clear",
         "description":"clear sky",
         "icon":"01n"
      }
   ],
   "base":"stations",
   "main":{
      "temp":24.32,
      "feels_like":26.81,
      "temp_min":22.78,
      "temp_max":26,
      "pressure":1014,
      "humidity":83
   },
   "visibility":16093,
   "wind":{
      "speed":2.6,
      "deg":190
   },
   "clouds":{
      "all":1
   },
   "dt":1591768819,
   "sys":{
      "type":1,
      "id":4624,
      "country":"US",
      "sunrise":1591782232,
      "sunset":1591835723
   },
   "timezone":-14400,
   "id":4744870,
   "name":"Ashburn",
   "cod":200
}

```

 ### v1/current/:city
 > Response: Same as v1/current/

### v1/forecast
> Response:
```
{
   "lat":39.04,
   "lon":-77.49,
   "timezone":"America/New_York",
   "timezone_offset":-14400,
   "current":{
      "dt":1591769381,
      "sunrise":1591782232,
      "sunset":1591835723,
      "temp":24.13,
      "feels_like":26.52,
      "pressure":1014,
      "humidity":83,
      "dew_point":21.06,
      "uvi":11.02,
      "clouds":1,
      "visibility":16093,
      "wind_speed":2.6,
      "wind_deg":190,
      "weather":[
         {
            "id":800,
            "main":"Clear",
            "description":"clear sky",
            "icon":"01n"
         }
      ]
   },
   "daily":[
      {
         "dt":1591808400,
         "sunrise":1591782232,
         "sunset":1591835723,
         "temp":{
            "day":31.42,
            "min":24.07,
            "max":31.51,
            "night":25.62,
            "eve":27.49,
            "morn":24.07
         },
         "feels_like":{
            "day":31.9,
            "night":24.64,
            "eve":28.73,
            "morn":25.77
         },
         "pressure":1012,
         "humidity":59,
         "dew_point":22.44,
         "wind_speed":6.36,
         "wind_deg":191,
         "weather":[
            {
               "id":500,
               "main":"Rain",
               "description":"light rain",
               "icon":"10d"
            }
         ],
         "clouds":42,
         "rain":2.57,
         "uvi":11.02
      }
   ]
}
```
### v1/forecast/:city
 > Response: Same as v1/forecast/
 
### v1/location
> Response : 
```
{
   "status":"success",
   "country":"United States",
   "countryCode":"US",
   "region":"VA",
   "regionName":"Virginia",
   "city":"Ashburn",
   "zip":"20149",
   "lat":39.0438,
   "lon":-77.4874,
   "timezone":"America/New_York",
   "isp":"Amazon.com, Inc.",
   "org":"AWS EC2 (us-east-1)",
   "as":"AS14618 Amazon.com, Inc.",
   "query":"35.175.139.193"
}
```

# Technical Considerations 
1. Created ForecastUtility with two methods: 
- getForecast
- getCurrentWeather

> both could recieve as opctional parameter the city to look for


2. Created WeatherController to get both the forecast and the weather

# Future Improvements: 
**v1/current** and **v1/forecast** could recieve the location from a client:

- v1/current?lon=43&lat=32
- v1/forecast?lon=43&lat=32


# Getting Started

1. Clone the repo

2. npm install

3. npm start 


# Testing

Launch unit tests: npm run test

- Unit Testing for Utilities : **Done**
- Rest API Testing: **Done**

# Demo
- Note: Current weather and forecast will be returned for server location
- Link: https://weather-back-api.herokuapp.com/v1
