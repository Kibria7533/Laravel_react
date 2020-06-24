import axios from 'axios';
const EditAction=(data)=> async dispatch=>{
   
    try {
       
       const res= await axios.put(`http://127.0.0.1:8000/api/get/update`,data); 
       
     dispatch({type:"EDIT",data:res.data});
    } catch (error) {
        console.log(error)
                 
    }
    
}

export default EditAction;