import axios from 'axios';
import { url } from '../Url';
const Getallnames=()=> async dispatch=>{
  
   
    try {
        const res= await axios.get(`${url.URL}/get`);
        dispatch({type:"GET_ALL_NAMES",payload:res.data});
    } catch (error) {
        
    }
    
}

export default Getallnames;