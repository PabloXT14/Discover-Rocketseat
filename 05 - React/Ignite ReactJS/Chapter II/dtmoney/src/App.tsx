import styled from 'styled-components';
import { GlobalStyle } from './styles/global';


// const Title = styled.h1`
//   font-size: 64px;
//   color: #8257e6;

//   button {
//     color: dodgerblue;
//   }
// `

export function App() {
  return (
    <div className="App">
      {/* Estilização global com Styled Compon */}
      <GlobalStyle />

      <h1>Hellow World</h1>
      <input type="text" disabled></input>
    </div>
  );
}

