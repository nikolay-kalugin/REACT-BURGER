import { useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getIngredients } from '../../services/getIngredients';
import { useDispatch , useSelector } from 'react-redux';

function App() {

  const loading = useSelector(state => state.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch( getIngredients() );

  },[dispatch]);

  return (
    <div className={`${styles.App} custom-scroll`}>

      <AppHeader />

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

    </div>
    
  );
}

export default App;
