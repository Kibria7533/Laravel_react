import axios from 'axios';
const DeleteAction=(id)=> async dispatch=>{
  
   
    try {
       
       const res= await axios.delete(`http://127.0.0.1:8000/api/get/${id}`); 
        dispatch({type:"DELETE",payload:id});
    } catch (error) {
                 
    }
    
}

export default DeleteAction;