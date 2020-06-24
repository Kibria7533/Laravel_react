import axios from 'axios';
const Getallnames=()=> async dispatch=>{
  
   
    try {
        const res= await axios.get('https://kb-rrl.herokuapp.com/api/get');
        dispatch({type:"GET_ALL_NAMES",payload:res.data});
    } catch (error) {
        
    }
    
}

export default Getallnames;