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

  router.get("/user/login/:id/:pwd", (request, response) => {
    const username = request.params.id;
    const password = request.params.pwd;
    db.query(
      `
      SELECT id, name FROM users where username=$1::text and password=$2::text 
    `,
      [username, password]
    )
      .then(({ rows: users }) => {
        session = request.session;
        if (users.length > 0) {
          session.userid = users[0].id;
          response.send(users);
        } else {
          session.userid = 0;
          response.send("Invalid username or password");
        }
      })
      .catch((error) => response.json(error));
  });

  return router;
};
