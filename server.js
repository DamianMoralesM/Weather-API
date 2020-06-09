import express from 'express';
import WeatherController from './controllers/weatherController';
import configs from './configs/globalConfigs';
import cors from 'cors';
import axios from 'axios';
import { reporters } from 'mocha';

const {apiVersion, apiIP} = configs;
const PORT =  process.env.PORT || 8080;
const app = express();

app.use(cors());
app.options('*', cors());

app.get(`/${apiVersion}/current`, WeatherController.getCurrentWeather);

app.get(`/${apiVersion}/current/:city`, WeatherController.getCurrentWeather);

app.get(`/${apiVersion}/forecast`, WeatherController.getForecast);

app.get(`/${apiVersion}/forecast/:city`, WeatherController.getForecast);

app.get(`/${apiVersion}/location`, (req, res, next) => {
  axios.get(`${apiIP}`)
  .then(response =>{
    res.send(response.data);
  })
  .catch(error=>{
    if (error.response) {
      res.status(error.response.data.cod).send(error.response.data);
    } else {
      res.sendStatus(500);
    }
  })
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

export default app
