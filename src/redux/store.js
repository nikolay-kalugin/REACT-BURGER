import { createStore } from 'redux';
import { reducer }  from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';


export const configureStore = ( initialState ) => {
	const store = createStore(
		reducer,
		initialState,
		composeWithDevTools()
	);

	return store;
}; 

