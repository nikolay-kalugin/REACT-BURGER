import { combineReducers } from 'redux';
import { ingredientsReducer }  from './ingredientsReducer';
import { ingredientDetailsReducer }  from './ingredientDetailsReducer';
import { constructorReducer }  from './constructorReducer';
import { orderDetailsReducer }  from './orderDetailsReducer';
import { userReducer }  from './userReducer';

 const rootReducer = combineReducers({
	ingredientsReducer, 
	ingredientDetailsReducer,
	constructorReducer,
	orderDetailsReducer,
	userReducer,
  });

export default rootReducer;