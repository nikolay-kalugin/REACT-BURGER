// Для ИНГРЕДИЕНТОВ
export const getIsLoading = store => store.ingredientsReducer.isLoading ;
export const getIngredients = store => store.ingredientsReducer.ingredients ;

// Для ДАННЫХ ИНГРЕДИЕНТА
export const getIngredientDetails = store => store.ingredientDetailsReducer.ingredientDetails ;

// Для ДАННЫХ ЗАКАЗА
export const getOrderDetails = store => store.orderDetailsReducer.orderDetails ;
export const getOrderIsLoading = store => store.orderDetailsReducer.isLoading ;

// Для КОНСТРУКТОРА
export const getAddedBun = store => store.constructorReducer.bun ;
export const getAddedIngredients = store => store.constructorReducer.addedIngredients ;

// Для работы с USER
export const getUserRegistrationRequest = store => store.userReducer.userRegistrationRequest ;
export const getUserRegistrationSuccess = store => store.userReducer.userRegistrationSuccess ;

export const getUserName = store => store.userReducer.userName ;
export const getUserEmail = store => store.userReducer.userEmail ;
export const getUserPassword = store => store.userReducer.userPassword ;

export const getUserIsLogged = store => store.userReducer.userIsLogged ;




