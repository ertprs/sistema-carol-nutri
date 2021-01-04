import React from 'react';

import {Link} from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { Container, Return } from './styles'
import { Form, Input, Textarea } from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'
import { useHistory } from 'react-router-dom'

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

    var history = useHistory()

    async function handlSubmit(data) {        
        await api.post(`artigo/register` ,{ 
            title: data.title,
            description: data.description,
            link: data.link,
         }).then(async () => {
             toast.success('Artigo cadastrado')
             history.push('/artigos')
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
                    <Input label="Link do documento" name="link" placeholder="Link do documento do drive" />
                    <Input label="Titulo do artigo"  name="title" placeholder="Ex.: Fungos no alimentos"/>
                    <Textarea label="Descrição sobre o artigo" name="description" placeholder="Informe um breve descrição sobre artigo" />
                    <button type="submit">Cadastrar</button>
                </Form>
            </Container>
        </>
    )
}