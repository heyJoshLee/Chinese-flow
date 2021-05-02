import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import wordRoutes from './routes/words.js';

dotenv.config();
const app = express();

app.use(cors());
// @ts-ignore
app.use(bodyParser.json({ limit: '30mb', extended :true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended :true }))

app.use('/auth', authRoutes);
app.use('/words', wordRoutes);


const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
  }))
  .catch((error) => console.log(error.message));

  mongoose.set('useFindAndModify', false);