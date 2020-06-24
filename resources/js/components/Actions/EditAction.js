import axios from 'axios';
const EditAction=(data)=> async dispatch=>{
   
    try {
       
       const res= await axios.put(`https://kb-rrl.herokuapp.com/api/get/update`,data); 
       
     dispatch({type:"EDIT",data:res.data});
    } catch (error) {
        console.log(error)
                 
    }
    
}

export default EditAction;