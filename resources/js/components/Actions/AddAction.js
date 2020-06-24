import axios from 'axios';
const AddAction=(data)=> async dispatch=>{
    
  
    try {
       
       const res= await axios.post(`https://kb-rrl.herokuapp.com/api/get`,data); 
        dispatch({type:"ADD",data:data});
    } catch (error) {
                 
    }
    
}

export default AddAction;