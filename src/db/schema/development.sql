INSERT INTO users (username, name, password)
VALUES
  ('user-alex', 'Alex Morgan', 'abcd'),
  ('user-bob', 'Bob Jones', 'bcde'),
  ('user-chris', 'Chris James', 'cdef');


INSERT INTO tweets (tweet, user_id)
VALUES
    ('This is user-alex and this is my 1st tweet.', 1),
    ('This is user-alex and this is my 2nd tweet.', 1),
    ('This is user-alex and this is my 3rd tweet.', 1),
    ('This is user-bob and this is my only tweet.', 2),
    ('This is user-chris and this is my 1st tweet.', 3),
    ('This is user-chris and this is my last tweet.', 3);