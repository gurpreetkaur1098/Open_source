import request from "supertest";
import app from "../app";

describe("Booking API", () => {
  it("should fail without token", async () => {
    const res = await request(app).post("/api/book").send({
      carId: "123",
      startDate: "2026-01-01",
      endDate: "2026-01-02",
    });

    expect(res.statusCode).toBe(401);
  });
});