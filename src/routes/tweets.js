const router = require("express").Router();

module.exports = (db) => {
  router.get("/tweets", (request, response) => {
    session = request.session;
    const user_id = session.userid;

    db.query(
      `
      SELECT * FROM tweets where user_id=$1::integer
    `,
      [user_id]
    ).then(({ rows: tweets }) => {
      response.json(tweets);
    });
  });

  router.get("/tweet/create/:tweet", (request, response) => {
    session = request.session;
    const user_id = session.userid;
    const tweet = request.params.tweet;
    db.query(
      `
      INSERT INTO tweets (user_id, tweet) VALUES ($1::integer, $2::text) 
    `,
      [user_id, tweet]
    )
      .then(({ rows: tweets }) => {
        response.send(`New tweet ${tweet} added.`);
      })
      .catch((error) => response.json(error));
  });

  router.get("/tweet/update/:id/:tweet", (request, response) => {
    session = request.session;
    const user_id = session.userid;
    const id = request.params.id;
    const tweet = request.params.tweet;
    db.query(
      `
      UPDATE tweets set tweet=$3::text where user_id=$1::integer and id=$2::integer
    `,
      [user_id, id, tweet]
    )
      .then(({ rows: tweets }) => {
        response.send(`Tweet ${id} updated.`);
      })
      .catch((error) => response.json(error));
  });

  router.get("/tweet/delete/:id", (request, response) => {
    session = request.session;
    const user_id = session.userid;
    const id = request.params.id;
    db.query(
      `
      DELETE FROM tweets where user_id=$1::integer and id=$2::integer 
    `,
      [user_id, id]
    )
      .then(({ rows: tweets }) => {
        response.send(`Tweet ${id} deleted.`);
      })
      .catch((error) => response.json(error));
  });

  return router;
};
