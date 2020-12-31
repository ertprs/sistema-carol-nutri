import React from 'react';

import {Link} from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { Container, Return } from './styles'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'

import api from '../../services/api'
import {useHistory} from 'react-router-dom'

const schema = Yup.object().shape({

    name: Yup.string()
        .required("O nome é obrigatório!"),

    email: Yup.string()
        .email("Insira um e-mail válido!")
        .required("O e-mail é obrigatório!"),

    password: Yup.string()
        .required("A senha é obrigatória!"),

    phone: Yup.string()

})

export default function RegisterPaciente(){

    const historico = useHistory()

    async function onChange(event){
        event.target.value = event.target.value
            .replace(/\D/g,'')
            .replace(/(\d{0})(\d)/, '$1($2')
            .replace(/(\d{2})(\d)/, '$1) $2 ')
            .replace(/(\d{4})(\d)/, '$1-$2')
    }

    async function handlSubmit(data) {    
        console.log(data)   
        console.log(data.namess)    
        await api.post(`auth/register` ,{ 
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            status: 'cadastrado'

         }).then(async () => {
            toast.success('Usuário cadastrado.')
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
        historico.push('/pacientes')
    }


    return (
        <>
            <Return>
                <Link to="/pacientes">
                    <FiChevronLeft/>
                    Voltar
                </Link>
            </Return>

            <Container>
                <Form onSubmit={handlSubmit} schema={schema}>
                    <h2>Dados de acesso</h2>
                    <Input  type="text" name="name" maxLength="60" placeholder="Nome e sobrenome"/>
                    <Input  type="email" maxLength="60" name="email" placeholder="E-mail"/>
                    <Input  name="phone" onInput={onChange} maxLength="16"  placeholder="Informe o telefone"/>
                    <Input  type="password" maxLength="14" name="password" placeholder="Informe a senha" />
                    <hr/>
                     <button type="submit">Cadastrar</button>
                </Form>
            </Container>
        </>
    )
}