import express from 'express';
import mongoose from 'mongoose';
import {registerValidation} from "./validations/auth.js";
import checkAuth from "./utils/checkAuth.js";
import * as UserController from './controllers/userController.js';

mongoose
    .connect('mongodb://localhost:27017/blogdb')
    .then(() => console.log('DB connected is OK'))
    .catch((err) => console.log('DB connected is error', err));

const app = express();

app.use(express.json());

app.post('/auth/login', UserController.login);

app.post('/auth/register', registerValidation, UserController.register);

app.get('/auth/me', checkAuth, UserController.getMe);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server started OK');
});