import 'reflect-metadata'
import './shared/container'

import express from 'express';
import router from './router';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});