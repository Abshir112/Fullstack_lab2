import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Serve static files
app.use(express.static('dist'));

// json parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

export default app
