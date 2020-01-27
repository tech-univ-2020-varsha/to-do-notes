const hapi = require('@hapi/hapi');
const routes = require('./routes/to-do-routes');

const server = hapi.server({
	host: 'localhost',
	port: 8080
});

server.route(routes);

console.log('server started');

module.exports = {server};