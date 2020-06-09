import chai, { expect } from "chai";
const chaiHttp = require("chai-http");
import app from "../server";

chai.use(chaiHttp);

describe("current Endpoint v1", () => {
  describe("current Endpoint", () => {
    it("succeeds - Status 200", function () {
      chai
        .request(app)
        .get("/v1/current")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("coord");
          expect(res.body).to.have.property("weather");
          expect(res.body.coord).to.be.an("object");
          expect(res.body.weather).to.be.an("array");
        });
    });
  });

  describe("current/:city Endpoint", () => {
    it("succeeds - city found - Status 200", function () {
      chai
        .request(app)
        .get("/v1/current/corrientes")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("coord");
          expect(res.body).to.have.property("weather");
          expect(res.body.coord).to.be.an("object");
          expect(res.body.weather).to.be.an("array");
        });
    });

    it("city not found - Status 404", function () {
      chai
        .request(app)
        .get("/v1/current/jujuy")
        .end(function (err, res) {
          expect(res).to.have.status(404);
        });
    });
  });
});
