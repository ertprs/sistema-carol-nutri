import React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import Route from './Route'

import LandingPage from '../pages/LandingPage/index'
import SignIn_ from '../pages/SingIn/index'
import SignUp from '../pages/SingUp/index'
import Dashboard from '../pages/Dashboard/index'
import Profile from '../pages/Profile/index'
import ForgotPassword from '../pages/ForgotPassword/index'
import Pacientes from '../pages/PacientesListagem/index'
import Paciente from '../pages/PacientesEdit/index'
import RegisterPaciente from '../pages/PacientesRegister/index'
import RegisterReceitas from '../pages/ReceitasRegister/index'
import Receitas from '../pages/ReceitasListagem/index'
import Receita from '../pages/ReceitasEdit/index'
import RegisterArtigos from '../pages/ArtigosRegister/index'
import Artigos from '../pages/ArtigosListagem/index'
import Artigo from '../pages/ArtigosEdit/index'

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
                <Route path="/paciente/:paciente" isPrivate component={Paciente} />
                <Route path="/registrar-paciente" isPrivate component={RegisterPaciente} />
                <Route path="/registrar-receita" isPrivate component={RegisterReceitas} />
                <Route path="/receitas" isPrivate component={Receitas} />
                <Route path="/receita/:receita" isPrivate component={Receita} />
                <Route path="/registrar-artigo" isPrivate component={RegisterArtigos} />
                <Route path="/artigos" isPrivate component={Artigos} />
                <Route path="/artigo/:artigo" isPrivate component={Artigo} />
            </Switch>
        </BrowserRouter>
    )
}