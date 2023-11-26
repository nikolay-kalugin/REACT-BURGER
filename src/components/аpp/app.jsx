
import './app.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ingredients from '../../utils/data.js';

function App() {
  return (
    <div className="App">
      <AppHeader />
       <main className="Main">
       { 
          ingredients.length !== 0 && 
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
