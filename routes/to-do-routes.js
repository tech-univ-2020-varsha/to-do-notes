const {getNotesHandler,postNotesHandler}=require('../handler/todoHandler');

const routes=[{path:'/notes',method:'GET',handler:getNotesHandler},
	{path:'/notes',method:'POST',handler:postNotesHandler}];
    
module.exports=routes;