import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import {toast} from 'react-toastify'
import { FiChevronLeft,  FiChevronRight } from 'react-icons/fi'
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from 'react-router-dom'

import api from '../../services/api'
import {Return, UsuarioInfo, Container} from './styles'

export default function Artigo(){

    var history = useHistory()

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

    async function handClick(){
        console.log('entrou na função')
        await api.delete(`artigo/delete/${artigo._id}` ,{
        }).then(() => {
            toast.success('Receita excluída!')
            history.push('/artigos')
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
                </div>
            </header>
            <div className="botoes">
                <a href={artigo.link} target="_blank">ver<FiChevronRight/></a>
                <button onClick={handClick} type="button">Excluir <AiOutlineClose size={20} /></button>
            </div>
        </UsuarioInfo>
    </Container>
    )


}