import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

import router from './routes/router';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use('/', router);
mongoose.connect(process.env.DB_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.listen(process.env.SERVER_PORT, () => console.log('Server Running'));
