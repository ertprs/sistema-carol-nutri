import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import {toast} from 'react-toastify'
import { FiChevronLeft } from 'react-icons/fi'
import { AiFillEdit } from "react-icons/ai";
import { useHistory } from 'react-router-dom'
import { Form, Input, Textarea, Check } from '@rocketseat/unform'
import * as Yup from 'yup'

import api from '../../services/api'
import {Return, Container, Editor} from './styles'
import Tooltip from '../../components/tooltip/index'

export default function Agendamento(){

    var history = useHistory()

    const { params } = useRouteMatch();

    const [loading, setLoading] = useState(true);
    const [agendamento, setAgendamento] = useState([]);
    const [edit, setEdit] = useState(true);

    useEffect(async () => {
        setLoading(true)
        api.get(`agendamento/listId/${params.id}`).then((response) => {
            setAgendamento(response.data)
            setLoading(false)
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
    },[params.id])

    async function handlSubmit(data) {
        console.log(data)
        if(data.virtualDate == "" || data.hours == "" || data.note == ""){
            toast.info('Campos obrigatórios vazios')
        } else {
            await api.put(`agendamento/edit/${agendamento._id}` ,{ 
                virtualDate: data.virtualDate,
                hours: data.hours,
                note: data.note,
                status: data.status,
             }).then(async () => {
                 toast.success('Agendamento atualizado')
                 history.push('/agenda')
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })
        }
    }
    
    async function handleClick(){
        setEdit(false == edit)
        if(edit){
            toast.info('Campos de edição habilitados')
        } else {
            toast.info('Campos de edição desabilitados')
        }
    }

    return (
    <Container>
        <Return>
            <Link to="/agenda">
                <FiChevronLeft/>
                Voltar
            </Link>
        </Return>

        <Editor>
            <div>
                <h2>Editar agendamento</h2>
                <button className="Edit" onClick={handleClick}><AiFillEdit size={20}/><Tooltip texto="Habilitar campos para edição"/></button>
            </div>

            <Form onSubmit={handlSubmit} initialData={agendamento}>
                <div>
                {
                    edit ? <Input  name="virtualDate" type="date" label="Data para o agendamento" disabled /> : <Input  name="virtualDate" type="date" label="Data para o agendamento"/>
                }
                {
                    edit ? <Input  name="hours" type="time" placeholder="Informe o horário da consulta" label="Horário" disabled /> : <Input  name="hours" type="time" placeholder="Informe o horário da consulta" label="Horário" />
                }
                </div>

                {
                    edit ?  <Textarea rows="4" label="Irfomações sobre o agendamento" name="note" placeholder="Ex.: Consulta online com Alice Costa ..." disabled/> : <Textarea rows="4" label="Descrição sobre o agendamento" name="note" placeholder="Informe um breve descrição sobre agendamento" />
                }
                {
                    edit ?  <Check label="Agendamento disponível" name="status" disabled/> : <Check label="Agendamento disponível" name="status" />
                }
                {
                    edit ? <button disabled>Desabilitado</button> : <button onSubmit={e => { e.preventDefault()}} type="submit" >Atualizar dados</button>
                }

            </Form>
        </Editor>
    </Container>
    )


}