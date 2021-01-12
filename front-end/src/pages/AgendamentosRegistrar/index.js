import React from 'react';

import {Link} from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { Container, Return } from './styles'
import { Form, Input, Textarea} from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'

import { useHistory } from 'react-router-dom'
import api from '../../services/api'

const schema = Yup.object().shape({

    virtualDate: Yup.string()
        .required("Data de agendamento obrigatória!"),

    hours: Yup.string()
        .required("Horário é obrigatório para registrar um agendamento"),
    
    note: Yup.string()
})

export default function RegisterAgendamentos(){

    var history = useHistory()

    async function handlSubmit(data) {
        await api.post(`agendamento/register` ,{ 
            virtualDate: data.virtualDate,
            hours: data.hours,
            note: data.note
         }).then(async () => {
            history.go('/cadastrar-agendamento')
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
                    <h2>Cadastrar agendamento para consulta</h2>
                    <Input  name="virtualDate" type="date" label="Data para o agendamento"/>
                    <Input  name="hours" type="time" placeholder="Informe o horário da consulta" label="Horário" />
                    <button type="submit">Cadastrar</button>
                </Form>
            </Container>
        </>
    )
}