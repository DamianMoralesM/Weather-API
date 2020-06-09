import axios from "axios";
import configs from "../configs/globalConfigs"

const {apiForecastHost,apiKey, apiIP} = configs;


const ForecastUtility = {
  getForecast: async (city) => {
    let lat = "";
    let lon = "";
    if (city) {
      // get cordinates based on city
      const response = await axios.get(`${apiForecastHost}weather?q=${city}&units=metric&appid=${apiKey}`);
      lat = response.data.coord.lat;
      lon = response.data.coord.lon;
      
    } else {
      // get cordinates based on current ip
      const response = await axios.get(`${apiIP}`);
      lat = response.data.lat;
      lon = response.data.lon;
    }

    return axios
      .get(
        `${apiForecastHost}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${apiKey}`
      )
      .then((response) => {
        //console.log(response.data);
        return response;
      })
      .catch((error) => {
        //console.log(error);
        throw error;
      });
  },

  getCurrentWeather: async (city) => {
    if (!city) {
      const response = await axios.get(`${apiIP}`);
      city = response.data.city;
    }

    return axios
      .get(`${apiForecastHost}weather?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => {
        //console.log(response.data);
        return response;
      })
      .catch((error) => {
        //console.log(error);
        throw error;
      });
  },
};

export default ForecastUtility;
