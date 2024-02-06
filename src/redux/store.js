import { combineReducers } from 'redux';
import { mainReducer }  from './reducers/mainReducer'
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	mainReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;



// import { composeWithDevTools } from 'redux-devtools-extension';
// import { thunk } from 'redux-thunk';


// export const configureStore = ( initialState ) => {
// 	const store = createStore(
// 		rootReducer,
// 		initialState,
// 		composeWithDevTools( applyMiddleware(thunk) )
// 	);
// 	return store;
// }; 

