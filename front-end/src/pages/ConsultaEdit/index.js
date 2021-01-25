import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import {toast} from 'react-toastify'
import { FiChevronLeft } from 'react-icons/fi'
import { AiFillEdit } from "react-icons/ai";
import { useHistory } from 'react-router-dom'
import { Form, Input, Textarea, Scope, Select } from '@rocketseat/unform'
import ReactLoading from 'react-loading'
import Logo from '../../assets/logo-branca.svg'

import api from '../../services/api'
import {Return, UsuarioInfo, Container, Editor, Loading} from './styles'
import Tooltip from '../../components/tooltip/index'

export default function ConsultaEdit(){

    var history = useHistory()

    const { params } = useRouteMatch();

    const [Consulta, setConsulta] = useState([]);
    const [edit, setEdit] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        setLoading(true)
        try {
            console.log(params.id)
            await api.get(`consultas/consultaId/${params.id}`).then((response) => {
                console.log(response)
                setConsulta(response.data)
                setLoading(false)
            }).catch((error) => {
                setLoading(false)
                console.log(error)
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })
        } catch (error) {
            setLoading(true)
            toast.error('Erro ao listar a Consulta. Entre em contato com o suporte.')
        }
        
    },[params.id])

    async function handClick(){
        setLoading(true)
        try {
            await api.delete(`consultas/delete/${params.id}` ,{
            }).then(() => {
                setLoading(false)
                toast.success('Consulta excluída!')
                history.push('/Consultas')
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })
        } catch (error) {
            setLoading(true)
            toast.error('Erro ao deletar a Consulta. Entre em contato com o suporte.')
        }
        
    }

    async function handlSubmit(data) {
        setLoading(true)
        try {
            await api.put(`consultas/edit-consulta/${Consulta._id}` ,{ 
                user: Consulta.user._id,
                data: Consulta.data._id,
                situation: data.situation,
                note: data.note,
                project: data.project,
                evaluation: data.evaluation,
                testimony: data.testimony,
             }).then(async () => {
                setLoading(false)
                 toast.success('Consulta atualizado')
                 history.push('/dashboard')
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })
        } catch (error) {
            setLoading(true)
            toast.error('Erro ao editar a Consulta. Entre em contato com o suporte.')
        }
    }

    async function handleClick(){
        setEdit(false == edit)
        if(edit){
            toast.info('Campos de edição habilitado')
        } else {
            toast.info('Campos de edição desabilitado')
        }
    }

    if(loading){
        return <><Loading><h1>Carregando</h1><ReactLoading  color="#fff" /></Loading></>
    }else{
        return (
            <Container>
                <Return>
                    <Link to="/dashboard">
                        <FiChevronLeft/>
                        Voltar
                    </Link>
                </Return>
        
                <UsuarioInfo>
                    <div>
                        <img src={Logo} />
                        <h1>Informações do usuário</h1>
                    </div>                    <header>
                    <img src={Consulta.user.avatar}/>
                    <div>
                        <strong>
                            {Consulta.user.name}
                        </strong>
                        <p>
                            {Consulta.user.email}
                        </p>
                    </div>
                    </header>
                </UsuarioInfo>
                <Link to={`/editar-agendamento/${Consulta.data._id}`}>
                    <strong>Editar data da consulta</strong>
                </Link>
                <Editor>
                    <div>
                        <h2>Editar Consulta</h2>
                        <button className="Edit" onClick={handleClick}><AiFillEdit size={20}/><Tooltip texto="Habilitar campos para edição"/></button>
                    </div>
        
                    <Form onSubmit={handlSubmit} initialData={Consulta}>
                        {
                            edit ? <Input label="Acompanhamento" name="project" placeholder="Link do documento do drive" disabled /> : <Input label="Link do documento" name="project" placeholder="Link do documento do drive" />
                        }
                        {
                            edit ? <Select label="Situação" name="situation" id="situation" options={[{id: "Em espera", title: 'Em espera'}, {id: "Em acompanhamento", title: 'Em acompanhamento'}, {id: "Em acompanhamento pós retorno", title: 'Em acompanhamento pós retorno'}, {id: "Finalizado", title: 'Finalizado'}]} placeholder="Selecione uma opção" disabled/> : <Select label="Situação" name="situation" id="situation" options={[{id: "Em espera", title: 'Em espera'}, {id: "Em acompanhamento", title: 'Em acompanhamento'}, {id: "Em acompanhamento pós retorno", title: 'Em acompanhamento pós retorno'}, {id: "Finalizado", title: 'Finalizado'}]} placeholder="Selecione uma opção"/>
                        }
                        {
                            edit ?  <Textarea rows="4" label="Observações" name="note" placeholder="Observações sobre a consulta" disabled/> : <Textarea rows="4" label="Observações" name="note" placeholder="Observações sobre a consulta" />
                        }
                        <hr/>
                        <Scope path="evaluation">
                            <h2>Evolução</h2>
                                {
                                    edit ? <Textarea rows="4" label="Comentário" name="comment" id="comment" placeholder="Comentário sobre a evolução do paciente" disabled/> : <Textarea rows="4" label="Observações" name="comment" id="comment" placeholder="Comentário sobre a evolução do paciente"/>
                                }
                                {
                                    edit ? <Textarea rows="4" label="Resultados" name="result" id="result" placeholder="Resultados que o paciente obteve" disabled/> : <Textarea rows="4" label="Resultados" name="result" id="result" placeholder="Resultados que o paciente obteve"/>
                                }
                        </Scope>
                        <hr/>
                        <Scope path="testimony">
                            <h2>Depoimento do paciente</h2>
                                
                                <Select label="Situação" name="situation" id="situation" options={[{id: "Amei e recomendo", title: 'Amei e recomendo'}, {id: "Gostei", title: 'Gostei'}, {id: "Regular", title: 'Regular'}, {id: "Não recomendo", title: 'Não recomendo'}]} placeholder="Selecione uma opção" disabled/>
                                
                                <Textarea rows="4" label="Depoimento" name="depoiment" id="depoiment" disabled/>
                                
                        </Scope>
                        {
                            edit ? <button disabled>Desabilitado</button> : <button onSubmit={e => { e.preventDefault()}} type="submit" >Atualizar dados</button>
                        }
                    </Form>
                </Editor>
            </Container>
            )
    }
}