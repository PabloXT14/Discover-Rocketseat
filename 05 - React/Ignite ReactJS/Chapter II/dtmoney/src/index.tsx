import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

// Criando server/rota fictícia com MirageJS
createServer({
  // Criando banco de dados fictício no Mirage
  models: {
    transaction: Model,//criando tabela
  },
  // Função para colocar pre-dados dentro da nossa tabela/db/model
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdrae',
          category: 'Casa',
          amount: 2000,
          createAt: new Date('2021-02-14 11:00:00'),
        }
      ]
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');// retornando todos os dados da table/model criada no banco de dados fake
    });

    this.post('/transactions', (schema, request) => {
      // pegando dados enviados no body do request desta rota post
      const data = JSON.parse(request.requestBody);//convertendo de JSON -> Objeto JS 

      // schema('nameTable', dadosToSave): refere-se ao banco de dados no Mirage
      return schema.create('transaction', data);
    });

  }
});



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

