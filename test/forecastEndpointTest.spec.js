import chai, { expect } from "chai";
const chaiHttp = require("chai-http");
import app from "../server";

chai.use(chaiHttp);

describe("forecast Endpoint v1", () => {
  describe("forecast Endpoint", () => {
    it("succeeds - Status 200", function () {
      chai
        .request(app)
        .get("/v1/forecast")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("lat");
          expect(res.body).to.have.property("lon");
          expect(res.body.lat).to.be.a("number");
          expect(res.body.lon).to.be.a("number");
        });
    });
  });

  describe("forecast/:city Endpoint", () => {
    it("succeeds - city found - Status 200", function () {
      chai
        .request(app)
        .get("/v1/forecast/corrientes")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("lat");
          expect(res.body).to.have.property("lon");
          expect(res.body.lat).to.be.a("number");
          expect(res.body.lon).to.be.a("number");
        });
    });

    it("city not found - Status 404", function () {
      chai
        .request(app)
        .get("/v1/forecast/jujuy")
        .end(function (err, res) {
          expect(res).to.have.status(404);
        });
    });
  });
});
