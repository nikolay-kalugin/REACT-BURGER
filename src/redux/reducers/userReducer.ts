import { 
	USER_REGISTRATION_REQUEST,
	USER_REGISTRATION_SUCCESS,
	USER_REGISTRATION_FAILED,
	
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
	USER_AUTH_FAILED,
	
	SET_USER,
	SET_USER_NAME,
	SET_USER_EMAIL,
	SET_USER_PASSWORD,


} from '../actions/__types'

import { TAllActions } from '../../types/actions_types' 

const initialState = {

	// признак того, что запрос на Регистрацию в процессе 
	userRegistrationRequest:  false,
	// признак того, что запрос на Регистрацию завершен (пользователь зарегистрировался)
	userRegistrationSuccess: false,
  	// ошибка в результате обмена с API (при регистрации)
  	userRegistrationError: undefined, 


	// признак того, что запрос на Авторизацию в процессе 
	userAuthRequest: false,
	// признак того, что запрос на Авторизацию завершен
	userAuthSuccess: false,
	// ошибка в результате обмена с API (при авторизации)
	userAuthError: undefined,


	// Данные авторизованного пользователя (для Профиля)
	user: null,
	userName: '',
	userEmail: '',
	userPassword: '',

};


export const userReducer = ( state = initialState, action: TAllActions ) => {

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
				userAuthRequest: action.payload,
			}

		case USER_AUTH_SUCCESS: 
			return {
				...state,
				userAuthRequest: false,
				userAuthSuccess: true,
			}

		case USER_AUTH_FAILED: 
			return {
				...state,
				userAuthRequest: false,
				userAuthError: action.payload,
			}

		/**************************************/

		case SET_USER: 
			return {
				...state,
				user: action.payload,
			}

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


		// case SET_RESET_PASSWORD_ACCESS: 
		// 	return {
		// 		...state,
		// 		resetPasswordAccess: action.payload,
		// 	}

		/**************************************/


		// Экшен по дефолту
		default: 
			return state;

	}
	
};