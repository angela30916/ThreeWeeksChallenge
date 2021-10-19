import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Main from './components/Main';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
