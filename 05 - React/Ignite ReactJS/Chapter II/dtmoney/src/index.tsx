import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

// Criando server/rota ficticia com MirageJS
createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          type: 'deposit',
          value: 1000,
          category: 'Food',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Transaction 2',
          type: 'deposit',
          value: 2000,
          category: 'Development',
          createdAt: new Date()
        },
        {
          id: 3,
          title: 'Transaction 3',
          type: 'withdraw',
          value: 1500,
          category: 'Development',
          createdAt: new Date()
        }
      ]
    })

  }
});



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

