import React, { useState, useContext, useEffect, useMemo} from 'react';
import {AuthContext} from '../../context/AuthContext'
import { Link } from 'react-router-dom'

import { format, subDays, addDays} from 'date-fns'
import pt from 'date-fns/locale/pt'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import api from "../../services/api"
import {Container, Loading, Time} from './styles.js'
import Logo from '../../assets/logo-branca.svg'

import ReactLoading from 'react-loading'
import {toast} from 'react-toastify'

export default function Dashboard(){

    const { user } = useContext(AuthContext)

    const [loading, setLoading] = useState(false);
    const [ consultas, setconsultas ] = useState([]);
    const [ date, setDate ] = useState(new Date());

    const dateFormatted = useMemo(
        () => format(date, "d 'de' MMMM", { locale: pt}),
        [date]
    );

    useEffect(async () => {
        setLoading(true)

        var data = ''
        if(date.getMonth() < 10){
            data = `0${date.getMonth()+1}-${date.getFullYear()}`
        }else {
            data = `${date.getMonth()+1}-${date.getFullYear()}`
        }
        if(date.getDate() < 10){
            data = `0${date.getDate()}-${data}`
        } else {
            data = `${date.getDate()}-${data}`
        }
        
        try{
            await api.get(`consultas/consulta/${data.toString()}`).then((response) => {
                setconsultas(response.data)
                setLoading(false)
            }).catch((error) => {
                setconsultas([])
                setLoading(false)
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })
        }catch (error) {
            toast.error('Erro ao buscar os consultas. Entre em contato com o suporte.')
        }

    },[date])

    function handlePrevDay() {
        setDate(subDays(date, 1));
    }

    function handleNextDay() {
        setDate(addDays(date, 1));
    }

    if (loading){
        return (
            <Loading><h1>Carregando</h1><ReactLoading  color="#fff" /></Loading>
        )
    } else {
        if(user.eAdmin === true){
            if(consultas.length === 0){
                return (
                    <Container>
                        <header>
                            <img src={Logo} alt="Carol Nutri"/>
                            <h1>Consultório CarolNutri</h1>
                        </header>
                        <div>
                            <button type="button" onClick={handlePrevDay}> 
                                <MdChevronLeft size={36} color="#FFF"/>
                            </button>
                            <strong>{dateFormatted}</strong>
                            <button type="button" onClick={handleNextDay}> 
                                <MdChevronRight size={36} color="#FFF"/>
                            </button>
                        </div>
                        <div>
                            <h4>
                                Não existe consulta marcada para este dia.
                            </h4>
                        </div>
                    </Container>
                )
            } else {
                return (
                    <Container>
                        <header>
                            <img src={Logo} alt="Carol Nutri"/>
                            <h1>Consultório CarolNutri</h1>
                        </header>
                        <div>
                            <button type="button" onClick={handlePrevDay}> 
                                <MdChevronLeft size={36} color="#FFF"/>
                            </button>
                            <strong>{dateFormatted}</strong>
                            <button type="button" onClick={handleNextDay}> 
                                <MdChevronRight size={36} color="#FFF"/>
                            </button>
                        </div>
                        <div>
                            <h4>
                                Consultas marcadas para este dia
                            </h4>
                        </div>
                        <ul>
                            { consultas.map(consulta => (
                                <div key={String(consulta._id)} >
                                    {
                                        <Time><Link><strong >Situação: {consulta.situation}</strong><span>Paciente: {consulta.user.name}</span><span>Às {consulta.data.hours}</span><span>{consulta.data.note}</span></Link></Time>
                                    }
                                </div>
                            ))}
                        </ul>
                    </Container>
                )
            }
        } else {
            return (
                <Container>
                    <div className="cabe">
                        <img src={Logo} alt="Carol Nutri"/>
                        <h1>Consultório CarolNutri</h1>
                    </div>
                </Container>
            )
        }
    }
}