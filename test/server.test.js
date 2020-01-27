const { server} = require('../server');


let init = async () => {

	await server.initialize();
	return server;
};

// let start = async () => {

// 	await server.start();
// 	console.log(`Server running at: ${server.info.uri}`);
// 	return server;
// };


describe('the server function', () => {
	let server;
	beforeEach(async () => {
		server = await init();
	});
	afterEach(async () => {
		await server.stop();
	});

	it('the server function should return correct response', async () => {
		let ob = {
			method: 'GET',
			url: '/notes'
		};
		const response = await server.inject(ob);
		console.log(response.payload);
		expect(response.payload).toBe('Hello hapi');
	});
});