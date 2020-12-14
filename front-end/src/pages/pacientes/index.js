import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom'

import {toast} from 'react-toastify'
import {FiChevronRight} from 'react-icons/fi'
import {AiFillPlusCircle, AiOutlineRedo} from 'react-icons/ai'

import {Container, Formulario, Paciente, Loading} from './styles'
import Logo from '../../assets/logo-branca.svg'
import api from "../../services/api"
import Tooltip from '../../components/tooltip/index'
import ReactLoading from 'react-loading'

export default function Pacientes(){
    const [pacientes, setPacientes] = useState([]);
    const [busca, setBusca] = useState('');
    const [loading, setLoading] = useState(false);

    //Objeto mutavel
    const cb = useRef() //serve para ser a causa de disparo do usuEffect quando  este Component é gerado, ou seja, useEffect será chamado quando o usuário entrar nesta página.

    //função que é chamada por uma causa. Sempre que cb mudar, está função será chamada
    useEffect(async () => {
        setLoading(true)
        api.get('/user/users').then((response) => {
            setPacientes(response.data.docs)
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
            api.get('/user/users').then((response) => {
                setPacientes(response.data.docs)
                setLoading(false)
                toast.success('Lista atualizada.')
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
                setLoading(false)
            }) 
        } else {
            api.get(`user/userName/${busca}`).then((response) => {
                setPacientes(response.data)
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
                <h1>Explore a lista dos pacientes.</h1>
            </Container>

            <Formulario>
                <input value={busca} onChange={onChange} name="pesquisa" type="text" placeholder="Informe o nome do usuário"/>
                <button onClick={handleClick} type="button">Atualizar lista <AiOutlineRedo size={20} /></button>
                <Link>
                    <div>
                        <Link to="/registrar-paciente">
                            <AiFillPlusCircle size={60}/>
                            <Tooltip texto="Cadastrar novo usuário."/>
                        </Link>
                    </div>
                </Link>
            </Formulario>

            {pacientes.map(paciente => (
                
                <Paciente>
                    <Link key={String(paciente._id)}  to={`/paciente/${paciente._id}`}>
                        <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"/>
                        <div>
                            <div className="conteudo">
                                <strong>{paciente.name}</strong>
                                <p>{paciente.email}</p>
                                <span>status</span>
                            </div>
                        </div>

                        <FiChevronRight size={20}/>
                    </Link>
                </Paciente>
            ))}
        </>
    )
}
