import React from 'react'
import {Router, Route} from 'mirrorx'
import asyncComponent from '../../asyncComponent'

const Header=asyncComponent(()=>import('../Header'));
const Home=asyncComponent(()=>import('../Home'));
const Users=asyncComponent(()=>import('../Users'));
const Test=asyncComponent(()=>import('../Test'));
const Webworker=asyncComponent(()=>import('../Webworker'));
const Other=asyncComponent(()=>import('../Other'));
const App = () => (
  <Router>
    <div>
      <Route path="*" component={Header} />
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/test" component={Test} />
      <Route path="/webworker" component={Webworker} />
      <Route path="/other" component={Other} />
    </div>
  </Router>
)

export default App
