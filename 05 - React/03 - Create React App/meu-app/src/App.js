import logo from './logo.svg';
import Header from "./Header";
import Counter from "./Counter";
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [show, setShow] = useState(true);

  let time = 0;

  // useEffect(()=> {
  //   let timer = setInterval(()=> {
  //     time++;
  //     console.log(time)
  //     if(time > 5) {
  //       clearInterval(timer);
  //       setShow(false)
  //     }
  //   }, 1000)
  // }, [])


  //===== Test useEffect == componentWillUnmount ====
  // if(show) {
  //   return (
  //     <div>
  //       <Header name="PabloXT" links={["Home", "About", "Services", "Contact"]}></Header>
  //       <Counter count={5}></Counter>
  //     </div>
      
  //   );
  // } else {
  //   return (
  //     <div>
  //       <Header name="PabloXT" links={["Home", "About", "Services", "Contact"]}></Header>
  //       <div className="counter">
  //           <h1>Counter Excluido</h1>
  //       </div>
  //     </div>
      
  //   );
  // }

  //===== Retorno Padrão =====
  return (
    //Obs: colocamos os componentes dentro de uma div pois não dá para retornar mais de um componente JSX por vez
    <div>
      <Header name="PabloXT" links={["Home", "About", "Services", "Contact"]}></Header>
      <Counter count={5}></Counter>
    </div>
    
  );
}

export default App;
