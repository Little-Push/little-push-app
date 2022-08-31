import Express from 'express';
import { Auth } from './auth.js';
import * as dotenv from 'dotenv';
import { resolve } from 'path';
import session from 'express-session';

const path = resolve(process.cwd(), '../.env');
dotenv.config({
    path
});

const app = new Express();

const sessionSettings = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {}
}

if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1)
    sessionSettings.cookie.secure = true
}

app.use(session(sessionSettings))

new Auth(app);

app.use(Express.static(resolve(process.cwd(), '../app/build/')));

app.get('/*', (req, res) => {
    res.sendFile(resolve(process.cwd(), '../app/build/index.html'));
});

app.listen(8080);
