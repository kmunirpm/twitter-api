const router = require("express").Router();

module.exports = (db) => {
  router.get("/tweets", (request, response) => {
    db.query(
      `
      SELECT username FROM tweets
    `
    ).then(({ rows: tweets }) => {
      response.json(tweets);
    });
  });

  router.get("/tweet/create/:id/:name/:pwd", (request, response) => {
    const username = request.params.id;
    const name = request.params.name;
    const password = request.params.pwd;
    db.query(
      `
      INSERT INTO tweets (username, name, password) VALUES ($1::text, $2::text, $3::text) 
    `,
      [username, name, password]
    )
      .then(({ rows: tweets }) => {
        response.send(`New tweet ${name} added.`);
      })
      .catch((error) => response.json(error));
  });

  router.get("/tweets/:id/:pwd", (request, response) => {
    const username = request.params.id;
    const password = request.params.pwd;
    db.query(
      `
      SELECT name FROM tweets where username=$1::text and password=$2::text 
    `,
      [username, password]
    )
      .then(({ rows: tweets }) => {
        session = request.session;
        session.userid = request.params.id;
        if (tweets.length) response.send(tweets);
        else response.send("Invalid username or password");
      })
      .catch((error) => response.json(error));
  });

  return router;
};
