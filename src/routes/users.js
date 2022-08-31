const router = require("express").Router();

module.exports = (db) => {
  router.get("/users", (request, response) => {
    db.query(
      `
      SELECT username, name FROM users
    `
    ).then(({ rows: users }) => {
      response.json(users);
    });
  });

  router.get("/user/register/:id/:name/:pwd", (request, response) => {
    const username = request.params.id;
    const name = request.params.name;
    const password = request.params.pwd;
    db.query(
      `
      INSERT INTO users (username, name, password) VALUES ($1::text, $2::text, $3::text) 
    `,
      [username, name, password]
    )
      .then(({ rows: users }) => {
        response.send(`New user ${name} added.`);
      })
      .catch((error) => response.json(error));
  });

  router.get("/user/:id/:pwd", (request, response) => {
    const username = request.params.id;
    const password = request.params.pwd;
    db.query(
      `
      SELECT name FROM users where username=$1::text and password=$2::text 
    `,
      [username, password]
    )
      .then(({ rows: users }) => {
        session = request.session;
        session.userid = request.params.id;
        if (users.length) response.send(users);
        else response.send("Invalid username or password");
      })
      .catch((error) => response.json(error));
  });

  return router;
};
