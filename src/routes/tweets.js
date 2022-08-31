const router = require("express").Router();

module.exports = (db) => {
  router.get("/tweets", (request, response) => {
    db.query(
      `
      SELECT * FROM tweets
    `
    ).then(({ rows: tweets }) => {
      response.json(tweets);
    });
  });

  return router;
};
