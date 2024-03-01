import {
	USER_REGISTRATION_REQUEST,
	USER_REGISTRATION_SUCCESS,
	USER_REGISTRATION_FAILED,
} from './types'

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