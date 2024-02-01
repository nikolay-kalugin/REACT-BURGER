import { useEffect } from 'react';

import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getIngredients } from '../../redux/actions/getIngredients';

function App() {

  // const [ingredients, setIngredients] = useState([]);
  // const [loading, setLoading] = useState(true);

  const loading = false;

  useEffect(() => {
    // getApiData(setIngredients, setLoading);
    getIngredients();

  },[]);

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
