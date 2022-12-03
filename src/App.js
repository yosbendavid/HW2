import logo from './logo.svg';
import './App.css';
import MyKitchen from './Class Comps/MyKitchen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <h1>La Recipes</h1>
      <MyKitchen />
    </div>
  );
}

export default App;
