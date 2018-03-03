import React from 'react';

import mirror, {render} from 'mirrorx';
import { AppContainer } from 'react-hot-loader';
import App from './components/App'

import users from './models/index';

mirror.model(users);

//historyMode : browser, hash, memory
mirror.defaults({
  historyMode: 'browser'
});

// render(<App/>, document.getElementById('root'));
render( <AppContainer><App/></AppContainer>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp=require('./components/App').default;
    render( <AppContainer><NewApp/></AppContainer>, document.getElementById('root'));
  })
}
