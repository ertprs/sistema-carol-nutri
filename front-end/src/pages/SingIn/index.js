import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import logo from '../../assets/logo-branca.svg'
import { Wrapper, Content } from './styles'

import {AuthContext} from '../../context/AuthContext'

export default function SignIn_(){

    const { signIn } = useContext(AuthContext)
    
    function handlesubmit(data){
        signIn({
            email: data.email,
            password: data.password
        })
    }

    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Insira um e-mail válido!")
            .required("O e-mail é obrigatório!"),
    
        password: Yup.string()
            .required("A senha é obrigatória!"),
    })
    
    return (
        <Wrapper>
            <Content>
                <img src={logo} alt="Carol-nutricionista"/>

                <Form schema={schema} onSubmit={handlesubmit}>
                    <Input name="email" type="email" placeholder="Seu e-mail" />
                    <Input name="password" type="password" placeholder="Sua senha" />

                    <button type="submit">Acessar</button>
                    <Link to="/recuperar-senha">Recuperar senha</Link>
                </Form>
            </Content>
        </Wrapper>
    )
}