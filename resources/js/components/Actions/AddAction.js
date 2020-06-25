import axios from 'axios';
import { url } from '../Url';

const AddAction=(data)=> async dispatch=>{
    
  
    try {
       
       const res= await axios.post(`${url.URL}/get/`,data); 
      console.log(res.data);
        dispatch({type:"ADD",data:res.data});
    } catch (error) {
                 
    }
    
}

export default AddAction;