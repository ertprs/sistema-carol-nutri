import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'

import logo from '../../assets/logo-branca.svg'
import { Wrapper, Content } from './styles'

import {AuthContext} from '../../context/AuthContext'


const schema = Yup.object().shape({
    email: Yup.string()
        .email("Insira um e-mail válido!")
        .required("O e-mail é obrigatório!"),

    password: Yup.string()
        .required("A senha é obrigatória!"),
})


export default function SignIn_(){

    const { signIn } = useContext(AuthContext)
    
    try {
        function handlesubmit(data){
            signIn({
                email: data.email,
                password: data.password
            })
            toast.success('Login realizado!')
        }
    
        return (
            <>
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
            </>
    
        )
    } catch (error) {
        console.log(error)
    }

}