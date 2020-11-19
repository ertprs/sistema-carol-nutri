import React from 'react';
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'
import { useHistory } from 'react-router-dom'

import logo from '../../assets/logo-branca.svg'
import { Wrapper, Content } from './styles'

import api from '../../services/api'


const schema = Yup.object().shape({

    name: Yup.string()
        .required("O nome é obrigatório!"),

    email: Yup.string()
        .email("Insira um e-mail válido!")
        .required("O e-mail é obrigatório!"),

    password: Yup.string()
        .required("A senha é obrigatória!"),
})


export default function SignUp(){

        var history = useHistory()

        async function handlesubmit(data){
            try {
                await api.post('auth/register'  ,{
                    name: data.name,
                    email: data.email,
                    password: data.password
                }).then((response) => {

                    toast.success('Cadastro realizado!')
                    history.push('/signin')

                }).catch((err) => {
                    toast.error('Este email já existe!')
                })

            } catch (error) {
                toast.error(error.message)
            }

        }
    
        return (
            <>
                <Wrapper>
                    <Content>
                        <img src={logo} alt="Carol-nutricionista"/>
    
                        <Form schema={schema} onSubmit={handlesubmit}>
                            <Input name="name" type="text" placeholder="Seu nome completo" />
                            <Input name="email" type="email" placeholder="Seu e-mail" />
                            <Input name="password" type="password" placeholder="Sua senha" />
    
                            <button type="submit">Cadastrar</button>
                        </Form>
                    </Content>
                </Wrapper>
            </>
    
        )


}