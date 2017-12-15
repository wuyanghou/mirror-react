import React from 'react'

import mirror, {render} from 'mirrorx'
import App from './components/App'

import users from './models/index';

mirror.model(users);
mirror.defaults({
  historyMode: 'hash'
})

render(<App />, document.getElementById('root'))
