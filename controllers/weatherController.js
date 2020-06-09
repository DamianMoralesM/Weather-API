import ForecastUtility from '../utilities/forecastUtility.js';

const WeatherController = {
  getCurrentWeather: (req, res, next) => {
    const city = req.params.city || "";
    ForecastUtility.getCurrentWeather(city)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        if (error.response) {
          res.status(error.response.data.cod).send(error.response.data);
        } else {
          res.sendStatus(500);
        }
      });
  },
  getForecast: (req, res, next) => {
    const city = req.params.city || "";
    ForecastUtility.getForecast(city)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        if (error.response) {
          res.status(error.response.data.cod).send(error.response.data);
        } else {
          res.sendStatus(500);
        }
      });
  },
};

export default WeatherController
