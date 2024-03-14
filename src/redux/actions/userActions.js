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
	SET_USER_IS_LOGGED,
	SET_USER_LOGOUT
} from './__types'

// Для работы с USER


export const userRegistrationRequest = () => {
	return { type: USER_REGISTRATION_REQUEST }
} 

export const userRegistrationSuccess = (bool) => {
	return { type: USER_REGISTRATION_SUCCESS, payload: bool }
} 

export const userRegistrationFailed = (err) => {
	return { type: USER_REGISTRATION_FAILED, payload: err }
} 

/********************************************/

export const userAuthRequest = (bool) => {
	return { type: USER_AUTH_REQUEST, payload: bool }
} 

export const userAuthSuccess = (bool) => {
	return { type: USER_AUTH_SUCCESS, payload: bool }
} 

export const userAuthFailed = (err) => {
	return { type: USER_AUTH_FAILED, payload: err }
} 

/********************************************/

export const setUser = (obj) => {
	return { type: SET_USER_NAME, payload: obj }
} 

export const setUserName = (name) => {
	return { type: SET_USER_NAME, payload: name }
} 

export const setUserEmail = (email) => {
	return { type: SET_USER_EMAIL, payload: email }
} 

export const setUserPassword = (password) => {
	return { type: SET_USER_PASSWORD, payload: password }
} 

/********************************************/

export const setUserIsLogged = (bool) => {
	return { type: SET_USER_IS_LOGGED, payload: bool }
} 

export const setUserLogout = () => {
	return { type: SET_USER_LOGOUT }
} 


