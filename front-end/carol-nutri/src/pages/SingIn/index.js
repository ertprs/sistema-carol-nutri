import React from 'react';
import {Link} from 'react-router-dom'

import Header from "../../components/header"

import logo from '../../assets/logo-branca.svg'
import { Wrapper, Content } from './styles'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    email: Yup.string()
        .email("Insira um e-mail válido!")
        .required("O e-mail é obrigatório!"),

    password: Yup.string()
        .required("A senha é obrigatória!"),
})

export default function SingIn(){
    function handlesubmit(data){
        alert(data.email)
    }

    return (
        <div>
            <Header />
            <Wrapper>
                <Content>
                    <img src={logo} alt="Carol-nutricionista"/>

                    <Form schema={schema} onSubmit={handlesubmit}>
                        <Input name="email" type="email" placeholder="Seu e-mail" />
                        <Input name="password" type="password" placeholder="Sua senha" />

                        <button type="submit">Acessar</button>
                        <Link to="/register">Criar conta gratuita</Link>
                    </Form>
                </Content>
            </Wrapper>
        </div>

    )
}