import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import accountReducer from './Account/AccountReducer';
//import './store';
//import reducer
//import { applyMiddleware, createStore } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './reducer/RootReducer';
import { myLogger } from './myLogger';
import Post from'./post';
import { postReducer } from './reducer/PostReducer';
import thunk from 'redux-thunk';
import accountReducer from './Account/AccountSlice';
import { customerReducer } from './Customer/CustomerReducer';



const root = ReactDOM.createRoot(document.getElementById('root'));

// 1111 const mystore = createStore(rootReducer)

// it include required middlewares, it also configures the redux devtools
const mystore = configureStore({
  reducer:{
    account:accountReducer,
    customer:customerReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
})
console.log('Store is created=>')

root.render(
  <Provider store = {mystore}>
    <App/>

    {/* <Post/> */}
  </Provider>
);
// root.render(
//   <Provider store={mystore}>
 
 
//   <React.StrictMode>
//     <App1 />
//   </React.StrictMode>
 
//   </Provider>
// );  
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Redux Core / Legacy Redux
// Redux ToolKit (RTK)

// CombineReducer: put all your reducers into one object and use that

// Redux Middleware: Redux provides a point between dispatching an action and the moment it reaches the reducer

// Slice : Module(s)