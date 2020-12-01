import React, {useContext} from 'react';

import { Container } from './styles'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'

import {AuthContext} from '../../context/AuthContext'
import api from '../../services/api'

const schema = Yup.object().shape({

    name: Yup.string()
        .required("O nome é obrigatório!"),

    email: Yup.string()
        .email("Insira um e-mail válido!")
        .required("O e-mail é obrigatório!"),

    password: Yup.string()
        .required("A senha é obrigatória!"),

    NewPassword: Yup.string()
        .required("Campo obrigatório!"),

    ConfirmeNewpassword: Yup.string()
        .required("Campo obrigatório!"),
})

export default function Profile(){

    const { user } = useContext(AuthContext)
    const { update } = useContext(AuthContext)

    async function handlSubmit(data) {
        await api.put(`user/userUp/${user._id}` ,{
            name: data.name,
            email: data.email,
        }).then(() => {
            update({
                email: data.email,
                password: data.password
            })
            toast.success('Perfil atualizado.')
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })

    }


    return (
        <>
            <Container>
                <Form schema={schema} initialData={user} onSubmit={handlSubmit}>
                    <Input  name="name" placeholder="Nome e sobrenome"/>
                    <Input  type="email" name="email" placeholder="Nome e sobrenome"/>
                    <hr/>

                    <Input type="password" name="password" placeholder="Senha atual" />
                    <Input type="password" name="NewPassword" placeholder="Nova senha" />
                    <Input type="password" name="ConfirmeNewpassword" placeholder="Confirme a nova senha" />
                    <button type="submit">Atualizar perfil</button>
                </Form>
            </Container>
        </>
    )
}