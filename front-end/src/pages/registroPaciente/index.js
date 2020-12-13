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

    dateBirth: Yup.string()
        .required("Data de nascimento é um campo obrigatório!"),

    maritalStatus: Yup.string()
        .required("Estado cívil é um campo obrigatório!"),

    phone: Yup.string()
        .required("Telefone é um campo obrigatorio!"),

    IntestinalTransit: Yup.string()
        .required("Transito intestinal é um campo obrigatório!"),

    sleepQuality: Yup.string()
        .required("Qualidade do sono é um campo obrigatório!"),

    Weight: Yup.string()
        .required("Peso é um campo obrigatório!"),

    height: Yup.string()
        .required("Altura é um campo obrigatorio!"),

    UrinaryStaining: Yup.string()
        .required("Tipo da urina é um campo obrigatorio!")

})

export default function RegisterPaciente(){

    async function handlSubmit(data) {
        console.log(data)
        
        await api.post(`auth/register` ,{ 
            name: data.name,
            email: data.email,
            password: data.password,

            PersonalInformation: {
                dateBirth: data.dateBirth,
                maritalStatus: data.maritalStatus,
                phone: data.phone,
                IntestinalTransit: data.IntestinalTransit,
                sleepQuality: data.sleepQuality,
                Weight: data.Weight,
                height: data.height,
                UrinaryStaining: data.UrinaryStaining
            },

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
                    <Input  type="text" name="phone" placeholder="Número de telefone"/>
                    <Input  type="text" name="IntestinalTransit" placeholder="Transito intestinal"/>
                    <Input  type="text" name="sleepQuality" placeholder="Qualidade do sono"/>
                    <Input  type="text"  name="Weight" placeholder="Peso"/>
                    <Input  type="text" step=".1" name="height" placeholder="Altura"/>
                    <Input  type="text" name="UrinaryStaining" placeholder="Tipo da urina"/>

                    <button type="submit">Cadastrar</button>
                </Form>
            </Container>
        </>
    )
}