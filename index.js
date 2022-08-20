import express from 'express';
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';

mongoose
    .connect('mongodb://localhost:27017/blogdb')
    .then(() => console.log('DB connected is OK'))
    .catch((err) => console.log('DB connected is error', err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Start project!');
});

app.post('/auth/login', (req, res) => {
    console.log(req.body);

    const token = jwt.sign({
        email: req.body.email,
        fullName: 'Vladimir Glinskikh',
    }, 'secret123',);

    res.json({
        success: true,
        token,
    });
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server started OK');
});