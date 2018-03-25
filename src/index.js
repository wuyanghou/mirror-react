import React from 'react';

import mirror, {render} from 'mirrorx';
import {AppContainer} from 'react-hot-loader';
import App from './components/App'

import {Provider} from 'mobx-react';
import users from './models/index';

import stores from './mobx';


mirror.model(users);

//historyMode : browser, hash, memory
mirror.defaults({
  historyMode: 'browser'
});

// render(<App/>, document.getElementById('root'));
render(<AppContainer><Provider stores={stores}><App/></Provider></AppContainer>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    render(<AppContainer><Provider stores={stores}><NewApp/></Provider></AppContainer>, document.getElementById('root'));
  })
}
