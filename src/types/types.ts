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
	children: ReactNode;
}

export type TOrderResults = { 
	orderIngredients: TIngredient[]; 
	totalPrice: number; 
	data: { 
		ingredients: TIngredient[]; 
	}; 
	constructorIngredientsCounts: number; 
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