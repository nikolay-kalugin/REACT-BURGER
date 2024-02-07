// Для ИНГРЕДИЕНТОВ
export const getIsLoading = store => store.ingredientsReducer.isLoading ;
export const getIngredients = store => store.ingredientsReducer.ingredients ;

// Для ДАННЫХ ИНГРЕДИЕНТА
export const getIngredientDetails = store => store.ingredientDetailsReducer.ingredientDetails ;

// Для ДАННЫХ ЗАКАЗА
export const getOrderDetails = store => store.orderDetailsReducer.orderDetails ;

// Для КОНСТРУКТОРА
export const getAddedIngredients = store => store.constructorReducer.addedIngredients ;