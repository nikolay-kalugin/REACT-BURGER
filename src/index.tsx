import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './components/аpp/app';
import { configureStore } from './redux/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// const initialState = {
//   buns: [],
//   ingredients: [],
//   isLoading: false,
//   error: undefined,

//   addedIngredients: [],

//   ingredientDetails: null,
//   orderDetails: null,


// };


const store = configureStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  </React.StrictMode>
);


