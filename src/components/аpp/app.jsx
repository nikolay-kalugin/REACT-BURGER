import {useState, useEffect} from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {

  const [ingredients, setIngredients] = useState([]);

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
        console.error('There was a problem with the Fetch operation:', error);
        setIngredients( () => [] )
      });

  }, [setIngredients]);

  return (
    <div className={`${styles.App} custom-scroll`}>

      <AppHeader />

       <main className={styles.Main}>
        { 
             ingredients.length !== 0  && 
            <>
                <BurgerIngredients ingredients={ingredients} />
                <BurgerConstructor ingredients={ingredients} />
               
            </>
        }
      </main>



    </div>
  );
}

export default App;
