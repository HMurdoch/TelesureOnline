const express = require('express');
const dotenv = require('dotenv');
const apiIndex = require('./routes/index');
const apiNouns = require('./routes/nouns');
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Teaming up with NodeJS and SQL Server');
});

app.use('/api/nouns', require('./routes/nouns'));

app.listen(process.env.PORT, () => {
    console.log(`Server started running on ${process.env.PORT} for ${process.env.NODE_ENV}`);
});