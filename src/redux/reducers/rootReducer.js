import { combineReducers } from 'redux';
import { ingredientsReducer }  from '../reducers/ingredientsReducer';
import { ingredientDetailsReducer }  from './ingredientDetailsReducer';
import { constructorReducer }  from '../reducers/constructorReducer';
import { orderDetailsReducer }  from '../reducers/orderDetailsReducer';
import { userReducer }  from '../reducers/userReducer';

 const rootReducer = combineReducers({
	ingredientsReducer, 
	ingredientDetailsReducer,
	constructorReducer,
	orderDetailsReducer,
	userReducer,
  });

export default rootReducer;