import axios from 'axios';
import { url } from '../Url';
const DeleteAction=(id)=> async dispatch=>{
  
   
    try {
       
       const res= await axios.delete(`${url.URL}/get/${id}`); 
        dispatch({type:"DELETE",payload:id});
    } catch (error) {
                 
    }
    
}

export default DeleteAction;