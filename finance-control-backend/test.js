const pool = require('./src/db');

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Conexão com o PostgreSQL foi estabelecida com sucesso:', res.rows);
    pool.end()
});