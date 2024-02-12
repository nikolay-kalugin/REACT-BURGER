import { useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getIngredients } from '../../services/getIngredients';
import { useDispatch , useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/selectors/selectors';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Routes, Route } from 'react-router-dom';
import { RegisterPage } from '../../pages/register/register';
import { LoginPage } from '../../pages/login/login';
import { ForgotPasswordPage } from '../../pages/forgot-password/forgot-password';
import { ResetPasswordPage } from '../../pages/reset-password/reset-password';
import { IngredientsPage } from '../../pages/ingredients/ingredients';
import { ProfilePage } from '../../pages/profile/profile';

function App() {

  const loading = useSelector( getIsLoading );

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch( getIngredients() );

  },[dispatch]);

  return (
    <div className={`${styles.App} custom-scroll`}>

   
        <Routes>
          {/* <Route path="/" element={<App />}/> */}
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/forgot-password" element={<ForgotPasswordPage />}/>
          <Route path="/reset-password" element={<ResetPasswordPage />}/>
          <Route path="/ingredients" element={<IngredientsPage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
        </Routes>
   

      <AppHeader />

      <DndProvider backend={HTML5Backend}>
        <main className={styles.Main}>
          { 
            loading ? <p>Данные загружаются...</p> 
              :
                <>
                  <BurgerIngredients />
                  <BurgerConstructor />       
                </>
                
          }
        </main>
      </DndProvider>

    </div>
    
  );
}

export default App;
