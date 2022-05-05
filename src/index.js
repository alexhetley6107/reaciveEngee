import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {lists} from './state/Lists';

ReactDOM.render(
  <React.StrictMode>
    <App lists={lists} />
  </React.StrictMode>,
  document.getElementById('root')
);
