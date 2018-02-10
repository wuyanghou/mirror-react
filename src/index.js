import React from 'react';

import mirror, {render} from 'mirrorx';

import App from './components/App'

import users from './models/index';

mirror.model(users);

//historyMode : browser, hash, memory
mirror.defaults({
  historyMode: 'browser'
});

render(<App/>, document.getElementById('root'));
