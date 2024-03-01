import { 
	USER_REGISTRATION_REQUEST,
	USER_REGISTRATION_SUCCESS,
	USER_REGISTRATION_FAILED,
} from '../actions/types'


const initialState = {
	// признак того, что операция обмена с API в процессе
	userRegistrationRequest:  false,
	// признак, что пользователь зарегистрировался
	userRegistrationSuccess: false,
  	// ошибка в результате обмена с API
  	error: undefined, 

	// признак, что пользователь залогинился
	userIsLogged: false,
	// приложение ожидает код в письме для сброса пароля
  	userPasswordResetting: false,

	userName: '',
	userEmail: '',
};


export const userReducer = ( state = initialState, action ) => {

	switch( action.type ) 
	{

		// Экшены для работы с USER
		case USER_REGISTRATION_REQUEST: 
			return {
				...state,
				userRegistrationRequest: true,
			}

		case USER_REGISTRATION_SUCCESS: 
			return {
				...state,
				userRegistrationSuccess: action.payload.success,
				userName: action.payload.user.name,
				userEmail: action.payload.user.email,
				userRegistrationRequest: false,
			}

		case USER_REGISTRATION_FAILED: 
			return {
				...state,
				error: action.payload.message,
				userRegistrationRequest: false,

			}
		



		// Экшен по дефолту
		default: 
			return state;

	}
	
};