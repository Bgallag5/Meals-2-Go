import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './sass/style.css';

import {GlobalContext} from './store/GlobalStore';
import Provider from './store/GlobalStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

