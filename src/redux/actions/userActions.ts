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

	
} from './__types'


import {
	IUserRegistrationRequest,
	IUserRegistrationSuccess,
	IUserRegistrationFailed,

	ISetUserAuthRequest,
	ISetUserAuthSuccess,
	ISetUserAuthFailed,

	ISetUser,
	ISetUserName,
	ISetUserEmail,
	ISetUserPassword,
} from '../../types/actions_types'

import { TUser } from '../../types/types'

// Для работы с USER


export const userRegistrationRequest = () : IUserRegistrationRequest => {
	return { type: USER_REGISTRATION_REQUEST }
} 

export const userRegistrationSuccess = (bool: boolean) : IUserRegistrationSuccess => {
	return { type: USER_REGISTRATION_SUCCESS, payload: bool }
} 

export const userRegistrationFailed = (err: string) : IUserRegistrationFailed => {
	return { type: USER_REGISTRATION_FAILED, payload: err }
} 

/********************************************/

export const setUserAuthRequest = (bool: boolean) : ISetUserAuthRequest=> {
	return { type: USER_AUTH_REQUEST, payload: bool }
} 

export const setUserAuthSuccess = () : ISetUserAuthSuccess => {
	return { type: USER_AUTH_SUCCESS }
} 

export const setUserAuthFailed = (err: string) : ISetUserAuthFailed => {
	return { type: USER_AUTH_FAILED, payload: err }
} 

/********************************************/

export const setUser = (obj: TUser) : ISetUser => {
	return { type: SET_USER, payload: obj }
} 

export const setUserName = (name: string) => {
	return { type: SET_USER_NAME, payload: name }
} 

export const setUserEmail = (email: string) => {
	return { type: SET_USER_EMAIL, payload: email }
} 

export const setUserPassword = (password: string) => {
	return { type: SET_USER_PASSWORD, payload: password }
} 






