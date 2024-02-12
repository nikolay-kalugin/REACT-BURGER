// Рассчет данных заказа (ингредиенты, количество, стоимость и т.д.)

const getOrderResults = ( addedBun, addedIngredients ) => { 

	let orderIngredients = [];
	let ingredientsIDs = []

	let addedIngredientsPrice = 0;
	let addedBunPrice = 0;

	if ( addedIngredients.length > 0 || addedBun )
	{
		if ( addedIngredients.length > 0 ) 
		{
			addedIngredientsPrice = addedIngredients.reduce( 
				(accumulator, ingredient) => accumulator + ingredient.price, 0
			);

			addedIngredients.forEach( (addedIngredient) => {
				orderIngredients = [...orderIngredients, addedIngredient];
			});
			
		}

		if ( addedBun )
		{
			addedBunPrice = addedBun.price * 2;
			orderIngredients = [addedBun, ...orderIngredients, addedBun] 
		}
	}


	orderIngredients.map( (ingredient) => {
		return ingredientsIDs = [...ingredientsIDs, ingredient._id]
	});

	
	const constructorIngredientsCounts = ingredientsIDs.reduce((acc, el) => {
		acc[el] = (acc[el] || 0) + 1;
		return acc;
		}, {})


	return {
		orderIngredients,
		totalPrice: addedIngredientsPrice + addedBunPrice,
		data: {
			ingredients: ingredientsIDs
		},
		constructorIngredientsCounts
	}


}

export default getOrderResults;