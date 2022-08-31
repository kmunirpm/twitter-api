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

INSERT INTO wallets (balance, user_id)
VALUES 
    (1500, 1), 
    (2000, 2), 
    (500, 3);

INSERT INTO shares (name, value, user_id)
VALUES 
    ('Scotia Bank', 100, 1), 
    ('Tesla', 200, Null), 
    ('Honda', 50, 1), 
    ('Amazon', 150, 2), 
    ('Apple', 250, 2), 
    ('eBay', 100, 2);

INSERT INTO endpoints (name)
VALUES 
    ('Nasdaq'), 
    ('DOW'), 
    ('TSX');

INSERT INTO user_endpoints (endpoint_id, user_id)
VALUES 
    (1, 1), 
    (1, 2), 
    (2, 3),
    (3, 3);



