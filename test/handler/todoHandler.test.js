const jsonOperations=require('../../utils/fileOperations');
const {getNotesHandler,postNotesHandler}=require('../../handler/todoHandler');

describe('the handler function',()=>{
	it ('get handler function should call readJson', async() => {
		const mockReadJSON=jest.spyOn(jsonOperations,'readJSON');
		mockReadJSON.mockImplementation(()=>'{"status":"abc"}');
		const result = await getNotesHandler(null,{'response':()=>'{"status":"abc"}'});
		expect(mockReadJSON).toHaveBeenCalled();
		expect(result).toBe('{"status":"abc"}');
	});
    
	
});
