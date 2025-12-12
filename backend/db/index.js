// backend/db/index.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

// Optional: basic connection test (runs once)
pool.connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch(err => console.error("PostgreSQL connection error:", err));

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool
};
