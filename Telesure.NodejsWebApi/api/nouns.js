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
const pool = new mssql.ConnectionPool(config);

router.get('/', async (req, res) => {
    try {
        await pool.connect();
        const result = await pool.request().query(`SELECT TOP 10 * FROM dbo.entries`);
        const employees = result.recordset;

        res.json(employees);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;