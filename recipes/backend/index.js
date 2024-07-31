import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv'

dotenv.config();

const ATLAS_URI = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5555;
const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(234).send('Welcome to root')
})
// Comeback and add routes

mongoose.connect(ATLAS_URI)
    .then(() => console.log('MONGODB CONNECTED'))
    .catch(err => console.log(err))

app.listen(PORT, () => console.log( `server connected on PORT: ${PORT}`))