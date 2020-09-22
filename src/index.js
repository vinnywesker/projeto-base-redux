import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import store from './Reducer'

import { Provider } from 'react-redux'

ReactDOM.render(//isso aqui vai integrar o estado entre o react e o redux
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root'));