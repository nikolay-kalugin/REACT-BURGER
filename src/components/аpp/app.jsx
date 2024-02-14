import styles from './app.module.css';
import AppHeader from '../app-header/app-header';

import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../../pages/register/register';
import { LoginPage } from '../../pages/login/login';
import { ForgotPasswordPage } from '../../pages/forgot-password/forgot-password';
import { ResetPasswordPage } from '../../pages/reset-password/reset-password';
import { IngredientsPage } from '../../pages/ingredients/ingredients';
import { ProfilePage } from '../../pages/profile/profile';
import { OrdersPage } from '../../pages/orders/orders';

function App() {

  return (

    <div id={`app`} className={`${styles.App} custom-scroll`}>

      <AppHeader />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage />}/>
        <Route path="/reset-password" element={<ResetPasswordPage />}/>
        <Route path="/ingredients" element={<IngredientsPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/orders" element={<OrdersPage />}/>
      </Routes>
   
    </div>
    
  );
}

export default App;
