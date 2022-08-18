const express = require('express');
require('dotenv').config();
const route = require('./router/createUserRoute');
const conn = require('./db');
const cors = require('cors');
const app = express();
app.use(cors());
conn();

app.use(express.urlencoded());
app.use(express.json());


app.use('/', route);

app.listen(process.env.PORT || 5000, () => console.log("Server Başarıyla Kuruldu"));