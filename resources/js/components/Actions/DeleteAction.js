import axios from 'axios';
const DeleteAction=(id)=> async dispatch=>{
  
   
    try {
       
       const res= await axios.delete(`https://kb-rrl.herokuapp.com/${id}`); 
        dispatch({type:"DELETE",payload:id});
    } catch (error) {
                 
    }
    
}

export default DeleteAction;