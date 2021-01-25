import React, {useState} from 'react';

import { Link, useRouteMatch } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { Container, Return, Loading, Formulario, Paciente } from './styles'
import { Form, Input, Textarea, Scope, Select  } from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'
import { useHistory } from 'react-router-dom'

import ReactLoading from 'react-loading'
import Logo from '../../assets/logo-branca.svg'

import {FiChevronRight} from 'react-icons/fi'
import {AiOutlineRedo} from 'react-icons/ai'
import api from '../../services/api'

export default function RegisterConsulta(){

    const { params } = useRouteMatch();

    const [loading, setLoading] = useState(false);
    const [pacientes, setPacientes] = useState(undefined);
    const [busca, setBusca] = useState('');

    var history = useHistory()

    async function handlSubmit(data) {
        setLoading(true)  
        try {
            if(!pacientes){
                toast.info('Uma consulta deve possuir um paciente.')
                setLoading(false) 
            } else {
                await api.post(`consultas/register` ,{
                    user: pacientes._id,
                    data: params.data,
                    situation: data.situation,
                    note: data.note,
                 }).then(async () => {
                     toast.success('Consulta cadastrado')
                     history.push('/dashboard')
                }).catch((error) => {
                    setLoading(false) 
                    let erro = JSON.parse(error.request.response)
                    toast.error(erro.error)
                })
            }
        } catch (error) {
            toast.error('Ocorreu um erro ao registrar a consulta. Entre em contato com o suporte.')
        }     
    }

    function onChange(event) {
        setBusca(event.target.value)
    }

    function handleClick(){
        setLoading(true)
        try {
            if(busca == ''|| busca == undefined){
                toast.info('O campo não póde está vazio')
                setLoading(false)
            } else {
                api.get(`user/userEmail/${busca}`).then((response) => {
                    setPacientes(response.data)
                    setLoading(false)
                    toast.success('Lista atualizada.')
                }).catch((error) => {
                    setLoading(false)
                    let erro = JSON.parse(error.request.response)
                    toast.error(erro.error)
                }) 
            }
        } catch (error) {
            toast.error('Ocorreu um erro ao listar o paciente. ENtre em contato com o suporte.')
        }
    }

    if (loading){
        return <><Loading><h1>Carregando</h1><ReactLoading  color="#fff" /></Loading></>
    } else {
        return (
            <>
                <Return>
                    <Link to="/dashboard">
                        <FiChevronLeft/>
                        Voltar
                    </Link>
                </Return>
                <Container>
                    <header>
                        <img src={Logo} alt="Carol Nutri"/>
                        <h1>Informe os dados solicitados para o cadastro da consulta.</h1>
                    </header>
                    <Formulario onSubmit={e => { e.preventDefault()}}>
                        <input value={busca} onChange={onChange} name="pesquisa" type="text" placeholder="Informe o E-mail do paciente"/>
                        <button onClick={handleClick} type="button">Atualizar lista <AiOutlineRedo size={20} /></button>
                    </Formulario>
    
                    <Paciente>
                        {
                            pacientes
                            ?
                            <Link  to={`/paciente/${pacientes._id}`}>
                                <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"/>
                                <div>
                                    <div className="conteudo">
                                        <strong>{pacientes.name}</strong>
                                        <p>{pacientes.email}</p>
                                    </div>
                                </div>
                                <FiChevronRight size={20}/>
                            </Link>
                            :
                            undefined
                        }
                    </Paciente>

                    <Form className="formulario" onSubmit={handlSubmit}>
                        <Input label="Acompanhamento" name="project" placeholder="Link do documento do drive"  />
                        <Select label="Situação" name="situation" id="situation" options={[{id: "Em espera", title: 'Em espera'}, {id: "Em acompanhamento", title: 'Em acompanhamento'}, {id: "Em acompanhamento pós retorno", title: 'Em acompanhamento pós retorno'}, {id: "Finalizado", title: 'Finalizado'}]} placeholder="Selecione uma opção" />
                        <Textarea rows="4" label="Observações" name="note" placeholder="Observações sobre a consulta" />
                        <button type="submit">Cadastrar</button>
                    </Form>
                </Container>
            </>
        )
    }
}