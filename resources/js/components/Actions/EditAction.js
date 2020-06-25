import axios from 'axios';
import { url } from '../Url';
const EditAction=(data)=> async dispatch=>{
   
    try {
       
       const res= await axios.put(`${url.URL}/get/update`,data); 
       
     dispatch({type:"EDIT",data:res.data});
    } catch (error) {
        console.log(error)
                 
    }
    
}

export default EditAction;