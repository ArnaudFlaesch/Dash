const express = require('express');
const cors = require('cors');
const corsProxy = require('cors-anywhere');
const path = require('path');
const { Pool } = require('pg');
const winston = require('winston');
const app = express();

const whitelist = ['http://localhost:8090'];

const corsOptions = {
    origin: function(origin, callback) {
        if (!origin) {
            return callback(null, true);
        }

        if (whitelist.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const loginData = (process.env.DATABASE_URL) ? {
    connectionString: process.env.DATABASE_URL,
    ssl: true
} : {
    database: 'dash',
    host: 'localhost',
    password: 'postgres',
    port: 5432,
    user: 'postgres'
};

app.get("/db", (request, response) => {
    try {
        const pool = new Pool(loginData);
        pool.query('SELECT * FROM widgets', (error, result) => {
            response.status(200).json(result.rows);
            pool.end()
        });

    } catch (err) {
        response.status(400).send(err);
    }
});

app.post('/db/addWidget', (request, response) => {
    try {
        const pool = new Pool(loginData);
        const sql = `INSERT INTO public.widgets(type) VALUES (${request.body.type}) RETURNING *`;
        pool.query(sql, (error, result) => {
            response.status(200).json(result.rows[0]);
            pool.end()
        });
    } catch (err) {
        response.status(400).send(err);
    }
});

app.post('/db/newWidget', (request, response) => {
    try {
        const pool = new Pool(loginData);
        const sql = `INSERT INTO public.widgets(type, data) VALUES (${request.body.type}, to_json('${JSON.stringify(request.body.data)}'::json))`;
        pool.query(sql, (error, result) => {
            response.status(200).json(result);
            pool.end()
        });
    } catch (err) {
        response.status(400).send(err);
    }
});

app.post('/db/updateWidget', (request, response) => {
    try {
        const pool = new Pool(loginData);
        const sql = `UPDATE public.widgets SET data=to_json('${JSON.stringify(request.body.data)}'::json) WHERE id = ${request.body.id}`;
        pool.query(sql, (error, result) => {
            response.status(200).json(result);
            pool.end()
        });
    } catch (err) {
        response.status(400).send(err);
    }
});

app.post('/db/deleteWidget', (request, response) => {
    try {
        const pool = new Pool(loginData);
        const sql = `DELETE FROM public.widgets WHERE id = ${request.body.id}`;
        pool.query(sql, (error, result) => {
            response.status(200).json(result);
            pool.end()
        });
    } catch (err) {
        response.status(400).send(err);
    }
});

app.listen(process.env.PORT || 9000);


/**********
 * CORS ANYWHERE
 */

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.REACT_APP_CORS_PORT || 8090;

corsProxy.createServer({
    originWhitelist: [], // Allow all origins
    removeHeaders: ['cookie', 'cookie2'],
    requireHeader: ['origin', 'x-requested-with']
}).listen(port, host, () => {
    logger.info('Running CORS Anywhere on ' + host + ':' + port);
});

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.json(),
        winston.format.colorize({ all: true })
    ),
    level: 'debug',
    transports: [
        new winston.transports.Console()
    ]
});