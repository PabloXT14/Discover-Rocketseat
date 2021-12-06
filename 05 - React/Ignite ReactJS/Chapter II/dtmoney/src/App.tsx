import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';


// const Title = styled.h1`
//   font-size: 64px;
//   color: #8257e6;

//   button {
//     color: dodgerblue;
//   }
// `


// Setando dentro de qual div o Modal vai estar (é só por questão de acessibilidade pois o Modal pode ser colocado em qualquer lugar no codigo)
Modal.setAppElement('#root');


export function App() {
  // State do modal (para o modal da library react-modal)
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  // Funcao mostrar modal
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  // Funcao fechar modal
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }




  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      {/* Modal de NewTrasaction  */}
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />


      {/* Estilização global com Styled Comp. */}
      <GlobalStyle />
    </>
  );
}

