import React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import Route from './Route'

import LandingPage from '../pages/LandingPage/index'
import SignIn_ from '../pages/SingIn/index'
import SignUp from '../pages/SingUp/index'

import Profile from '../pages/Profile/index'
import Dashboard from  '../pages/dashboard/index'
import ForgotPassword from '../pages/ForgotPassword/index'

import Pacientes from '../pages/PacientesListagem/index'
import Paciente from '../pages/PacientesEdit/index'
import RegisterPaciente from '../pages/PacientesRegister/index'

import RegisterReceitas from '../pages/receitasRegister/index'
import Receitas from '../pages/receitasListagem/index'
import ReceitasPublicas from '../pages/ReceitasPublicas/index'
import Receita from '../pages/receitasEdit/index'

import RegisterArtigos from '../pages/artigosRegister/index'
import Artigos from '../pages/ArtigosListagem/index'
import ArtigosPublicos from '../pages/ArtigosPublicos/index'
import Artigo from '../pages/ArtigosEdit/index'

import Agendamento from "../pages/AgendamentosListar/index"
import RegistrarAgendamento from "../pages/AgendamentosRegistrar/index"

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
                <Route path="/receitasPublicos" component={ReceitasPublicas} />
                <Route path="/receita/:receita" isPrivate component={Receita} />

                <Route path="/registrar-artigo" isPrivate component={RegisterArtigos} />
                <Route path="/artigos" isPrivate component={Artigos} />
                <Route path="/artigosPublicos" component={ArtigosPublicos} />
                <Route path="/artigo/:artigo" isPrivate component={Artigo} />

                <Route path="/agenda" isPrivate component={Agendamento} />
                <Route path="/cadastrar-agendamento" isPrivate component={RegistrarAgendamento} />
            </Switch>
        </BrowserRouter>
    )
}