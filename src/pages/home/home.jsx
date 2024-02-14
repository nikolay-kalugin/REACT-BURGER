import React from 'react';
import styles from './home.module.css';
import { useEffect } from 'react';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import { getIngredients } from '../../services/getIngredients';
import { useDispatch , useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/selectors/selectors';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export function HomePage() {

	const loading = useSelector( getIsLoading );

	const dispatch = useDispatch();
  
	useEffect(() => {
	  
	  dispatch( getIngredients() );
  
	},[dispatch]);


	return (
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
	);
} 