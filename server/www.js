'use strict';

const { createServer: createServerHttp } = require('http');
const app = require('express')();
const next = require('next');

app.get('/health-check', (req, res) =>
	res.status(200).json({
		status: 'OK'
	})
);

const nextApp = next({ dev: true });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
	const port = process.env.PORT || '3002';
	const server = createServerHttp(app);

	server.listen(port);
	server.on('error', error => {
		throw error;
	});

	console.log(`Server HTTP is UP on port ${port}`);

	app.get('*', (req, res) => handle(req, res));
});
