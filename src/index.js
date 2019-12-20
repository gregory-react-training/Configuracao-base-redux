import React from 'react';

import {Provider} from 'react-redux';

//DEVE SER IMPORTADO ANTES DO STORE, POIS NECESSITA CONFIGURAÇÃO!
import '~/config/ReactotronConfig';

import store from './store';

import TodoList from './components/TodoList';

// import styles from './styles';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
