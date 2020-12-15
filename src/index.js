import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import config from './auth_config.json';

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    audience={config.audience}
    scope="read:current_user update:current_user_metadata"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);
