import { useEffect } from 'react';
import styles from './app.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getIngredientDetails } from '../../redux/selectors/selectors'

import AppHeader from '../app-header/app-header';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';

import { Routes, Route, useLocation } from 'react-router-dom';

import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../../pages/register/register';
import { LoginPage } from '../../pages/login/login';
import { ForgotPasswordPage } from '../../pages/forgot-password/forgot-password';
import { ResetPasswordPage } from '../../pages/reset-password/reset-password';
import { ProfilePage } from '../../pages/profile/profile';
import { OrdersPage } from '../../pages/orders/orders';
import { NotFound404 } from '../../pages/not-found-404/not-found-404';
import { IngredientsPage } from '../../pages/ingredients/ingredients';

import { getIngredientsStart } from '../../services/getIngredientsStart';

function App() {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( getIngredientsStart() );

  }, [dispatch] );

  const ingredientDetails = useSelector(getIngredientDetails)

  const location = useLocation();
  const background = location.state && location.state.background;

  return (

    <div id={`app`} className={`${styles.App} custom-scroll`}>

      <AppHeader />

      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/ingredients/:ingredientID" element={<IngredientsPage />} />
        <Route path="*" element={<NotFound404 />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/orders" element={<OrdersPage />} />
      </Routes>

      {
        background && (
          <Routes>
            <Route
              path="/ingredients/:ingredientID"
              element={
                <Modal title="Детали ингредиента" >
                  <IngredientDetails ingredientDetails={ingredientDetails} />
                </Modal>
              }
            />
          </Routes>
        )
      }
   
    </div>
    
  );
}

export default App;
