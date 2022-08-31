const request = require("supertest");
const generateApplication = require("../../application");

describe("Users", () => {
  let app;

  beforeAll(() => {
    app = generateApplication("test");
  });

  afterEach(async () => {
    await request(app).post("/api/debug/reset");
  });

  afterAll(async () => {
    await app.close();
  });

  test("GET /api/users", async () => {
    await request(app)
      .get("/api/users")
      .expect(200, [
        {
          username: "user-alex",
          name: "Alex Morgan",
        },
        {
          username: "user-bob",
          name: "Bob Jones",
        },
        {
          username: "user-chris",
          name: "Chris James",
        },
      ]);
  });
});
