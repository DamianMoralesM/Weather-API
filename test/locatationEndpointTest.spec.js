import chai, { expect } from "chai";
const chaiHttp = require("chai-http");
import app from "../server";

chai.use(chaiHttp);

describe("location Endpoint v1", () => {
  describe("location Endpoint", () => {
    it("succeeds - Status 200", function () {
      chai
        .request(app)
        .get("/v1/location")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body.status).to.equal("success");
          expect(res.body).to.have.property("country");
        });
    });
  });
  
});
