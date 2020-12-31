import React from 'react';

import {Link} from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { Container, Return } from './styles'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'

import api from '../../services/api'
import { useHistory } from 'react-router-dom'

const schema = Yup.object().shape({

    image: Yup.string()
        .required("Imagem é um campo obrigatório!"),

    title: Yup.string()
        .required("Titulo é obrigatório!"),

    description: Yup.string()
        .required("Descrição é obrigatória!"),

    link: Yup.string()
        .required("Link é um campo obrigatório!"),

})

export default function RegisterReceitas(){

    var history = useHistory()
    
    async function handlSubmit(data) {
        
        await api.post(`receitas/register` ,{ 
            image: data.image,
            title: data.title,
            description: data.description,
            link: data.link,
         }).then(async () => {
            toast.success('receita cadastrada')
            history.push('/receitas')
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
    }


    return (
        <>
            <Return>
                <Link to="/receitas">
                    <FiChevronLeft/>
                    Voltar
                </Link>
            </Return>
            <Container>
                <Form schema={schema} onSubmit={handlSubmit}>
                    <h2>Informações da receita</h2>
                    <Input  name="image" placeholder="link de uma imagem"/>
                    <Input  name="title" placeholder="informe o titulo da receita"/>
                    <Input  name="description" placeholder="Informe a descrição da receita" />
                    <Input  name="link" placeholder="Informe o link do documento" />
                    <button type="submit">Cadastrar</button>
                </Form>
            </Container>
        </>
    )
}