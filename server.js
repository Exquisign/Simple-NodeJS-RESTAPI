const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const port = 3000;

mongoose.set('strictQuery', true);

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

app.use(express.json());

const subscriberRouter = require('./routes/subscribers')
app.use('/subscribers', subscriberRouter)



app.listen(port, () => console.log(`Server Started on port ${port}`));

