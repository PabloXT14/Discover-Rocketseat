import styled from 'styled-components';


const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;

  button {
    color: dodgerblue;
  }
`

export function App() {
  return (
    <div className="App">
      <Title>
        Hellow Worold
        <button>Click Me</button>
      </Title>
    </div>
  );
}

