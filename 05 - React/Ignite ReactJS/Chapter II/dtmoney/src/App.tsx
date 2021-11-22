import styled from 'styled-components';
import { GlobalStyle } from './styles/global';


// const Title = styled.h1`
//   font-size: 64px;
//   color: #8257e6;

//   button {
//     color: dodgerblue;
//   }
// `

const ButtonLogin = styled.button`
    display: block;
    margin: 20px auto;
    height: 40px;
    width: 150px;
    border: none;
    outline: none;
    border-radius: 3px;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    font-weight: 500;
    background-color: var(--blue-light);
    color: #FFF;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      transform: rotateY(360deg);
    }

`


export function App() {
  return (
    <div className="App">
      {/* Estilização global com Styled Comp. */}
      <GlobalStyle />

      <h1>Hellow World</h1>
      <input type="text" disabled></input>
      <ButtonLogin>Click Me</ButtonLogin>
    </div>
  );
}

