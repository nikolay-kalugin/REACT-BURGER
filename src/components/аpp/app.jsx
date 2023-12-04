import {useState, useEffect} from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {

  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] =  useState(true);

  useEffect(() => {

    const apiUrl = `https://norma.nomoreparties.space/api/ingredients`;

    fetch(apiUrl)
      .then(response => { 
        if (!response.ok) 
        {
          setIngredients( () => [] )
          throw new Error('Server returned ' + response.status);
        }
        return response.json()
      })
      .then((obj) => {
        setIngredients( () => obj.data );
      })
      .catch(error => {
        alert('При загрузке списка ингредиентов возникла ошибка: ', error);
        setIngredients( () => [] )
      })
      .finally( () => { setLoading(false) } )

  }, [setIngredients]);

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
