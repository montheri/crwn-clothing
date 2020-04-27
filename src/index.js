import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import {Provider} from 'react-redux'


ReactDOM.render(
  <Provider>
=======
import { Provider } from 'react-redux'

import store from './redux/store'


ReactDOM.render(
  <Provider store={store}>
>>>>>>> 125017d06aa19756aa5a8945812329bab6633eca
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
