import React from 'react';

import {Link} from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { Container, Return } from './styles'
import { Form, Input, Textarea } from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'

import api from '../../services/api'

const schema = Yup.object().shape({

    virtualDate: Yup.string()
        .required("Data de agendamento obrigatória!"),

    actualDate: Yup.string()
        .required("Data de criação do agendamento obrigatório!"),

    schedule: Yup.string()
        .required("Horário é obrigatório para registrar um agendamento"),
    
    status: Yup.string()
        .required("Campo obrigatório"),
    
    note: Yup.string()
})

export default function RegisterAgendamentos(){

    async function handlSubmit(data) {
        
        await api.post(`agendamento/register` ,{ 
            virtualDate: data.virtualDate,
            actualDate: data.actualDate,
            schedule: data.schedule,
            status: data.status,
            note: data.note
         }).then(async () => {
             toast.success('Agendamento cadastrado com sucesso!')
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })

    }

    return (
        <>
            <Return>
                <Link to="/agenda"s>
                    <FiChevronLeft/>
                    Voltar
                </Link>
            </Return>
            <Container>
                <Form schema={schema} onSubmit={handlSubmit}>
                    <h2>Informações sobre os agendamentos</h2>
                    <Input  name="virtualDate" label="Informe a data para agendamento"/>
                    <Input  name="actualDate" label="Informe a data atual" />
                    <Input  name="schedule" placeholder="Informe o horário da consulta" />
                    <Input  name="status" placeholder="Informe se o horario está disponivel ou indisponível" />
                    <Textarea label="Informe uma anotação" name="note" placeholder="Descrição (opcional)" />
                    <button type="submit">Cadastrar</button>
                    
                </Form>
            </Container>
        </>
    )
}