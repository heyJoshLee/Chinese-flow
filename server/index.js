import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import wordRoutes from './routes/words.js';
import resourceRoutes from './routes/resources.js';
import adminRoutes from './routes/admin.js';

dotenv.config();
const app = express();

app.use(cors());
// @ts-ignore
app.use(bodyParser.json({ limit: '30mb', extended :true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended :true }))

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/words', wordRoutes);
app.use('/resources', resourceRoutes);
app.use('/admin', adminRoutes);


const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
  }))
  .catch((error) => console.log(error.message));

  mongoose.set('useFindAndModify', false);