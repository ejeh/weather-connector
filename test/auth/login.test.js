import { emailSignup, emailLogin } from "../../src/api/auth/controller";
import request from "supertest";
import app from "../../src/api/admin/routes";

describe("GET / ", () => {
  test("It should respond with an array of students", () => {
    request(app)
      .get("/")
      .then(response => {
        console.log(response.body);
        expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("email signup", () => {
  it("should be a function", () => {
    expect(typeof emailSignup).toBe("function");
  });
});

describe("email Login", () => {
  it("should be a function", () => {
    expect(typeof emailLogin).toBe("function");
  });
});
