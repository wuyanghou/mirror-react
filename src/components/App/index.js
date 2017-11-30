import React from 'react'
import {Router, Route} from 'mirrorx'

import asyncComponent from '../../asyncComponent'

console.log(asyncComponent,999);
const Header=asyncComponent(()=>import('../Header'));
const Home=asyncComponent(()=>import('../Home'));
const Users=asyncComponent(()=>import('../Users'));
const Test=asyncComponent(()=>import('../Test'));

const App = () => (
  <Router>
    <div>
      <Route path="*" component={Header} />
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/test" component={Test} />
    </div>
  </Router>
)

export default App
