const express = require('express')
const mssql = require('mssql')

const router = express.Router();

var pow = "";

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
const pool = new mssql.ConnectionPool(config);

router.get('/nouns/:prefix', async (req, res) => {
    try {
        pow = "n.";
        let query = `SELECT DISTINCT TOP 20 word FROM dbo.entries WHERE wordtype LIKE ('%${pow}%') AND word LIKE('${req.params.prefix}%');`;
        console.log(query);
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/nouns/:word', async (req, res) => {
    try {
        pow = "n.";
        let query = `INSERT INTO dbo.entries (word, wordtype, definition) VALUES ('${req.params.word}', '${pow}', 'Custom word');`;
        console.log(query);
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/verbs/:prefix', async (req, res) => {
    try {
        pow = "v.";
        exlcude = "adv."
        let query = `SELECT DISTINCT TOP 20 word FROM dbo.entries WHERE wordtype LIKE ('%${pow}%') AND word LIKE('${req.params.prefix}%') AND wordtype != 'adv.';`;
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/adjectives/:prefix', async (req, res) => {
    try {
        pow = "a.";
        let query = `SELECT DISTINCT TOP 20 word FROM dbo.entries WHERE wordtype LIKE ('%${pow}%') AND word LIKE('${req.params.prefix}%');`;
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/adverbs/:prefix', async (req, res) => {
    try {
        pow = "adv.";
        let query = `SELECT DISTINCT TOP 20 word FROM dbo.entries WHERE wordtype LIKE ('%${pow}%') AND word LIKE('${req.params.prefix}%');`;
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/pronouns/:prefix', async (req, res) => {
    try {
        pow = "pron.";
        let query = `SELECT DISTINCT TOP 20 word FROM dbo.entries WHERE wordtype LIKE ('%${pow}%') AND word LIKE('${req.params.prefix}%');`;
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/prepositions/:prefix', async (req, res) => {
    try {
        pow = "prep.";
        let query = `SELECT DISTINCT TOP 20 word FROM dbo.entries WHERE wordtype LIKE ('%${pow}%') AND word LIKE('${req.params.prefix}%');`;
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/conjunctions/:prefix', async (req, res) => {
    try {
        pow = "conj.";
        let query = `SELECT DISTINCT TOP 20 word FROM dbo.entries WHERE wordtype LIKE ('%${pow}%') AND word LIKE('${req.params.prefix}%');`;
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;