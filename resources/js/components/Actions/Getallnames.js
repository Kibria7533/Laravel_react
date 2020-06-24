import axios from 'axios';
const Getallnames=()=> async dispatch=>{
  
   
    try {
        const res= await axios.get('http://127.0.0.1:8000/api/get');
        dispatch({type:"GET_ALL_NAMES",payload:res.data});
    } catch (error) {
        
    }
    
}

export default Getallnames;