import { ReactNode } from 'react';


export type TIngredient = {
    _id: string | number;
    id: string | number;
    name: string;
    type: string;
    price: number;
    image: string;
}

export type TIngredientProps = {
	ingredient: {
		_id: string | number;
		id: string | number;
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

export type TIngredientDetails = {
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
	orderIngredients: any[]; 
	totalPrice: number; 
	data: { ingredients: any[]; }; 
	constructorIngredientsCounts: any; 
}