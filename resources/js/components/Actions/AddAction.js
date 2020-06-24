import axios from 'axios';
const AddAction=(data)=> async dispatch=>{
    
  
    try {
       
       const res= await axios.post(`http://127.0.0.1:8000/api/get/`,data); 
        dispatch({type:"ADD",data:data});
    } catch (error) {
                 
    }
    
}

export default AddAction;