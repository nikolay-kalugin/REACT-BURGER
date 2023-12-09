import {useState, useEffect} from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import getApiData from '../../services/getApiData';

function App() {

  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      getApiData(setIngredients, setLoading);
},[]);

  return (
    <div className={`${styles.App} custom-scroll`}>

      <AppHeader />

       <main className={styles.Main}>
        { 
          loading ? <p>Данные загружаются...</p> 
            :
              <>
                <BurgerIngredients ingredients={ingredients} loading={loading} />
                <BurgerConstructor ingredients={ingredients} />
              </>
        }
      </main>



    </div>
  );
}

export default App;
