const express = require('express')
const mssql = require('mssql')

const router = express.Router();

let pow = "";

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
        let query = `SELECT TOP 20 * FROM dbo.entries WHERE wordtype LIKE ('%${pow}%');`;
        await pool.connect();
        const result = await pool.request().query(query);
        const employees = result.recordset;

        res.json(employees);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;