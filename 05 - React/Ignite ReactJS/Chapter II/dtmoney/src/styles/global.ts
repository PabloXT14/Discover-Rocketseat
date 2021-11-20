import { createGlobalStyle } from 'styled-components';


/* const/Componente de estilização global */
export const GlobalStyle = createGlobalStyle`
  :root {
      --background: #F0F2F5;
      --red: #e52e4d;
      --blue: #5429cc;

      --blue-light: #6933FF;

      --text-title: #363F5F;
      --text-body: #969CB3;

      --shape: #FFFFFF;
  }

  * {
      margin: 0%;
      padding: 0;
      box-sizing: border-box;
  }

  /* ===== Deixando tela com uma acessabilidade e reponsividade ===== */
  // font-size (default): 16px (Desktop) = 1rem(root element)
  html {
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }

  }

  body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;/* style para deixar fonte mais nítida no Google */
  }

  button {
      cursor: pointer;
  }

  [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
  }

`

