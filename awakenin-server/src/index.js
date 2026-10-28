import dotenv from 'dotenv';
import express from 'express';
dotenv.config({
    path: './.env',
});
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
