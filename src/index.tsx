import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './components/аpp/app';

import { configureStore } from './redux/store';

import {  Provider, 
          TypedUseSelectorHook,
          useDispatch as dispatchHook,
          useSelector as selectorHook } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator, Dispatch } from 'redux';
import { TAllActions } from './types/actions_types'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore();

// Типизация store
export type RootState = ReturnType<typeof store.getState>; 

// Типизация всех экшенов приложения
type TApplicationActions = TAllActions;

// Типизация thunk'ов (т.е. асинхронных экшенов) 
export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, TApplicationActions>
>; 

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = Dispatch<TApplicationActions>; 

// export type AppDispatch<TReturnType = void> = (
//   action: TApplicationActions | AppThunk<TReturnType>
// ) => TReturnType;



// Хук не даст отправить экшен, который ему не знаком
// export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();

export const useDispatch: () => AppDispatch = dispatchHook;

// Типизация useSelector
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook; 

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter> 
  </React.StrictMode>
);


