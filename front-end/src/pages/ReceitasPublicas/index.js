import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom'

import {toast} from 'react-toastify'
import {FiChevronRight} from 'react-icons/fi'
import {AiFillPlusCircle, AiOutlineRedo} from 'react-icons/ai'
import ReactLoading from 'react-loading'

import {Container, Formulario, Receita, Loading} from './styles'
import Logo from '../../assets/logo-branca.svg'
import api from "../../services/api"
import Tooltip from '../../components/tooltip/index'

export default function Receitas(){
    const [receitas, setReceitas] = useState([]);
    const [busca, setBusca] = useState('');
    const [loading, setLoading] = useState(false);

    //Objeto mutavel
    const cb = useRef() //serve para ser a causa de disparo do usuEffect quando  este Component é gerado, ou seja, useEffect será chamado quando o usuário entrar nesta página.

    //função que é chamada por uma causa. Sempre que cb mudar, está função será chamada
    useEffect(async () => {
        setLoading(true)
        api.get('receitas/list').then((response) => {
            setReceitas(response.data.docs)
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
        if(busca == ''|| busca == undefined){
            api.get('receitas/list').then((response) => {
                setReceitas(response.data.docs)
                setLoading(false)
                toast.success('Lista atualizada.')
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
                setLoading(false)
            }) 
        } else {
            api.get(`receitas/list/${busca}`).then((response) => {
                setReceitas(response.data)
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
                <h1>Explore a lista de receitas.</h1>
            </Container>

            <Formulario>
                <input value={busca} onChange={onChange} name="pesquisa" type="text" placeholder="Informe o nome do usuário"/>
                <button onClick={handleClick} type="button">Atualizar lista <AiOutlineRedo size={20} /></button>
                <Link>
                    <div>
                        <Link to="/registrar-receita">
                            <AiFillPlusCircle size={60}/>
                            <Tooltip texto="Cadastrar novo usuário."/>
                        </Link>
                    </div>
                </Link>
            </Formulario>

            {receitas.map(receita => (
                
                <Receita>
                    <Link key={String(receita._id)}  to={`/receita/${receita._id}`}>
                        <img src={receita.image}/>
                        <div>
                            <div className="conteudo">
                                <strong>{receita.title}</strong>
                                <p>{receita.description}</p>
                            </div>
                        </div>

                        <FiChevronRight size={20}/>
                    </Link>
                </Receita>
            ))}
        </>
    )
    
}
