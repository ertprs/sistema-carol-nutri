import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import logo from '../../assets/logo-branca.svg'
import { Wrapper, Content, Loading } from './styles'

import {AuthContext} from '../../context/AuthContext'
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading'

export default function SignIn_(){

    const { signIn } = useContext(AuthContext)
    const [loading, setLoading] = useState(false);

    async function handlesubmit(data){
        setLoading(true)
        try {
            await signIn({
                email: data.email,
                password: data.password
            })
            setLoading(false)
        } catch (error) {
            toast.error('Ocorreu um erro. Entre em contato com o suporte.')
        }
    }

    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Insira um e-mail válido!")
            .required("O e-mail é obrigatório!"),
    
        password: Yup.string()
            .required("A senha é obrigatória!"),
    })

    if(loading){
        return <><Loading><h1>Carregando</h1><ReactLoading  color="#fff" /></Loading></>
    } else {
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
}