import { ReactNode } from 'react';


export type TIngredient = {
    _id: number;
    id: number;
    name: string;
    type: string;
    price: number;
    image: string;
	image_large: string;
	calories: string | number;
	proteins: string | number;
	fat: string | number;
	carbohydrates: string | number;	
}

export type TIngredientProps = {
	ingredient: {
		_id: number;
		id: number;
		name: string;
		type: string;
		price: number;
		image: string;
	}
}

export type TIngredientCategoryProps = {
	id: string;
	title: string;
	ingredients: TIngredient[]

}

export type TIngredientDetailsProps = {
	ingredientDetails: {
		image_large: string;
		name: string;
		calories: string | number;
		proteins: string | number;
		fat: string | number;
		carbohydrates: string | number;
	}
}


export type TModalProps = {
	title?: string; 
	children?: ReactNode;
	onClose?: () => void;
}

export type TOrderResults = { 
	orderIngredients: TIngredient[]; 
	totalPrice: number; 
	data: { 
		ingredients: TIngredient[]; 
	}; 
	constructorIngredientsCounts: number; 
	order?: string;
}


export type TComponent = {
	component: JSX.Element
}

export type TUser = { 
	name: string; 
	email: string; 
	password?: string; 
}

export type TServerResponse<T> = {
	success: boolean;
} & T;

export type TRefreshTokenResponse = TServerResponse<{
	refreshToken: string;
	accessToken: string;
	message: string;
	user: {
		name: string;
		email: string;
	}
}>


export type TInitialStateConstructorReducer = {
	addedIngredients: TIngredient[];
	bun?: TIngredient | null;
}  


export type TInitialStateIngredientDetailsReducer = {
	ingredientDetails?: TIngredient | null;
}  


export type TInitialStateIngredientsReducer = {
	ingredients: TIngredient[];
	isLoading: boolean;
	error: string | null;
}  

export type TInitialStateOrderDetailsReducer = {
	orderDetails: TIngredient | null; 
	isLoading: boolean;
	error: string | null;
}  

export type TInitialStateUserReducer = {
	userRegistrationRequest:  boolean;
	userRegistrationSuccess: boolean;
  	userRegistrationError: string | null; 

	userAuthRequest: boolean;
	userAuthSuccess: boolean;
	userAuthError: string | null;

	user: {
		userName: string;
		userEmail: string;
	} | null;

	userName: string;
	userEmail: string;
	userPassword: string;
} 