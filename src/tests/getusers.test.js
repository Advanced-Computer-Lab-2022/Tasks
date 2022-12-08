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
/* Test for getting  user by id. */
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


/* Test for creating a new user. */

          

