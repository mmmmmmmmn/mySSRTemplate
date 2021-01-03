import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Header from './layouts/Header'

import Index from './pages/Index'
import About from './pages/About'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

const App: React.FC = () => (
    <>
        <Header />
        <Switch>
            <Route exact path='/' component={Index}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/settings' component={Settings}></Route>
            <Route component={NotFound} />
        </Switch>
    </>
)

export default App
