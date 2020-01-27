const jsonOperations=require('../utils/fileOperations');

const uuidv4=require('uuid');
const getNotesHandler=async (request,h)=>{
	const notesData=await jsonOperations.readJSON();
	return h.response(notesData);
};





const postNotesHandler = async(request,h)=>{
	try{
		let prevNotes=await jsonOperations.readJSON();
		const note=request.payload;
        
		note.id=uuidv4();
		note.isActive=true;
		prevNotes.notes.push(note);
		
		jsonOperations.writeJSON(JSON.stringify(prevNotes));
            
		return h.response('New Notes added');
	}
	catch(err){
		return h.response(err.message).code(500);
	}
    
};

module.exports={getNotesHandler,postNotesHandler};