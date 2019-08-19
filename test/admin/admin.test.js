import request from "supertest";
import app from "../../src/app";
import mongoose from "mongoose";

const db = process.env.DB_HOST;

describe("Test the admin method", () => {
  beforeAll(() => {
    mongoose.connect(db);
  });
  afterAll(done => {
    mongoose.disconnect(done);
  });
});

describe("Test the root path", () => {
  test("It should respond the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
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
    .post("/api/v1/authenticate/email/admin/login")
    .send({
      email: "ejehgodfrey@gmail.com",
      password: "magickiss"
    })
    .end((err, res) => {
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
  it("It should respond with JSON", async () => {
    const response = await request(app).get("/api/v1/admins");
    expect(response.statusCode).toBe(403);
  });

  // send the token - should respond with a 200
  it("It should require authorization", () => {
    return request(app)
      .get("/api/v1/admins")
      .set("Authorization", `Bearer ${token}`)
      .set("Cookie", cookie)
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
      });
  });

  it("It should return some properties", () => {
    return request(app)
      .get("/api/v1/admins/5d5a7fdc7b79ac0e78cfe3fe")
      .set("Authorization", `Bearer ${token}`)
      .set("Cookie", cookie)
      .then(response => {
        expect(response.body.data).toHaveProperty("id");
        expect(response.body.data).toHaveProperty("email");
        expect(response.body.data).toHaveProperty("password");
      });
  });

  it("it should update admin", () => {
    return request(app)
      .put("/api/v1/admins")
      .send({
        firstName: "Godfrey",
        lastName: "ejeh"
      })
      .set("Authorization", `Bearer ${token}`)
      .set("Cookie", cookie)
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});
