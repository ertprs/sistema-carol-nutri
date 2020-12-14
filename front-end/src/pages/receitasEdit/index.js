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

export default function Receita(){

    const schema = Yup.object().shape({

        title: Yup.string()
            .required("O nome é obrigatório!"),
    
        description: Yup.string()
            .required("Insira um e-mail válido!"),

        image: Yup.string()
            .required("O nome é obrigatório!"),
    
        link: Yup.string()
            .required("Insira um e-mail válido!")
    
    })

    const { params } = useRouteMatch();

    const [Receita, setReceita] = useState([]);

    useEffect(async () => {
        api.get(`receitas/list/${params.receita}`).then((response) => {
            setReceita(response.data)
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
    },[params.Receita])


    async function handlSubmit(data) {
        await api.put(`receitas/list/${Receita._id}` ,{
                title: data.title,
                description: data.description,
                link: data.link,
                image: data.image,
        }).then((response) => {
            setReceita(response.data)
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })

    }

    return (
    <Container>
        <Return>
            <Link to="/receitas">
                <FiChevronLeft/>
                Voltar
            </Link>
        </Return>

        <UsuarioInfo>
            <header>
                <img src={Receita.image}/>
                <div>
                    <strong>
                        {Receita.title}
                    </strong>
                    <p>
                        {Receita.description}
                    </p>
                    <a href={Receita.link} target="_blank">
                        ver
                    </a>
                    <a type="button" href="#popup1">Editar <FiChevronRight/></a>

                </div>
            </header>
        </UsuarioInfo>
    </Container>
    )


}