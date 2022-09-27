const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    password:'polo01',
    host:'localhost',
    port:5432,
    database:'lista'
})

module.exports = pool;