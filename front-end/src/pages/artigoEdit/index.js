import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import {toast} from 'react-toastify'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Form, Input, Check } from '@rocketseat/unform'
import * as Yup from 'yup'
import history from '../../services/history'

import api from '../../services/api'

import {Return, UsuarioInfo, Modal, Container} from './styles'

/*
As informações pessoais, dá para deixar, só para a visualização da nutricionista. Já as
informações do usuário, dá para deixar da mesma forma, porém terá um botão para editar.
Clicando no botão, abrirá um modal para editar as informações deste usuário. Ao lado deste botão,
deve ter um botão em vermelho para deletar o usuário. Este botão, também deverá abrir um modal para
a confirmação da exclusão do usuário.
*/

export default function Artigo(){

    const schema = Yup.object().shape({

        title: Yup.string()
            .required("O nome é obrigatório!"),
    
        description: Yup.string()
            .required("Insira um e-mail válido!"),
    
        link: Yup.string()
            .required("Insira um e-mail válido!")
    
    })

    const { params } = useRouteMatch();

    const [artigo, setArtigo] = useState([]);

    useEffect(async () => {
        api.get(`artigo/list/${params.artigo}`).then((response) => {
            setArtigo(response.data)
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
    },[params.artigo])


    async function handlSubmit(data) {
        await api.put(`artigo/list/${artigo._id}` ,{
                title: data.title,
                description: data.description,
                link: data.link,
        }).then((response) => {
            setArtigo(response.data)
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })

    }

    return (
    <Container>
        <Return>
            <Link to="/artigos">
                <FiChevronLeft/>
                Voltar
            </Link>
        </Return>

        <UsuarioInfo>
            <header>
                <div>
                    <strong>
                        {artigo.title}
                    </strong>
                    <p>
                        {artigo.description}
                    </p>
                    <a href={artigo.link} target="_blank">
                        ver
                    </a>
                    <a type="button" href="#popup1">Editar <FiChevronRight/></a>

                </div>
            </header>
        </UsuarioInfo>
    </Container>
    )


}