import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { GlobalStyle } from './styles/Global'

const app = (
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
)

ReactDOM.render(
  app,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
