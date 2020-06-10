# Weather-API

# API Definition: 

v1/current

v1/current/:city

v1/forecast

v1/forecast/:city

v1/location


# Technical Considerations 
Created ForecastUtility with two methods: 
getForecast
getCurrentWeather

both could recieve as opctional parameter the city to look for


Created WeatherController to get both the forecast and the weather

# Future Improvementes: 
v1/current and v1/forecast could recieve the location from a client:

v1/current?lon=43&lat=32
v1/forecast?lon=43&lat=32


# Getting Started

1. Clone the repo

2. npm install

3. npm start 


# Testing

Launch unit tests: npm run test

Unit Testing for Utilities : Done
Rest API Testing: Done

# Demo
Link:
Note: Current weather and forecast will be returned for server location
Link: https://weather-back-api.herokuapp.com/
