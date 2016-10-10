import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Import the Hot Module Reloading App Container
const { AppContainer } = require<any>('react-hot-loader');
// Importin App
import App from './App';
import './index.css';

const rootEl = document.getElementById('root');
// Rendering App
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

// Tell Typescript that there is a global variable called module
declare var module: { hot: any };
// Handle hot reloading requests from Webpack
if (module.hot) {
  module.hot.accept('./App', () => {
    // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require<any>('./App').default;

    // And render it into the root element again
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}