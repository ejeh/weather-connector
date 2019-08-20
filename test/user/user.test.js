import request from "supertest";
import app from "../../src/app";
import mongoose from "mongoose";

const db = process.env.DB_HOST;

jest.setTimeout(30000);

describe("Test the user method", () => {
  beforeAll(() => {
    mongoose.connect(db);
  });
  afterAll(done => {
    mongoose.disconnect(done);
  });
});

describe("Test the root path", () => {
  it("It should respond the GET method", async done => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    done();
  });
});
/*
      declare the token variable in a scope accessible
      by the entire test suite
    */
let token;
let cookie;
beforeAll(done => {
  request(app)
    .post("/api/v1/authenticate/email/user/login")
    .send({
      email: "ejehgodfrey@gmail.com",
      password: "magickiss"
    })
    .end((err, res) => {
      console.log(res.body);
      if (err) {
        console.log(err);
      }
      cookie = res.headers["set-cookie"][0]
        .split(",")
        .map(item => item.split(";")[0])
        .join(";");
      token = res.body.data.accessToken; // save the token!
      done();
    });
});

describe("GET /admins", () => {
  // token not being sent - should respond with a 401
  test("It should respond with JSON", async done => {
    return request(app)
      .get("/api/v1/users")
      .then(response => {
        expect(response.statusCode).toBe(403);
        done();
      });
  });
  //   token not being sent - should respond with a 401
  test("It should require authorization", done => {
    return request(app)
      .get("/api/v1/users")
      .set("Authorization", `Bearer ${token}`)
      .set("Cookie", cookie)
      .then(response => {
        console.log(response.body);
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
        done();
      });
  });

  test("It should return some properties", done => {
    return request(app)
      .get("/api/v1/user/5d5ae33cc385940596e173a0")
      .set("Authorization", `Bearer ${token}`)
      .set("Cookie", cookie)
      .then(response => {
        expect(response.body.data).toHaveProperty("id");
        expect(response.body.data).toHaveProperty("email");
        expect(response.body.data).toHaveProperty("password");
        done();
      });
  });
  test("it should update admin", done => {
    return request(app)
      .put("/api/v1/user")
      .send({
        firstName: "Godfrey",
        lastName: "ejeh"
      })
      .set("Authorization", `Bearer ${token}`)
      .set("Cookie", cookie)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
