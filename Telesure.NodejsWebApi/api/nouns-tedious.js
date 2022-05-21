const express = require('express');
const router = express.Router();
const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
    authentication: {
        options: {
            userName: "adminroot", 
            password: "P@$$w0rd"
        },
        type: "default"
    },
    server: "telesure-server-01.database.windows.net",
    options: {
        database: "telesure-sql-01",
        encrypt: true,
        trustServerCertificate: false,
        rowCollectionOnRequestCompletion: true
    }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
    if (err) {
        console.error(err.message);
    } else {
        queryDatabaseNouns();
    }
});

connection.connect();

function queryDatabaseNouns() {

    console.log("Reading rows from the Table....");

    // Read all rows from table
    //const request = new Request(
    //    `SELECT TOP 10 *
    //    FROM dbo.entries;`,
    //    (err, rowCount, rows) => {
    //        if (err) {
    //            console.error(err.message);
    //        } else {
    //            console.log(`${rowCount} row(s) returned`);
    //        }
    //    }
    //);

    const query = "SELECT TOP 10 * FROM dbo.entries;"
    var data = [];
    router.get('/', (req, res) => {
        request = new Request(query, (err, rowCount, rows) => {
            console.log("Rows: ", rows);
            res.send(rows);
        });
        request.on('row', function (row) {
            data.push({
                last_name: row[0].value,
                first_name: row[1].value
            })
        })
        connection.execSql(request);
        res.send(data);
    });

    //connection.execSql(request);
    //request.on("row", columns => {
    //    columns.forEach(column => {
    //        console.log("%s\t%s", column.metadata.colName, column.value);
    //    });
    //});

    //router.get('/', (req, res) => {
    //    res.send("Successful!");
    //});
}

module.exports = router;