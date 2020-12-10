import React from 'react';

import { Container } from './styles'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'

import api from '../../services/api'
import history from '../../services/history'

const schema = Yup.object().shape({

    name: Yup.string()
        .required("O nome é obrigatório!"),

    email: Yup.string()
        .email("Insira um e-mail válido!")
        .required("O e-mail é obrigatório!"),

    password: Yup.string()
        .required("A senha é obrigatória!"),

})

export default function RegisterPaciente(){

    async function handlSubmit(data) {
        console.log(data)
        await api.post(`auth/register` ,{ 
            name: data.name,
            email: data.email,
            password: data.password,

            'PersonalInformation.dateBirth': data.dateBirth,
            'PersonalInformation.dateBirth': data.dateBirth,
            'PersonalInformation.dateBirth': data.maritalStatus,
            'PersonalInformation.dateBirth': data.phone,
            'PersonalInformation.dateBirth': data.IntestinalTransit,
            'PersonalInformation.dateBirth': data.sleepQuality,
            'PersonalInformation.dateBirth': data.Weight,
            'PersonalInformation.dateBirth': data.height,
            'PersonalInformation.dateBirth': data.UrinaryStaining
            
         }).then(async () => {
            toast.success('Usuário cadastrado.')
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })

    }


    return (
        <>
            <Container>
                <Form schema={schema} onSubmit={handlSubmit}>
                    <h2>Dados de acesso</h2>
                    <Input  name="name" placeholder="Nome e sobrenome"/>
                    <Input  type="email" name="email" placeholder="E-mail"/>
                    <Input type="password" name="password" placeholder="Informe a senha" />
                    <hr/>
                    <h2>Iformações pessoais</h2>
                    <Input  type="date" name="dateBirth" placeholder="Data de nascimento"/>
                    <Input  name="maritalStatus" placeholder="status civil"/>
                    <Input  type="number" name="phone" placeholder="Número de telefone"/>
                    <Input  name="IntestinalTransit" placeholder="Transito intestinal"/>
                    <Input  name="sleepQuality" placeholder="Qualidade do sono"/>
                    <Input  type="number" step=".01" name="Weight" placeholder="Peso"/>
                    <Input  type="number" step=".1" name="height" placeholder="Altura"/>
                    <Input  name="UrinaryStaining" placeholder="Tipo da urina"/>

                    <button type="submit">Cadastrar</button>
                </Form>
            </Container>
        </>
    )
}