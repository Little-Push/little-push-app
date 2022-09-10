import Express from 'express';
import { Auth } from './auth.js';
import * as dotenv from 'dotenv';
import { resolve } from 'path';
import session from 'express-session';
import { Database } from './database.js';

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

const database = new Database()
app.use(session(sessionSettings))
app.use(Express.json())

new Auth(app);

app.post('/api/habit', (req, res) => {
    database.insert('habit', req.body)
    return res.json({ data: req.body });
})

app.use(Express.static(resolve(process.cwd(), '../app/build/')));

app.get('/*', (req, res) => {
    res.sendFile(resolve(process.cwd(), '../app/build/index.html'));
});

app.listen(8080);
