import React from 'react';

import {Link} from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { Container, Return } from './styles'
import { Form, Input, Textarea } from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'

import api from '../../services/api'

const schema = Yup.object().shape({

    title: Yup.string()
        .required("Titulo é obrigatório!"),

    description: Yup.string()
        .required("Descrição é obrigatória!"),

    link: Yup.string()
        .required("Link é um campo obrigatório!"),

})

export default function RegisterArtigos(){

    async function handlSubmit(data) {
        console.log(data)
        
        await api.post(`artigo/register` ,{ 
            title: data.title,
            description: data.description,
            link: data.link,
         }).then(async () => {
             toast.success('Artigo cadastrado')
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })

    }


    return (
        <>
            <Return>
                <Link to="/artigos"s>
                    <FiChevronLeft/>
                    Voltar
                </Link>
            </Return>
            <Container>
                <Form schema={schema} onSubmit={handlSubmit}>
                    <h2>Informações do artigo</h2>
                    <Input  name="title" placeholder="informe o titulo do artigo"/>
                    <Textarea  name="description" placeholder="Informe a descrição do artigo" />
                    <Input  name="link" placeholder="Informe o link do documento" />
                    <button type="submit">Cadastrar</button>
                </Form>
            </Container>
        </>
    )
}