import React, { useState, useContext, useEffect, useMemo} from 'react';
import {AuthContext} from '../../context/AuthContext'
import { Link } from 'react-router-dom'

import { format, subDays, addDays} from 'date-fns'
import pt from 'date-fns/locale/pt'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineRedo} from 'react-icons/ai'

import api from "../../services/api"
import {Container, Loading, Time, Formulario} from './styles.js'
import Logo from '../../assets/logo-branca.svg'

import ReactLoading from 'react-loading'
import {toast} from 'react-toastify'

export default function Dashboard(){
    
    const [ schedule, setSchedule ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ consultas, setconsultas ] = useState([]);
    const [pacientes, setPacientes] = useState();
    const [ date, setDate ] = useState(new Date());
    const [busca, setBusca] = useState('');

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
                console.log(response.data)
                setconsultas(response.data)
                setLoading(false)
            }).catch((error) => {
                setconsultas(undefined)
                setLoading(false)
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })

            setLoading(true)
            await api.get(`agendamento/list/${data.toString()}`).then((response) => {
                setSchedule(response.data)
                setLoading(false)
            }).catch((error) => {
                setSchedule(undefined)
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

    function handleClick(){
        setLoading(true)
        try {
            if(busca == ''|| busca == undefined){
                toast.info('O campo não pode está vazio')
                setLoading(false)
            } else {
                api.get(`consultas/consultaUser/${busca}`).then((response) => {
                    console.log(pacientes)
                    setPacientes(response.data)
                    setLoading(false)
                    toast.success('Lista atualizada.')
                }).catch((error) => {
                    setPacientes(undefined)
                    setLoading(false)
                    let erro = JSON.parse(error.request.response)
                    toast.error(erro.error)
                }) 
            }
        } catch (error) {
            toast.error('Ocorreu um erro ao listar o paciente. ENtre em contato com o suporte.')
        }
    }

    function onChange(event) {
        setBusca(event.target.value)
    }

    if (loading){
        return (
            <Loading><h1>Carregando</h1><ReactLoading  color="#fff" /></Loading>
        )
    } else {
        return (
            <Container>
                <header>
                    <img src={Logo} alt="Carol Nutri"/>
                    <h1>Consultório Carol Nutri</h1>
                </header>
                <header>
                    <h2>Explorar consultas</h2>
                </header>
                <aside>
                    <Formulario onSubmit={e => { e.preventDefault()}}>
                        <input value={busca} onChange={onChange} name="pesquisa" id="pesquisa" type="text" placeholder="Informe o E-mail do paciente"/>
                        <button onClick={handleClick} type="button">Atualizar lista <AiOutlineRedo size={20} /></button>
                    </Formulario>
                    {
                        pacientes ?  <Link to={`/consulta/${pacientes?._id}`}><strong >Paciente: {pacientes?.user?.name}</strong><span>E-mail: {pacientes?.user?.email}</span><p>Situação: {pacientes?.situation}</p><p>Horário: {pacientes?.data?.hours}</p></Link> : undefined
                    }
                </aside>
                <header>
                    <h2>Navegue pelos dias</h2>
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
                <div className="buscaData">
                    <div className="consultas">
                        <ul>
                            <h2>Consultas marcadas</h2>
                            { consultas.map(consulta => (
                                <div key={String(consulta._id)} >
                                    {
                                        consultas ? <Time><Link to={`/consulta/${consulta._id}`}><strong >Paciente: {consulta?.user?.name}</strong><span>E-mail: {consulta?.user?.email}</span><p>Situação: {consulta?.situation}</p><p>Horário: {consulta?.data?.hours}</p></Link></Time> : <h3>Nada marcado para este dia</h3>
                                    }
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="agendamento">
                        <ul>
                            <h2>Datas para agendamento de consulta</h2>
                            { schedule.map(agendamento => (
                                <div key={String(agendamento._id)} >
                                    {
                                        agendamento.status ? <Time available ><Link to={`/register-consulta/${agendamento._id}`}><strong>Disponível para agendamento</strong><span>{agendamento.hours}</span><p>Click para agendar uma consulta</p></Link></Time> : undefined
                                    }
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        )
        
    } 
}
