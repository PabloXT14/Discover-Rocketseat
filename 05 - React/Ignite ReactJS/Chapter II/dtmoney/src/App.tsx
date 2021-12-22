import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

import { GlobalStyle } from './styles/global';


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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      {/* Modal de NewTrasaction  */}
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />


      {/* Estilização global com Styled Comp. */}
      <GlobalStyle />
    </TransactionsProvider>
  );
}

