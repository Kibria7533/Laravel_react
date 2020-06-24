import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import {createStore, applyMiddleware,compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Getallnames from './Actions/Getallnames';
import {Provider} from 'react-redux';
import Rootreducer from './Reducers/Rootreducer';
import thunk from 'redux-thunk';
const store=createStore(Rootreducer,compose (applyMiddleware(thunk),composeWithDevTools()))
function App() {
    useEffect(()=>{
  store.dispatch(Getallnames());
    })
    return (
        <div className="container"> 
        <Navbar/>
            <div className="row justify-content-center">
             
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    
    , document.getElementById('root'));
}
