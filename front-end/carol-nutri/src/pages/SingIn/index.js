import React from 'react';
import {Link} from 'react-router-dom'

import Header from "../../components/header"

import logo from '../../assets/logo-branca.svg'
import { Wrapper, Content } from './styles'

export default function SingIn(){
    return (
        <div>
            <Header />
            <Wrapper>
                <Content>
                    <img src={logo} alt="Carol-nutricionista"/>

                    <form>
                        <input type="email" placeholder="Seu e-mail" />
                        <input type="password" placeholder="Sua senha" />

                        <button type="submit">Acessar</button>
                        <Link to="/register">Criar conta gratuita</Link>
                    </form>
                </Content>
            </Wrapper>
        </div>

    )
}