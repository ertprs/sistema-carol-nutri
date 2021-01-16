import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom'

import {toast} from 'react-toastify'
import {FiChevronRight} from 'react-icons/fi'
import {AiFillPlusCircle, AiOutlineRedo} from 'react-icons/ai'

import {Container, Formulario, Artigo, Loading} from './styles'
import Logo from '../../assets/logo-branca.svg'
import api from "../../services/api"
import Tooltip from '../../components/tooltip/index'

import ReactLoading from 'react-loading'

export default function Artigos(){

    const [artigos, setArtigo] = useState([]);
    const [busca, setBusca] = useState('');
    const [loading, setLoading] = useState(false);

    //Objeto mutavel
    const cb = useRef() //serve para ser a causa de disparo do usuEffect quando  este Component é gerado, ou seja, useEffect será chamado quando o usuário entrar nesta página.

    //função que é chamada por uma causa. Sempre que cb mudar, está função será chamada
    useEffect(async () => {
        setLoading(true)
        api.get('artigo/list').then((response) => {
            setArtigo(response.data.docs)
            setLoading(false)
        }).catch((error) => {
            setLoading(false)
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        }) 
    },[cb])

    function onChange(event) {
        setBusca(event.target.value)
    }

    function handleClick(){
        setLoading(true)
        if(busca === ''|| busca === undefined){
            api.get('artigo/list').then((response) => {
                setArtigo(response.data.docs)
                setLoading(false)
                toast.success('Lista atualizada.')
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
                setLoading(false)
            }) 
        } else {
            api.get(`artigo/listName/${busca}`).then((response) => {
                setArtigo(response.data)
                setLoading(false)
                toast.success('Lista atualizada.')
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
                setLoading(false)
            }) 
        }
    }

    if (loading){
        return <><Loading><h1>Carregando</h1><ReactLoading  color="#fff" /></Loading></>
    }

    return(
        <>
            <Container>
                <img src={Logo} alt="Carol Nutri"/>
                <h1>Explore a lista de artigos.</h1>
            </Container>

            <Formulario>
                <input value={busca} onChange={onChange} name="pesquisa" type="text" placeholder="Informe um nome para buscar um artigo"/>
                <button onClick={handleClick} type="button">Atualizar lista <AiOutlineRedo size={20} /></button>
            </Formulario>

            {artigos.map(artigo => (
                
                <Artigo>
                    <a key={String(artigo._id)} href={artigo.link} target="_blank" >
                        <div>
                            <div className="conteudo">
                                <strong>{artigo.title}</strong>
                                <p>{artigo.description}</p>
                            </div>
                        </div>

                        <FiChevronRight size={20}/>
                    </a>
                </Artigo>
            ))}
        </>
    )
}