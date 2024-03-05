import { 
	USER_REGISTRATION_REQUEST,
	USER_REGISTRATION_SUCCESS,
	USER_REGISTRATION_FAILED,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
	USER_AUTH_FAILED,
	SET_USER_NAME,
	SET_USER_EMAIL,
	SET_USER_PASSWORD,
	SET_USER_LOGOUT,
} from '../actions/__types'


const initialState = {
	// признак того, что пользователь отправляет данные на сервер
	userRegistrationRequest:  false,
	// признак, что пользователь зарегистрировался
	userRegistrationSuccess: false,
  	// ошибка в результате обмена с API
  	userRegistrationError: undefined, 

	// признак, что пользователь залогинился (авторизован)
	userIsLogged: false,

	// приложение ожидает код в письме для сброса пароля
  	userPasswordResetting: false,

	// Данные авторизованного пользователя (для Профиля)
	userName: '',
	userEmail: '',
	userPassword: '',
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
				userRegistrationRequest: false,
				userRegistrationSuccess: action.payload.success,

			}

		case USER_REGISTRATION_FAILED: 
			return {
				...state,
				userRegistrationRequest: false,
				userRegistrationError: action.payload.message,

			}
		
		/**************************************/

		case USER_AUTH_REQUEST: 
			return {
				...state,
				userAuthRequest: true,
			}

		case USER_AUTH_SUCCESS: 
			return {
				...state,
				userAuthRequest: false,
				userAuthSuccess: action.payload.success,
				userIsLogged: true,
			}

		case USER_AUTH_FAILED: 
			return {
				...state,
				userAuthRequest: false,
				userAuthError: action.payload.message,

			}

		/**************************************/

		case SET_USER_NAME: 
			return {
				...state,
				userName: action.payload,
			}

		case SET_USER_EMAIL: 
			return {
				...state,
				userEmail: action.payload,
			}

		case SET_USER_PASSWORD: 
			return {
				...state,
				userPassword: action.payload,
			}

		/**************************************/

		case SET_USER_LOGOUT: 
		return {
			...state,
			userIsLogged: false,
		}



		// Экшен по дефолту
		default: 
			return state;

	}
	
};