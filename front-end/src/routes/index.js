import React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import Route from './Route'

import LandingPage from '../pages/LandingPage'
import SignIn_ from '../pages/SingIn'
import SignUp from '../pages/SingUp'
import Dashboard from '../pages/dashboard'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/signin" component={SignIn_}  />
                <Route path="/signup" component={SignUp} />
                <Route path="/dashboard" isPrivate component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}