import logo from './logo.svg';
import Header from "./Header";
import Counter from "./Counter";
import './App.css';

function App() {
  return (
    //Obs: colocamos os componentes dentro de uma div pois não dá para retornar mais de um componente JSX por vez
    <div>
      <Header name="PabloXT" links={["Home", "About", "Services", "Contact"]}></Header>
      <Counter count={5}></Counter>
    </div>
    
  );
}

export default App;
