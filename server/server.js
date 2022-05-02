const bodyParser = require('body-parser');

const express = require('express');
const router = require('./routes');
const app = express();
const port = 8081;

// Middleware
app.use(bodyParser.json());

app.use((_req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);
	res.setHeader('Access-Control-Allow-Headers', '*');
	next();
});

app.use('/', router);
app.get('/alive', (_req, res) => {
	res.send(true);
});

app.listen({ port }, () => {
	console.log(`Course server running at http://localhost:${port}`);
});

module.exports = app;
