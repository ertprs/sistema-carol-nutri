import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import LandingPage from '../pages/LandingPage'
import SingIn from '../pages/SingIn'
import SingUp from '../pages/SingUp'
import Dashboard from '../pages/dashboard'


export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/singin" exact component={SingIn}  />
            <Route path="/singup" exact component={SingUp} />
            <Route path="/dashboard" exact component={Dashboard} isPrivate />
        </Switch>
    )
}