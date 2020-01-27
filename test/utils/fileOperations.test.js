const {readJSON,writeJSON}=require('../../utils/fileOperations');
const fs=require('promise-fs');
describe('the file operations',()=>{
	it('readJSON should call the readFile function',async()=>{
		const spy=jest.spyOn(fs,'readFile');
		spy.mockImplementation(()=>'{"status":"abc"}');
		const result = await readJSON();
		expect(spy).toHaveBeenCalled();
		expect(result.status).toBe('abc');
	});
	it('writeJSON should call the writeFile function',async()=>{
		const spy=jest.spyOn(fs,'writeFile');
		spy.mockImplementation(()=>'written');
		await writeJSON('abc');
		expect(spy).toHaveBeenCalledWith('./resources/notes.json','abc');
	});

});