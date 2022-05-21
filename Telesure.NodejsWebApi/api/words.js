const express = require('express')
const mssql = require('mssql')
const router = express.Router();

const config = {
    driver: process.env.SQL_DRIVER,
    server: process.env.SQL_SERVER,
    database: process.env.SQL_DATABASE,
    user: process.env.SQL_UID,
    password: process.env.SQL_PWD,
    options: {
        encrypt: true,
        trustServerCertificate: false,
        rowCollectionOnRequestCompletion: true
    },
};

router.get('/nouns/', () => {
    getWordsByPOS('n.')
});

router.get('/verbs/', () => {
    getWordsByPOS('v.')
});

router.get('/adjectives/', () => {
    getWordsByPOS('a.')
});

function getWordsByPOS (pow) {
    try {
        async (req, res) => {
            const pool = new mssql.ConnectionPool(config);
            var query = `SELECT * FROM dbo.entries WHERE wordtype LIKE ('%${pow}%');`;
            await pool.connect();
            const result = await pool.request().query(query);
            const words = result.recordset;

            res.json(words);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = router;