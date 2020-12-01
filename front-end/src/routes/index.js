import React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import Route from './Route'

import LandingPage from '../pages/LandingPage/index'
import SignIn_ from '../pages/SingIn/index'
import SignUp from '../pages/SingUp/index'
import Dashboard from '../pages/dashboard/index'
import Profile from '../pages/profile/index'
import ForgotPassword from '../pages/forgot_password/index'
import Pacientes from '../pages/pacientes/index'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/signin" component={SignIn_}  />
                <Route path="/signup" component={SignUp} />
                <Route path="/recuperar-senha" component={ForgotPassword} />
                <Route path="/dashboard" isPrivate component={Dashboard} />
                <Route path="/perfil" isPrivate component={Profile} />
                <Route path="/pacientes" isPrivate component={Pacientes} />
            </Switch>
        </BrowserRouter>
    )
}