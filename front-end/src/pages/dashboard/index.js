import React, { useState, useContext, useEffect, useMemo} from 'react';
import {AuthContext} from '../../context/AuthContext'

import { format, subDays, addDays} from 'date-fns'
import pt from 'date-fns/locale/pt'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineCloudDownload } from "react-icons/ai";

import {Container, Loading, MedicalInfo, Time} from './styles.js'
import Logo from '../../assets/logo-branca.svg'
import api from '../../services/api'

import { toast } from 'react-toastify'
import ReactLoading from 'react-loading'
import { Form, Input, Textarea, Select, Scope } from '@rocketseat/unform'

export default function Dashboard(){

    const { user } = useContext(AuthContext)

    const [loading, setLoading] = useState(true);
    const [ schedule, setSchedule ] = useState([]);
    const [ date, setDate ] = useState(new Date());

    async function handleSubmitRegister(data){
        setLoading(true)
        try {
            await api.post(`form/register`, {
                user: user._id,
                PersonalInformation: data.PersonalInformation,
                nutritionalSemiology: data.nutritionalSemiology,
                waterConsumption: data.waterConsumption,
                allergiesAndIntolerances: data.allergiesAndIntolerances,
                useOfMedicines: data.useOfMedicines,
                physicalActivity: data.physicalActivity,
                alcoholicBeverage: data.alcoholicBeverage,
                smoking: data.smoking,
                schedules: data.schedules,
                dietaryEvaluation: data.dietaryEvaluation,
                preferencesAndAversions: data.preferencesAndAversions,
                anthropometricEvaluation: data.anthropometricEvaluation
    
            }).then(() => {
                setLoading(false)
                toast.success('Dados cadastrados.')
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })
        } catch (error) {
            toast.error('Ocorreu um erro ao registrar os dados. Entre em contato com o suporte.')
        }
    }

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
            await api.get(`agendamento/list/${data.toString()}`).then((response) => {
                setSchedule(response.data)
                setLoading(false)
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })
        }catch (error) {
            toast.error('Erro ao buscar os agendamentos. Entre em contato com o suporte.')
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
            return(
                <h1>este usuário é eAdmin</h1>
            )
        } else {
            if(user.status === 'Cadastrado'){
                return(
                <MedicalInfo>
                    <Form onSubmit={handleSubmitRegister}>
                        <div className="cab">
                            <img src={Logo} alt="Carol nutri"/>
                            <h1>CarolNutri</h1>
                        </div>
                        <div className="info">
                            <h4>
                                Para solicitar solicitar o agendamento de uma consulta, preencha as informações abaixo.
                            </h4>
                        </div>
                        <Scope path="PersonalInformation">
                            <div>
                                <div>
                                    <Input label="Data de nascimento" type="date" name="dateBirth" placeholder="Data de nascimento" required/>
                                </div>
                                <div>
                                    <Select label="Estado civil" name="maritalStatus" id="maritalStatus" options={[{id: "solteiro", title: 'Solteiro'}, {id: "casado", title: 'Casado'}, {id: "divorciado", title: 'Divorciado'}]} placeholder="Selecione uma opção" required/>  
                                </div>
                                <div>
                                    <Input label="Peso" type="Number" max="400" min="0" step="0.1" name="Weight" placeholder="Peso em kg" required/>
                                </div>
                                <div>
                                    <Input label="Altura" type="Number" max="3.00" min="0" step="0.01" name="height" placeholder="Altura em metros" required/>
                                </div>               
                            </div>
        
                            <div>
                                <div>
                                    <Input label="Profissão" type="text" name="profession" placeholder="Profissão" required/>
                                </div>  
                                <div>
                                    <Select label="Trânsito intestinal" name="IntestinalTransit" id="IntestinalTransit" options={[{id: "1", title: '1'}, {id: "2", title: '2'}, {id: "3", title: '3'}, {id: "4", title: '4'}, {id: "5", title: '5'}, {id: "6", title: '6'}, {id: '7', title: '7'}]} placeholder="Selecione uma opção" required/> 
                                </div>
                                <div>
                                    <Select label="Escala urinária" name="UrinaryStaining" id="UrinaryStaining" options={[{id: "1", title: '1'}, {id: "2", title: '2'}, {id: "3", title: '3'}, {id: "4", title: '4'}, {id: "5", title: '5'}, {id: "6", title: '6'}, {id: '7', title: '7'}, {id: '8', title: '8'}]} placeholder="Selecione uma opção" required/>
                                </div>
                                <div>
                                    <Select label="Gênero fisiológico" name="genre" id="genre" options={[{id: "Mulher", title: 'Mulher'}, {id: "Homem", title: 'Homem'}]} placeholder="Selecione uma opção" required/>
                                </div>
                                <div>
                                    <Select label="Qualidade do sono" name="sleepQuality" id="sleepQuality" options={[{id: "Ruim", title: 'Ruim'}, {id: "Bom", title: 'Bom'}]} placeholder="Selecione uma opção" required/>
                                </div>
                            </div>
        
                            <div>
                                <div>
                                    <Textarea label="Histórico clínico" id="clinicalHistory" name="clinicalHistory" rows="6" cols="30" required />
                                </div>
        
                                <div>
                                    <Textarea label="Objetivo" id="objective" name="objective" rows="6" cols="30" require />
                                </div>
                            </div>
                        </Scope>
                        <button className="Salve" type="submit" onSubmit={e => { e.preventDefault()}} >Cadastrar dados</button>
                    </Form>
                </MedicalInfo>
                )
            } else {
                if(user.status === 'Em espera'){
                    if(schedule.length === 0){
                        return (
                            <Container>
                                <div className="cabe">
                                    <img src={Logo} alt="Carol Nutri"/>
                                    <h1>Explore a agenda de consultas onlines e domiciliares</h1>
                                </div>
                                <header>
                                    <button type="button" onClick={handlePrevDay}> 
                                        <MdChevronLeft size={36} color="#FFF"/>
                                    </button>
                                    <strong>{dateFormatted}</strong>
                                    <button type="button" onClick={handleNextDay}> 
                                        <MdChevronRight size={36} color="#FFF"/>
                                    </button>
                                </header>
                                <h2>Nada agendado para este dia</h2>
                            </Container>
                        )
                    } else {
                        return (
                            <Container>
                                <div className="cabe">
                                    <img src={Logo} alt="Carol Nutri"/>
                                    <h1>Explore os dias dos agendamentos online</h1>
                                </div>
                                <header>
                                    <button type="button" onClick={handlePrevDay}> 
                                        <MdChevronLeft size={36} color="#FFF"/>
                                    </button>
                                    <strong>{dateFormatted}</strong>
                                    <button type="button" onClick={handleNextDay}> 
                                        <MdChevronRight size={36} color="#FFF"/>
                                    </button>
                                </header>
                
                                <ul>
                                    { schedule.map(agendamento => (
                                        <div key={String(agendamento._id)} >
                                            {
                                                agendamento.status ? <Time available ><a href={`https://api.whatsapp.com/send?phone=+558494794472&text=Olá Carol. Vi em seu sistema que você possuí disponibilidade de consulta online para o dia ${agendamento.virtualDate.replace("-", "/").replace("-", "/")} às ${agendamento.hours}. Gostaria de marcar uma consulta nesta data e horário.%20`} target="_blank"><strong >{agendamento.status ? 'Disponível para agendamento' : 'Não Disponível'}</strong><span>{agendamento.hours}</span><p>Click para agendar uma consulta</p></a></Time> : <Time past ><strong >{agendamento.status ? 'Disponível para agendamento' : 'Não Disponível'}</strong><span>{agendamento.hours}</span><p>Horário agendado com um paciente</p></Time>
                                            }
                                        </div>
                                    ))}
                                </ul>
                            </Container>
                        )
                    }
                } else {
                    if(user.status === 'Em acompanhamento'){
                        return(
                            <Container>
                                <div className="cabe">
                                    <img src={Logo} alt="Carol Nutri"/>
                                    <h1>Seu acompanhamento já está disponível</h1>
                                </div>
                                <a className="baixarAcomp" type="submit" onSubmit={e => { e.preventDefault()}} ><AiOutlineCloudDownload size={48}/></a>
                            </Container>
                        )
                    } else {
                        if(user.status === 'Finalizado'){

                        }
                    }   
                }
            }
        }
    }
}