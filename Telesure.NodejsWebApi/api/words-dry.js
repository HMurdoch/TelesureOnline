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
    console.log('Running nouns lookup.')
    getWordsByPOS('n.')
});

router.get('/verbs/', () => {
    console.log('Running verbs lookup.')
    getWordsByPOS('v.')
});

router.get('/adjectives/', () => {
    console.log('Running adjectives lookup.')
    getWordsByPOS('a.')
});

function getWordsByPOS(pos) {
    try {
        async (req, res) => {
            const pool = new mssql.ConnectionPool(config);
            var query = `SELECT * FROM dbo.entries WHERE wordtype LIKE ('%${pos}%');`;
            console.log(query);
            await pool.connect();
            const result = await pool.request().query(query);
            const words = result.recordset;

            res.status(200).json(words);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = router;