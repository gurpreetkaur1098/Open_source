import request from "supertest";
import app from "../app";

describe("Auth API", () => {
  const testUser = {
    name: "Ravneet Kaur",
    email: "ravneet@test.com",
    password: "123456",
  };

  it("should register a new user", async () => {
    const res = await request(app).post("/api/register").send(testUser);

    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe(testUser.email);
  });

  it("should login user and return token", async () => {
    const res = await request(app).post("/api/login").send({
      email: testUser.email,
      password: testUser.password,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it("should fail login with wrong password", async () => {
    const res = await request(app).post("/api/login").send({
      email: testUser.email,
      password: "wrongpassword",
    });

    expect(res.statusCode).toBe(401);
  });
});