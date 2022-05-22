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

router.get('/nouns/', async (req, res) => {
    try {
        pow = "n.";
        let query = `SELECT TOP 10 * FROM dbo.entries WHERE wordtype LIKE ('%${pow}%');`;
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/verbs/', async (req, res) => {
    try {
        pow = "v.";
        exlcude = "adv."
        let query = `SELECT TOP 10 * FROM dbo.entries WHERE wordtype LIKE ('%${pow}%') AND wordtype != 'adv.';`;
        console.log(query);
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/adjectives/', async (req, res) => {
    try {
        pow = "a.";
        let query = `SELECT TOP 10 * FROM dbo.entries WHERE wordtype LIKE ('%${pow}%');`;
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/adverbs/', async (req, res) => {
    try {
        pow = "adv.";
        let query = `SELECT TOP 10 * FROM dbo.entries WHERE wordtype LIKE ('%${pow}%');`;
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/pronouns/', async (req, res) => {
    try {
        pow = "pron.";
        let query = `SELECT TOP 10 * FROM dbo.entries WHERE wordtype LIKE ('%${pow}%');`;
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/prepositions/', async (req, res) => {
    try {
        pow = "prep.";
        let query = `SELECT TOP 10 * FROM dbo.entries WHERE wordtype LIKE ('%${pow}%');`;
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/conjunctions/', async (req, res) => {
    try {
        pow = "conj.";
        let query = `SELECT TOP 10 * FROM dbo.entries WHERE wordtype LIKE ('%${pow}%');`;
        await pool.connect();
        const result = await pool.request().query(query);
        const words = result.recordset;

        res.status(200).json(words);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;