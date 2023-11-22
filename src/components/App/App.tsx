
import '../App/App.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <h1>Заголовок</h1>
      <BurgerIngredients/>
      <BurgerConstructor/>
    </div>
  );
}

export default App;
