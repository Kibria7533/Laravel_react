const initialState = {
    names: []
}
const Getpost = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_ALL_NAMES':

            return {
                ...state,
                names: action.payload

            }
        case 'DELETE':
            {


                return {
                    ...state,
                    names: state.names.filter((item) => item.id !== action.payload)

                }
            }
        case 'ADD':
            return {
                ...state,
                names: [...state.names, action.data]

            }

        case "EDIT":
            {
               

                const  names=state.names.map(item => {
                    if (item.id === action.data.id) return action.data
                    else   return item
                      
                })
                return{
                    names:names
                }
              
            }
          

    default:
            return state;
    } 
                   

                     











    



}

export default Getpost;