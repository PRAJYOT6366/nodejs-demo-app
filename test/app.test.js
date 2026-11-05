const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("../server");

test("GET / returns welcome message", async () => {
  const server = app.listen(0);

  try {
    const response = await fetch(
      `http://127.0.0.1:${server.address().port}/`
    );

    assert.equal(response.status, 200);
    assert.match(await response.text(), /CI\/CD pipeline/);
  } finally {
    server.close();
  }
});

test("GET /health returns healthy status", async () => {
  const server = app.listen(0);

  try {
    const response = await fetch(
      `http://127.0.0.1:${server.address().port}/health`
    );

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: "ok" });
  } finally {
    server.close();
  }
});
