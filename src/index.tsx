import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { } from 'webpack-env';
// Import the Hot Module Reloading App Container
const { AppContainer } = require<any>('react-hot-loader');
// Import polyfills
import { } from './utils/polyfills';
// Import Root App
import Root from './Root';

const rootEl = document.getElementById('root');
// Rendering App
ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
);

// Handle hot reloading requests from Webpack
if (module.hot) {
  module.hot.accept('./Root', () => {
    // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require<any>('./Root').default;

    // And render it into the root element again
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}