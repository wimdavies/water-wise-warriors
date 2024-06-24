CREATE TABLE IF NOT EXISTS comments (
    id serial PRIMARY KEY,
    content text NOT NULL,
    author text,
    eubwid text NOT NULL,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
);