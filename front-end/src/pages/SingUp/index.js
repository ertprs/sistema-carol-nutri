import React, { useState, useContext} from 'react';
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'

import logo from '../../assets/logo-branca.svg'
import { Wrapper, Content, Loading } from './styles'
import {AuthContext} from '../../context/AuthContext'

import api from '../../services/api'
import ReactLoading from 'react-loading'

const schema = Yup.object().shape({

    name: Yup.string()
        .required("O nome é obrigatório!"),

    email: Yup.string()
        .email("Insira um e-mail válido!")
        .required("O e-mail é obrigatório!"),

    password: Yup.string()
        .required("A senha é obrigatória!"),

    phone: Yup.string()
        .required("O telefone é obrigatório!"),
})


export default function SignUp(){

    const { signIn } = useContext(AuthContext)

    const [loading, setLoading] = useState(false);

    async function onChange(event){
        event.target.value = event.target.value
            .replace(/\D/g,'')
            .replace(/(\d{0})(\d)/, '$1($2')
            .replace(/(\d{2})(\d)/, '$1) $2 ')
            .replace(/(\d{4})(\d)/, '$1-$2')
    }

    async function handlesubmit(data){
        setLoading(true)
        try {
            await api.post('auth/register'  ,{
                name: data.name,
                email: data.email,
                phone: data.phone,
                password: data.password
            }).then(async(response) => {
                await signIn({
                    email: data.email,
                    password: data.password
                })
                console.log(response)
                setLoading(false)
                toast.success('Cadastro realizado!')
            }).catch((error) => {
                setLoading(false)
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })
        } catch (error) {
            toast.error('Ocorreu um erro. Entre em contato com o suporte.')
        }
    }

    if(loading){
        return <><Loading><h1>Carregando</h1><ReactLoading  color="#fff" /></Loading></>
    } else {
        return (
            <Wrapper>
                <Content>
                    <img src={logo} alt="Carol-nutricionista"/>
    
                    <Form schema={schema} onSubmit={handlesubmit}>
                        <Input name="name" type="text" placeholder="Seu nome completo" />
                        <Input name="email" type="email" placeholder="Seu e-mail" />
                        <Input name="phone" onInput={onChange} maxLength="16" type="text" placeholder="Seu telefone" />
                        <Input name="password" type="password" placeholder="Sua senha" />
    
                        <button type="submit">Cadastrar</button>
                    </Form>
                </Content>
            </Wrapper>
        )
    }    
}