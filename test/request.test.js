import express from "express";
import request from "supertest";

const app = express();

// test("something", async () => {
//   const response = await request(app).get("/");
//   expect(response.text).toBe("something");
// });

test("Request", async () => {
  app.get("/", (req, res) => {
    res.send("something");
  });
  const response = await request(app).get("/").expect();
  expect(response.text).toBe("something");
});
