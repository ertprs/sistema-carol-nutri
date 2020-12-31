import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import {toast} from 'react-toastify'
import { FiChevronLeft,  FiChevronRight } from 'react-icons/fi'
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from 'react-router-dom'

import api from '../../services/api'
import {Return, UsuarioInfo, Container} from './styles'

export default function Receita(){

    var history = useHistory()

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

    async function handClick(){
        console.log('entrou na função')
        await api.delete(`receitas/delete/${params.receita}` ,{
        }).then(() => {
            toast.success('Receita excluída!')
            history.push('/receitas')
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
                </div>
            </header>
            <div className="botoes">
                <a href={Receita.link} target="_blank">ver<FiChevronRight/></a>
                <button onClick={handClick} type="button">Excluir <AiOutlineClose size={20} /></button>
            </div>
        </UsuarioInfo>
    </Container>
    )
}