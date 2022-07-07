//! THIS FILE CONTAINS ONLY SAMPLE TEST CODE
const supertest = require("supertest");
const should = require("should");
const server = supertest.agent("http://localhost:5000/api/v1");
const faker = require("faker");
const connectToDb = require("../config/db");

// generate fake email
const email = faker.internet.email();

describe("GET /api/v1/test", () => {
  it("should return 200 OK", (done) => {
    server
      .get("/test")
      .expect(200)
      .end((err, res) => {
        res.body.success.should.be.true();
        res.body.message.should.equal("Test route working 😀");
        done();
      });
  });
});

describe("GET /api/v1/user/get-realtime-notifications/:id", () => {
  it("should return 200 OK", (done) => {
    server
      .get("/user/get-realtime-notifications/1")
      .expect(200)
      .end((err, res) => {
        res.body.success.should.be.true();
        res.body.data.should.equal(
          "Get Realtime Notifications Route Working 🚀"
        );
        done();
      });
  });
}); // end of getRealtimeNotifications

describe("GET /api/v1/user/get-user-details/:id", () => {
  it("should return 200 OK", (done) => {
    server
      .get("/user/get-user-details/1")
      .expect(200)
      .end((err, res) => {
        res.body.success.should.be.true();
        res.body.data.should.equal("Get User Details Route Working 🚀");
        done();
      });
  }); // end of getUserDetails
}); // end of getUserDetails

// user routes tests
describe("GET /api/v1/user/get-realtime-notifications/:id", () => {
  it("should return 200 OK", (done) => {
    server
      .get("/user/get-realtime-notifications/1")
      .expect(200)
      .end((err, res) => {
        res.body.success.should.be.true();
        res.body.data.should.equal(
          "Get Realtime Notifications Route Working 🚀"
        );
        done();
      });
  }); // end of getRealtimeNotifications
}); // end of getRealtimeNotifications

describe("GET /api/v1/user/get-user-details/:id", () => {
  it("should return 200 OK", (done) => {
    server
      .get("/user/get-user-details/1")
      .expect(200)
      .end((err, res) => {
        res.body.success.should.be.true();
        res.body.data.should.equal("Get User Details Route Working 🚀");
        done();
      });
  }); // end of getUserDetails
}); // end of getUserDetails

// AUTH ROUTES TESTS
describe("POST /api/v1/auth/register", () => {
  it("should return 200 OK", (done) => {
    server
      .post("/auth/register")
      .send({
        data: {
          first_name: "John",
          last_name: "Doe",
          email: email,
        },
      })
      .expect(200)
      .end((err, res) => {
        res.body.success.should.be.true();
        res.body.data.email.should.equal(email);
        done();
      });
  }); // end of register
});

// GOOGLE AUTH ROUTES TESTS
describe("POST /api/v1/auth/google", () => {
  it("should return 200 OK", (done) => {
    server
      .post("/auth/google")
      .send({
        data: {
          email: email,
          password: "123456",
        },
      })
      .expect(200)
      .end((err, res) => {
        res.body.success.should.be.true();
        res.body.data.email.should.equal(email);
        done();
      });
  }); // end of googleLogin
}); // end of googleLogin

// FACEBOOK AUTH ROUTES TESTS
describe("POST /api/v1/auth/facebook", () => {
  it("should return 200 OK", (done) => {
    server
      .post("/auth/facebook")
      .send({
        data: {
          email: email,
          password: "123456",
        },
      })
      .expect(200)
      .end((err, res) => {
        res.body.success.should.be.true();
        res.body.data.email.should.equal(email);
        done();
      });
  }); // end of facebookLogin
}); // end of facebookLogin

// FORGOT PASSWORD ROUTES TESTS
describe("POST /api/v1/auth/forgot-password", () => {
  it("should return 200 OK", (done) => {
    server
      .post("/auth/forgot-password")
      .send({
        data: {
          email: email,
          password: "123456",
        },
      })
      .expect(200)
      .end((err, res) => {
        res.body.success.should.be.true();
        res.body.data.email.should.equal(email);
        done();
      });
  }); // end of forgotPassword
}); // end of forgotPassword

// TODO: add tests for the following routes
// course routes tests
// order routes tests
