import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers'
import './index.css';
import App from './components/App';

import  { Provider } from 'react-redux';

// function logger(obj, next,action) => obj = { dispatch , getState }
const logger = function({dispatch , getState}){
  return function(next){
    return function(action){
      // can write the middleware here
      console.log("INSIDE THE MIDDLEWARE FUNCTION , type =",action.type)
      next(action);
    }
  }
}

const store = createStore(rootReducer,applyMiddleware(thunk));

// export const StoreContext = createContext();

// console.log('storecontext',StoreContext)

// class Provider extends React.Component{
//   render(){
//     const { store } = this.props;
//     return <StoreContext.Provider value={store} >
//       {this.props.children}
//     </StoreContext.Provider>
//   }
// }

ReactDOM.render(
  <Provider store={store} >
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

