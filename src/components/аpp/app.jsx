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

function App() {

  const loading = useSelector( getIsLoading );

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch( getIngredients() );

  },[dispatch]);

  return (
    <div className={`${styles.App} custom-scroll`}>

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
