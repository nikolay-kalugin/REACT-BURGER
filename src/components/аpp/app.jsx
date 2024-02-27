import styles from './app.module.css';
import AppHeader from '../app-header/app-header';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../../pages/register/register';
import { LoginPage } from '../../pages/login/login';
import { ForgotPasswordPage } from '../../pages/forgot-password/forgot-password';
import { ResetPasswordPage } from '../../pages/reset-password/reset-password';
import { ProfilePage } from '../../pages/profile/profile';
import { OrdersPage } from '../../pages/orders/orders';
import { NotFound404 } from '../../pages/404/not-found-404';

import { getIngredientsStart } from '../../services/getIngredientsStart';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../modal/modal';
import { getIngredientDetails } from '../../redux/selectors/selectors';
import IngredientDetails from '../ingredient-details/ingredient-details';

function App() {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( getIngredientsStart() );
  }, [dispatch] );

  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    // Возвращаемся к предыдущему пути при закрытии модалки
    navigate(-1);
  };

  const ingredientDetails = useSelector( getIngredientDetails );

  return (

    <div id={`app`} className={`${styles.App} custom-scroll`}>

      <AppHeader />

      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/ingredients/:ingredientID" element={<IngredientDetails />} />
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

                // ingredientDetails && (

                // )

              <Modal 
                title="Детали ингредиента" 
                onClose={handleModalClose}
              >
                <IngredientDetails />
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
