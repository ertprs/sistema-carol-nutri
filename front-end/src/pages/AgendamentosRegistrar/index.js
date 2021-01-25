import React, { useState } from 'react';

import {Link} from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { Container, Return, Loading } from './styles'
import { Form, Input} from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'
import ReactLoading from 'react-loading'

import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import Logo from '../../assets/logo-branca.svg'

const schema = Yup.object().shape({

    virtualDate: Yup.string()
        .required("Data de agendamento obrigatória!"),

    hours: Yup.string()
        .required("Horário é obrigatório para registrar um agendamento"),
    })

export default function RegisterAgendamentos(){

    const [loading, setLoading] = useState(false)

    var history = useHistory()

    async function handlSubmit(data) {
        setLoading(true)

        try {
            const vet = data.virtualDate.split('-')
            const dataFake = `${vet[2]}-${vet[1]}-${vet[0]}`
            await api.post(`agendamento/register` ,{ 
                virtualDate: dataFake,
                hours: data.hours,
             }).then(async () => {
                history.go('/cadastrar-agendamento')
                setLoading(false)
                toast.success('Agendamento cadastrado com sucesso!')
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })
    
        } catch (error) {
            toast.error('Ocorreu um erro ao cadastrar. Entre em contato com o suporte.' + error)
        }

    }

    if(loading){
        return <><Loading><h1>Carregando</h1><ReactLoading  color="#fff" /></Loading></>
    }else {
        return (
            <Container>
                <Return>
                    <Link to="/agenda"s>
                        <FiChevronLeft/>
                        Voltar
                    </Link>
                </Return>
                <div className="cab">
                    <img src={Logo} alt="Carol Nutri"/>
                    <h1>Cadastrar agendamento para consulta</h1>
                </div>
                <Form schema={schema} onSubmit={handlSubmit}>
                    <Input  name="virtualDate" type="date" label="Data para o agendamento"/>
                    <Input  name="hours" type="time" placeholder="Informe o horário da consulta" label="Horário" />
                    <button type="submit">Cadastrar</button>
                </Form>
            </Container>
        )
    }
}