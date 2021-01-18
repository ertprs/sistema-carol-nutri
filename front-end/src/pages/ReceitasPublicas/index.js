import React, { useState, useRef, useEffect } from 'react';

import {toast} from 'react-toastify'
import {FiChevronRight} from 'react-icons/fi'
import {AiOutlineRedo} from 'react-icons/ai'
import ReactLoading from 'react-loading'

import {Container, Formulario, Receita, Loading} from './styles'
import Logo from '../../assets/logo-branca.svg'
import api from "../../services/api"

export default function Receitas(){
    const [receitas, setReceitas] = useState([]);
    const [busca, setBusca] = useState('');
    const [loading, setLoading] = useState(false);

    //Objeto mutavel
    const cb = useRef() //serve para ser a causa de disparo do usuEffect quando  este Component é gerado, ou seja, useEffect será chamado quando o usuário entrar nesta página.

    //função que é chamada por uma causa. Sempre que cb mudar, está função será chamada
    useEffect(async () => {
        setLoading(true)
        try {
            await api.get('receitas/list').then((response) => {
                setReceitas(response.data.docs)
                setLoading(false)
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })      
        } catch (error) {
            setLoading(true)
            toast.error('Erro ao buscar as receitas. Entre em contato com o suporte.')
        }

    },[cb])

    function onChange(event) {
        setBusca(event.target.value)
    }

    async function handleClick(){
        setLoading(true)
        try {
            if(busca == ''|| busca == undefined){
                await api.get('receitas/list').then((response) => {
                    setReceitas(response.data.docs)
                    setLoading(false)
                    toast.success('Lista atualizada.')
                }).catch((error) => {
                    let erro = JSON.parse(error.request.response)
                    toast.error(erro.error)
                    setLoading(false)
                }) 
            } else {
                api.get(`receitas/listName/${busca}`).then((response) => {
                    setReceitas(response.data)
                    setLoading(false)
                    toast.success('Lista atualizada.')
                }).catch((error) => {
                    let erro = JSON.parse(error.request.response)
                    toast.error(erro.error)
                    setLoading(false)
                }) 
            }
        } catch (error) {
            setLoading(true)
            toast.error('Erro ao buscar as receitas. Entre em contato com o suporte.')
        }

    }

    if (loading){
        return <><Loading><h1>Carregando</h1><ReactLoading  color="#fff" /></Loading></>
    } else {
        return(
            <Container>
                <div>
                    <img src={Logo} alt="Carol Nutri"/>
                    <h1>Explore a lista de receitas.</h1>
                </div>
    
                <Formulario>
                    <input value={busca} onChange={onChange} name="pesquisa" type="text" placeholder="Informe um nome para buscar uma receita"/>
                    <button onClick={handleClick} type="button">Atualizar lista <AiOutlineRedo size={20} /></button>
                </Formulario>
    
                {receitas.map(receita => (
                
                <Receita>
                    <a key={String(receita._id)}  href={receita.link} target="_blank">
                        <img src={receita.image}/>
                        <div className="conteudo">
                            <strong>{receita.title}</strong>
                            <p>{receita.description}</p>
                        </div>
    
                        <FiChevronRight/>
                    </a>
                </Receita>
            ))}
            </Container>
        )
    }
}
