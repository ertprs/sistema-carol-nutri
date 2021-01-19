import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom'

import {toast} from 'react-toastify'
import {FiChevronRight} from 'react-icons/fi'
import {AiFillPlusCircle, AiOutlineRedo} from 'react-icons/ai'

import {Container, Formulario, Artigo, Loading} from './styles'
import Logo from '../../assets/logo-branca.svg'
import api from "../../services/api"
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
        try {
            await api.get('artigo/list').then((response) => {
                setArtigo(response.data?.docs)
                setLoading(false)
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            }) 
        } catch (error) {
            toast.error('Ocorreu um erro ao listar os artigos. Entre em contato com o suporte.')
        }
    },[cb])

    function onChange(event) {
        setBusca(event.target.value)
    }

    function handleClick(){
        setLoading(true)
        try {
            if(busca === ''|| busca === undefined){
                api.get('artigo/list').then((response) => {
                    setArtigo(response.data.docs)
                    setLoading(false)
                    toast.success('Lista atualizada.')
                }).catch((error) => {
                    let erro = JSON.parse(error.request.response)
                    toast.error(erro.error)
                }) 
            } else {
                api.get(`artigo/listName/${busca}`).then((response) => {
                    setArtigo(response.data)
                    setLoading(false)
                    toast.success('Lista atualizada.')
                }).catch((error) => {
                    let erro = JSON.parse(error.request.response)
                    toast.error(erro.error)
                }) 
            }
        } catch (error) {
            toast.error('Ocorreu um erro ao listar o artigo. Entre em contato com o suporte.')
        }
    }

    if (loading){
        return <><Loading><h1>Carregando</h1><ReactLoading  color="#fff" /></Loading></>
    } else {
        return(
            <Container>
                <div>
                    <img src={Logo} alt="Carol Nutri"/>
                    <h1>Explore a lista de artigos.</h1>
                </div>
                
                <Formulario>
                    <input value={busca} onChange={onChange} name="pesquisa" type="text" placeholder="Informe o nome do artigo"/>
                    <button onClick={handleClick} type="button">Atualizar lista <AiOutlineRedo size={20} /></button>
                    <Link>
                        <div>
                            <Link to="/registrar-artigo">
                                <AiFillPlusCircle size={60}/>
                            </Link>
                        </div>
                    </Link>
                </Formulario>
    
                {artigos.map(artigo => (
                    <Artigo>
                        <Link key={String(artigo._id)}  to={`/artigo/${artigo._id}`}>
                            <div>
                                <div className="conteudo">
                                    <strong>{artigo.title}</strong>
                                    <p>{artigo.description}</p>
                                </div>
                            </div>
    
                            <FiChevronRight size={20}/>
                        </Link>
                    </Artigo>
                ))}

            </Container>
        )
    }
}