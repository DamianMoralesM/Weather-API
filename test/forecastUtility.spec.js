import { expect } from "chai";
import ForecastUtility from "../utilities/forecastUtility";

describe("ForecastUtility suite", () => {
  describe("getForecast function", () => {
    it("should retrive a good response", (done) => {
      ForecastUtility.getForecast()
        .then((res) => {
          expect(res.data).to.be.an("object");
          expect(res.data).to.have.property("lat");
          expect(res.data).to.have.property("lon");
          expect(res.data.lat).to.be.a("number");
          expect(res.data.lon).to.be.a("number");
          done();
        })
        .catch(done);
    });

    it("should retrive a good response for a given city", (done) => {
      const targetCity = "Buenos Aires";
      ForecastUtility.getForecast(targetCity)
        .then((res) => {
          expect(res.data).to.be.an("object");
          expect(res.data).to.have.property("lat");
          expect(res.data).to.have.property("lon");
          expect(res.data.lat).to.be.a("number");
          expect(res.data.lon).to.be.a("number");
          done();
        })
        .catch(done);
    });
  });

  describe("getCurrentWeather function", () => {
    it("should retrive a good response", (done) => {
      ForecastUtility.getCurrentWeather()
        .then((res) => {
          expect(res.data).to.be.an("object");
          expect(res.data).to.have.property("coord");
          expect(res.data).to.have.property("weather");
          expect(res.data.coord).to.be.an("object");
          expect(res.data.weather).to.be.an("array");
          done();
        })
        .catch(done);
    });

    it("should retrive a good response for a given city", (done) => {
      const targetCity = "Buenos Aires";
      ForecastUtility.getCurrentWeather(targetCity)
        .then((res) => {
          expect(res.data).to.be.an("object");
          expect(res.data).to.have.property("coord");
          expect(res.data).to.have.property("weather");
          expect(res.data.coord).to.be.an("object");
          expect(res.data.weather).to.be.an("array");
          done();
        })
        .catch(done);
    });
  });
});
