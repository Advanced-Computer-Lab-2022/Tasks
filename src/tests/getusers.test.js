const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../App");

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect('mongodb+srv://Hadwa:hadwa1996@cluster0.hpstsct.mongodb.net/?retryWrites=true&w=majority');
  });

 /* Closing database connection after each test. */
 afterEach(async  () => {
  await mongoose.connection.close();

});   
// test get all users
describe("GET users/:id", () => {
    test("Get user by Id", (done) => {
      request(app)
        .get("/users/63815f0fbed67df68d2ae197")
        .expect(200)
        .expect((res) => {
          res.body.name = "hadwa.pasha";
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });
  });

// test create a new user
describe("POST /signup", () => {
    test("It should create a new user", (done) => {
      request(app)
        .post("/signup")
        .send({
          email: "user@test.com",
          password: "123456",
          name: "Test User",
        })
        .expect(200)
        .expect((res) => {
          res.body.name = "Test User";
          res.body.email = "user@test.com"
        }
        )
        .end((err, res) => {
          if (err) return done(err);
          return done();
        }
        );
    });
  });
          

