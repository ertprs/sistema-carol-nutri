import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import {toast} from 'react-toastify'
import { Form, Input, Textarea, Select, Check, Scope } from '@rocketseat/unform'

import { FiChevronLeft } from 'react-icons/fi'
import {AiOutlineMail, AiOutlinePhone, AiOutlineBell, AiFillEdit} from 'react-icons/ai'

import Tooltip from '../../components/tooltip/index'
import api from '../../services/api'

import {Return, UsuarioInfo, Container, MedicalInfo, Loading} from './styles'
import ReactLoading from 'react-loading'

export default function Paciente(){

    const { params } = useRouteMatch();

    const [paciente, setPaciente] = useState([]);
    const [informacoesMedicas, setInformacoesMedicas] = useState({});
    const [edit, setEdit] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        setLoading(true)
        try {
            await api.get(`form/list/${params.paciente}`).then((response) => {
                setInformacoesMedicas(response?.data)
                setLoading(false)
            }).catch((error) => {
                setInformacoesMedicas(undefined)
                let erro = JSON.parse(error.request.response)
                toast.info(erro.error)
            })
            setLoading(true)
            await api.get(`user/user/${params.paciente}`).then((response) => {
                setPaciente(response.data)
                setLoading(false)
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })
        } catch (error) {
            toast.error('Ocorreu um erro ao listar os dados. Entre em contato com o suporte.')
        }
    },[params.paciente])

    async function handleSubmitRegister(data){
        setLoading(true)
        try {
            await api.post(`form/register`, {
                user: params.paciente,
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
    
            }).then((response) => {
                setEdit(true)
                setLoading(false)
                setInformacoesMedicas(response.data)
                toast.success('Dados cadastrados.')
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })
        } catch (error) {
            toast.error('Ocorreu um erro ao registrar os dados. Entre em contato com o suporte.')
        }
    }

    async function handleSubmitEdit(data){
        setLoading(true)
        
        try {
            await api.put(`form/edit/${informacoesMedicas._id}`, {
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
                anthropometricEvaluation: data.anthropometricEvaluation,
                consultaDate: data.consultaDate
    
            }).then((response) => {
                setEdit(true)
                setInformacoesMedicas(response.data)
                toast.success('Dados atualizados')
                setLoading(false)
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })   
        } catch (error) {
            toast.error('Ocorreu um erro ao atualizar os dados. Entre em contato com o suporte.')
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
    }else {
        if(!informacoesMedicas){
            return (
                <Container>
                    <Return>
                        <Link to="/pacientes">
                            <FiChevronLeft/>
                            Voltar
                        </Link>
                    </Return>
            
                    <UsuarioInfo>
                        <header>
                            <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"/>
                            <div>
                                <strong>
                                    {paciente.name}
                                </strong>
                                <p>
                                    <AiOutlineMail/> {paciente.email}
                                </p>
                                <span>
                                <AiOutlinePhone size={18}/> {paciente.phone}
                                </span>
                                <br/>
                                <span>
                                <AiOutlineBell/> {paciente.status}
                                </span>
                            </div>
                        </header>
                        <hr/>
                    </UsuarioInfo>
        
                    <MedicalInfo>
                        <Form onSubmit={handleSubmitRegister}>
                            <h4>1. INFORMAÇÕES PESSOAIS</h4>
                            <Scope path="PersonalInformation">
                                <div>
                                    <div>
                                        <Input label="Data de nascimento" type="date" name="dateBirth" placeholder="Data de nascimento" required/>
                                    </div>
                                    <div>
                                        <Select label="Estado civil" name="maritalStatus" id="maritalStatus" options={[{id: "solteiro", title: 'Solteiro'}, {id: "casado", title: 'Casado'}, {id: "divorciado", title: 'Divorciado'}]} placeholder="Selecione uma opção"/>  
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
                                        <Input label="Profissão" type="text" name="profession" placeholder="Profissão" />
                                    </div>  
                                    <div>
                                        <Select label="Trânsito intestinal" name="IntestinalTransit" id="IntestinalTransit" options={[{id: "1", title: '1'}, {id: "2", title: '2'}, {id: "3", title: '3'}, {id: "4", title: '4'}, {id: "5", title: '5'}, {id: "6", title: '6'}, {id: '7', title: '7'}]} placeholder="Selecione uma opção" /> 
                                    </div>
                                    <div>
                                        <Select label="Escala urinária" name="UrinaryStaining" id="UrinaryStaining" options={[{id: "1", title: '1'}, {id: "2", title: '2'}, {id: "3", title: '3'}, {id: "4", title: '4'}, {id: "5", title: '5'}, {id: "6", title: '6'}, {id: '7', title: '7'}, {id: '8', title: '8'}]} placeholder="Selecione uma opção" />
                                    </div>
                                    <div>
                                        <Select label="Gênero fisiológico" name="genre" id="genre" options={[{id: "Mulher", title: 'Mulher'}, {id: "Homem", title: 'Homem'}]} placeholder="Selecione uma opção" required/>
                                    </div>
                                    <div>
                                        <Select label="Qualidade do sono" name="sleepQuality" id="sleepQuality" options={[{id: "Ruim", title: 'Ruim'}, {id: "Bom", title: 'Bom'}]} placeholder="Selecione uma opção" />
                                    </div>
                                </div>
            
                                <div>
                                    <div>
                                        <Textarea label="Histórico clínico" id="clinicalHistory" name="clinicalHistory" rows="6" cols="30">
                                        </Textarea>
                                    </div>
            
                                    <div>
                                        <Textarea label="Objetivo" id="objective" name="objective" rows="6" cols="30">
                                        </Textarea>
                                    </div>
                                </div>
                            </Scope>
                            <hr/>
        
                            <h4>2. SEMIOLOGIA NUTRICIONAL</h4>
                            <Scope path="nutritionalSemiology">
                                <h5>2.1 ALTERAÇÃO DE PESO</h5>
                                <Scope path="weightChanges">
                                    <div>
                                        <div>
                                            <Select label="Tipo" name="kgChanges" id="kgChanges" options={[{id: "PerdaPeso", title: 'Perda de Peso'}, {id: "GanhoPeso", title: 'Ganho de Peso'}]} placeholder="Selecione uma opção" placeholder="Selecione uma opção"/>
                                        </div>
                                        <div>
                                            <Input label="Quantidade" type="Number" max="400" step="0.1" name="obsWeight" placeholder="Peso em kg" />
                                        </div>               
                                    </div>
                                </Scope>
            
                                <Scope path="physicalExam">
                                    <h5>2.2 EXAME FÍSICO</h5>
                                    <div>
                                        <div>
                                            <Check label="Pele ressecada"  id="drySkin" name="drySkin" />
                                        </div>
                
                                        <div>
                                            <Check label="Umidade das mucosas"  id="mucousMoisture" name="mucousMoisture"/>
                                        </div>
                                        <div>
                                            <Check label="Queda de cabelo"  id="lossOfHair" name="lossOfHair"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <Check label="Edema"  id="edema" name="edema"/>
                                        </div>
                                        <div>
                                            <Check label="Fraqueza" id="weakness" name="weakness"/>
                                        </div>
                                        <div>
                                            <Check label="Palidez conjutival" defaultChecked="sim" id="conjunctivalPallor" name="conjunctivalPallor"/>
                                        </div>
                                        <div>
                                            <Check label="Unhas quebradiças" id="koilonychicNails" name="koilonychicNails"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <Textarea label="Observação" id="obsPhysicalExam" name="obsPhysicalExam" rows="6" cols="30">
                                            </Textarea>
                                        </div>
                                    </div>
                                </Scope>
                                <h5>2.3 ALTERAÇÃO NO APARELHO DIGESTIVO</h5>
    
                                <Scope path="disgestiveSystem">
                                    <div>
                                        <div>
                                            <Check label="Má digestão" id="dyspepsia" name="dyspepsia" />
                                        </div>
                
                                        <div>
                                            <Check label="Dores estomacais" id="stomachPains" name="stomachPains"/>
                                        </div>
                                        <div>
                                            <Check label="Nauseas" id="nausea" name="nausea"/>
                                        </div>
                
                                        <div>
                                            <Check label="Vômitos" id="vomiting" name="vomiting"/>
                                        </div>
                                        <div>
                                            <Check label="Dificuldade de engolir" id="dysphagia" name="dysphagia"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <Textarea label="Observação" id="obsDisgestiveSystem" name="obsDisgestiveSystem" rows="6" cols="30">
                                            </Textarea>
                                        </div>
                                    </div>
                                </Scope>
                                <h5>2.4 ALTERAÇÕES INTESTINAIS</h5>
                                <Scope path="intestinalChanges">
                                    <div>
                                        <div>
                                            <Check label="Diarreia" id="diarreia" name="diarreia"/>
                                        </div>
                                        <div>
                                            <Check label="Constipação" id="cold" name="cold"/>
                                        </div>
                                        <div>
                                            <Textarea label="Observação" id="obsIntestinalChanges" name="obsIntestinalChanges" rows="6" cols="30">
                                            </Textarea>
                                        </div>
                                    </div>
                                </Scope>
                            </Scope>
                            <hr/>
        
                            <h4>3. CONSUMO DE ÁGUA</h4>
                            <div>
                                <div>
                                    <Textarea labe="Descrição" id="waterConsumption" name="waterConsumption" rows="6" cols="30">
                                    </Textarea>
                                </div>
                            </div>
                            <hr/>
            
                            <h4>4. ALERGIAS E INTOLERÂNCIAS</h4>
                            <Scope path="allergiesAndIntolerances">
                                <div>
                                    <div>
                                        <Textarea label="Alergia alimentar" id="foodAllergy" name="foodAllergy" rows="6" cols="30">
                                        </Textarea>
                                    </div>
            
                                    <div>
                                        <Textarea label="Outras alergias" id="otherAllergies" name="otherAllergies" rows="6" cols="30">
                                        </Textarea>
                                    </div>
            
                                    <div>
                                        <Textarea label="Intolerâncias" id="intolerances" name="intolerances" rows="6" cols="30">
                                        </Textarea>
                                    </div>
                                </div>
                            </Scope>
                            <hr/>
        
                            <h4>5. USO DE MEDICAMENTOS/SUPLEMENTOS</h4>
                            <Scope path="useOfMedicines">
                                <div>
                                    <div>
                                        <Textarea label="Medicamentos" id="medicinesOrSupplements" placeholder="Exemplo: whey; creatina; complexo b..." name="medicinesOrSupplements" rows="6" cols="30"/>
                                    </div>
                                    <div>
                                        <Textarea label="Doses" id="dose" placeholder="Dose correspondente ao medicamento do campo anterior" name="dose" rows="6" cols="30"/>
                                    </div>
                                    <div>
                                        <Textarea label="Horários" id="schedule" placeholder="O horário de cada medicamento informado no campo anterior" name="schedule" rows="6" cols="30"/>
                                    </div>
                                </div>
                            </Scope>
                            <hr/>
        
                            <h4>6. ATIVIDADE FÍSICA</h4>
                            <Scope path="physicalActivity">
                                <div>
                                    <div>
                                        <Check label="Pratica atividade física" id="physicalActivityYesNo" name="physicalActivityYesNo"/>
                                    </div>
                                    <div>
                                        <Textarea label="Descrição da frequência" id="frequencyActivity" name="frequencyActivity" rows="6" cols="30">
                                        </Textarea>
                                    </div>
                                </div>
                            </Scope>
                            <hr/>
        
                            <h4>7. BEBIDA ALCOÓLICA</h4>
                            <Scope path="physicalActivity">
                                <div>
                                    <div>
                                        <Check label="Ingestão de bebida alcoólica" id="yesNoBeverage" name="yesNoBeverage"/>
                                    </div>
                                    <div>
                                        <Textarea label="Descrição da frequência" id="frequencyBeverage" name="frequencyBeverage" rows="6" cols="30">
                                        </Textarea>
                                    </div>
                                </div>
                            </Scope>
                            <hr/>
        
                            <h4>8. TABAGISMO</h4>                    
                            <div>
                                <div>
                                    <Check label="Fumante" id="smoking" name="smoking"/>
                                </div>
                            </div>
                            <hr/>
        
                            <h4>9. HORÁRIOS</h4>
                            <Scope path="physicalActivity">
                                <div>
                                    <div>
                                        <Input label="Acorda às" type="time" name="wakeUp" />
                                    </div>
                                    <div>
                                        <Input label="Dorme às" type="time" name="profession" />
                                    </div>
                                    <div>
                                        <Input label="Atividade física às" type="time" name="physicalActivity" />
                                    </div> 
                                </div>
                            </Scope>
                            <hr/>
        
                            <h4>10. AVALIAÇÃO DIETÉTICA</h4>
                            <Scope path="dietaryEvaluation">
                                <div>
                                    <div>
                                        <Textarea label="Refeições local/horários" id="mealAndScheduleAndLocal" name="mealAndScheduleAndLocal" rows="6" cols="30"/>
                                    </div>
                                    <div>
                                        <Textarea label="Alimentos" placeholder="Alimentos correspondente a cada refeição" id="foods" name="foods" rows="6" cols="30"/>
                                    </div>
                                    <div>
                                        <Textarea label="Quantidades" placeholder="Quantidade referente a cada alimento adicionado" id="quantities" name="quantities" rows="6" cols="30"/>
                                    </div>
                                </div>
                            </Scope>

                            <h5>10.1. PREFERÊNCIAS E AVERSÕES</h5>
                            <Scope path="preferencesAndAversions">
                                <div>
                                    <div>
                                        <Textarea label="Preferências" placeholder="Lista de preferências" id="preferences" name="preferences" rows="6" cols="30"/>
                                    </div>
                                    <div>
                                        <Textarea label="Aversões" placeholder="Lista de aversões" id="aversions" name="aversions" rows="6" cols="30"/>
                                    </div>
                                </div>
                            </Scope>
    
                            <h5>10.2. ALTERAÇÕES DA INGESTÃO ALIMENTAR</h5>
                            <Scope path="foodIngestion">
                                <div>
                                    <div>
                                    <Textarea label="Inapetência" id="Inapetência" name="frequencyBeverage" rows="6" cols="30">
                                        </Textarea>
                                    </div>
                                    <div>
                                        <Textarea label="Hiperfagia" id="frequencyBeverage" name="frequencyBeverage" rows="6" cols="30">
                                        </Textarea>
                                    </div>
                                </div>
                            </Scope>
                            <hr/>
    
                            <h4>11. AVALIAÇÃO ANTROPOMETRICA</h4>
                            <Scope path="anthropometricEvaluation">
                                <div>
                                    <div>
                                        <Input label="Paramêtros" type="date" name="date" placeholder="Data" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Input label="Dobra cutânea torácica" type="Number" max="400" min="0" step="0.1" name="ThoracicSkinfold" placeholder="Em cetímetros" />
                                    </div>
                                    <div>
                                        <Input label="Circunferência da cintura" type="Number" max="400" min="0" step="0.1" name="waist" placeholder="Em cetímetros" />
                                    </div>
                                    <div>
                                        <Input label="Circunferência do braço" type="Number" max="400" min="0" step="0.1" name="arm" placeholder="Em cetímetros" />
                                    </div>
                                    <div>
                                        <Input label="Circunferência do quadril" type="Number" max="400" min="0" step="0.1" name="hip" placeholder="Em cetímetros" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Input label="Dobra cutânea tricipital" type="Number" max="400" min="0" step="0.1" name="tricepsSkinfold" placeholder="Em cetímetros" />
                                    </div>
                                    <div>
                                        <Input label="Dobra cutânea axilar média" type="Number" max="400" min="0" step="0.1" name="mediumAxillarySkinfold" placeholder="Em cetímetros" />
                                    </div>
                                    <div>
                                        <Input label="Dobra cutânea peitoral" type="Number" max="400" min="0" step="0.1" name="breastplateSkinfold" placeholder="Em cetímetros" />
                                    </div>
                                    <div>
                                        <Input label="Dobra cutânea suprailíaca" type="Number" max="400" min="0" step="0.1" name="suprailiacSkinfold" placeholder="Em cetímetros" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Input label="Dobra cutânea subescapular" type="Number" max="400" min="0" step="0.1" name="subscapularSkinfold" placeholder="Em cetímetros" />
                                    </div>
                                    <div>
                                        <Input label="Dobra cutânea bicipital" type="Number" max="400" min="0" step="0.1" name="bicepsSkinfold" placeholder="Em cetímetros" />
                                    </div>
                                    <div>
                                        <Input label="Dobra cutânea abdominal" type="Number" max="400" min="0" step="0.1" name="abdominalSkinfold" placeholder="Em cetímetros" />
                                    </div>
                                    <div>
                                        <Input label="Dobra cutânea coxa" type="Number" max="400" min="0" step="0.1" name="thighSkinfold" placeholder="Em cetímetros" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Input label="Dobra cutânea panturrilha" type="Number" max="400" min="0" step="0.1" name="calfSkinfold" placeholder="Em cetímetros" />
                                    </div>
                                    <div>
                                        <Input label="Panturrilha" type="Number" max="400" min="0" step="0.1" name="calf" placeholder="Em cetímetros" />
                                    </div>
                                    <div>
                                        <Input label="Nível de atividade física" type="Number" max="400" min="0" step="0.1" name="NAF" placeholder="Em cetímetros"/>
                                    </div>
                                    <div>
                                        <Input label="Peso atual" type="Number" max="400" min="0" step="0.1" name="NAF" placeholder="Em kg"/>
                                    </div>
                                </div>
                            </Scope>
                            <hr/>
                            <div>
                                <div>
                                    <Input label="Data da consulta" type="date" name="consultaDate" disabled />
                                </div>
                            </div>
                            <button className="Salve" type="submit" onSubmit={e => { e.preventDefault()}} >Cadastrar dados</button>
                        </Form>
                    </MedicalInfo>
                </Container>
                )
        } else {
            return (
                <Container>
                    <Return>
                        <Link to="/pacientes">
                            <FiChevronLeft/>
                            Voltar
                        </Link>
                    </Return>
            
                    <UsuarioInfo>
                        <header>
                            <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"/>
                            <div>
                                <strong>
                                    {paciente.name}
                                </strong>
                                <p>
                                    <AiOutlineMail/> {paciente.email}
                                </p>
                                <span>
                                <AiOutlinePhone size={18}/> {paciente.phone}
                                </span>
                                <br/>
                                <span>
                                <AiOutlineBell/> {paciente.status}
                                </span>
                            </div>
                        </header>
                        <hr/>
                    </UsuarioInfo>
        
                    <MedicalInfo>
                        <button className="Edit" onClick={handleClick}><AiFillEdit size={20}/><Tooltip texto="Editar informações"/></button>
                        <Form onSubmit={handleSubmitEdit} initialData={informacoesMedicas}>
                            <h4>1. INFORMAÇÕES PESSOAIS</h4>
                            <Scope path="PersonalInformation">
                                <div>
                                    <div>
                                        {
                                            edit ? <Input label="Data de nascimento" type="date" name="dateBirth" placeholder="Data de nascimento" disabled/> : <Input label="Data de nascimento" type="date" name="dateBirth" placeholder="Data de nascimento" />
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Estado civil" name="maritalStatus" id="maritalStatus" placeholder="Sem informação" disabled/> : <Select label="Estado civil" name="maritalStatus" id="maritalStatus" options={[{id: "Solteiro", title: 'Solteiro'}, {id: "Casado", title: 'Casado'}, {id: "Divorciado", title: 'Divorciado'}]} placeholder="Selecione uma opção" />
                                        }  
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Peso" type="Number" max="400" min="0" step="0.1" name="Weight" placeholder="Peso em kg" disabled/> : <Input label="Peso" type="Number" max="400" min="0" step="0.1" name="Weight" placeholder="Peso em kg" />
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Altura" type="Number" max="3.00" min="0" step="0.01" name="height" placeholder="Sem informação" disabled /> : <Input label="Altura" type="Number" max="3.00" min="0" step="0.01" name="height" placeholder="Altura em metros" />
                                        }
                                    </div>               
                                </div>
                                <div>
                                    <div>
                                        {
                                            edit ? <Input label="Profissão" type="text" name="profession" placeholder="Profissão" disabled/> : <Input label="Profissão" type="text" name="profession" placeholder="Profissão" />
                                        }
                                        
                                    </div>  
                                    <div>
                                        {
                                            edit ? <Input label="Trânsito intestinal" name="IntestinalTransit" id="IntestinalTransit"  placeholder="Sem informação" disabled/> : <Select label="Transito intestinal" name="IntestinalTransit" id="IntestinalTransit" options={[{id: "1", title: '1'}, {id: "2", title: '2'}, {id: "3", title: '3'}, {id: "4", title: '4'}, {id: "5", title: '5'}, {id: "6", title: '6'}, {id: '7', title: '7'}]} placeholder="Selecione uma opção" />
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input  label="Escala urinária" name="UrinaryStaining" id="UrinaryStaining" placeholder="Sem informação" disabled/> : <Select  label="Escala urinaria" name="UrinaryStaining" id="UrinaryStaining" options={[{id: "1", title: '1'}, {id: "2", title: '2'}, {id: "3", title: '3'}, {id: "4", title: '4'}, {id: "5", title: '5'}, {id: "6", title: '6'}, {id: '7', title: '7'}, {id: '8', title: '8'}]} placeholder="Selecione uma opção" />
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Gênero fisiológico" name="genre" id="genre" placeholder="Sem informação"  disabled/> : <Select label="Genero fisiologico" name="genre" id="genre" options={[{id: "Mulher", title: 'Mulher'}, {id: "Homem", title: 'Homem'}]} placeholder="Selecione uma opção" />
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Qualidade do sono" name="sleepQuality" id="sleepQuality" placeholder="Sem informação" disabled/> : <Select label="Qualidade do sono" name="sleepQuality" id="sleepQuality" options={[{id: "Ruim", title: 'Ruim'}, {id: "Bom", title: 'Bom'}]} placeholder="Selecione uma opção" />
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {
                                            edit ? <Textarea label="Histórico clínico" id="clinicalHistory" name="clinicalHistory" rows="6" cols="30" disabled/> : <Textarea label="Historico clínico" id="clinicalHistory" name="clinicalHistory" rows="6" cols="30" />
                                        }
                                    </div>
            
                                    <div>
                                        {
                                            edit ? <Textarea label="Objetivo" id="objective" name="objective" rows="6" cols="30" disabled /> : <Textarea label="Objetivo" id="objective" name="objective" rows="6" cols="30" />
                                        }
                                    </div>
                                </div>
                            </Scope>
                            <hr/>
    
                        <h4>2. SEMIOLOGIA NUTRICIONAL</h4>
                        <Scope path="nutritionalSemiology">
                            <h5>2.1 ALTERAÇÃO DE PESO</h5>
                            <Scope path="weightChanges">
                                <div>
                                    <div>
                                        {
                                            edit ? <Input label="Tipo" name="kgChanges" id="kgChanges" placeholder="Sem informação" disabled/> : <Select label="Tipo" name="kgChanges" id="kgChanges" options={[{id: "PerdaPeso", title: 'Perda de Peso'}, {id: "GanhoPeso", title: 'Ganho de Peso'}]} placeholder="Selecione uma opção" placeholder="Selecione uma opção"/>
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Quantidade" type="Number" max="400" step="0.1" name="obsWeight" placeholder="Sem informação" disabled /> : <Input label="Quantidade" type="Number" max="400" step="0.1" name="obsWeight" placeholder="Peso em kg" />
                                        }
                                    </div>               
                                </div>
                            </Scope>
    
                            <h5>2.2 EXAME FÍSICO</h5>
                            <Scope path="physicalExam">
                                <div>
                                    <div>
                                        {
                                            edit ? <Check label="Pele ressecada"  id="drySkin" name="drySkin" disabled /> : <Check label="Pele ressecada"  id="drySkin" name="drySkin" />
                                        }
                                    </div>
            
                                    <div>
                                        {
                                            edit ? <Check label="Umidade das mucosas"  id="mucousMoisture" name="mucousMoisture" disabled /> : <Check label="Umidade das mucosas"  id="mucousMoisture" name="mucousMoisture"/>
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Check label="Queda de cabelo"  id="lossOfHair" name="lossOfHair" disabled /> : <Check label="Queda de cabelo"  id="lossOfHair" name="lossOfHair"/>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {
                                            edit ? <Check label="Edema"  id="edema" name="edema" disabled /> : <Check label="Edema"  id="edema" name="edema"/>
                                        }
                                        
                                    </div>
                                    <div>
                                        {
                                            edit ? <Check label="Fraqueza" id="weakness" name="weakness" disabled/> : <Check label="Fraqueza" id="weakness" name="weakness"/>
                                        }
                                        
                                    </div>
                                    <div>
                                        {
                                            edit ? <Check label="Palidez conjutival" defaultChecked="sim" id="conjunctivalPallor" name="conjunctivalPallor" disabled /> : <Check label="Palidez conjutival" defaultChecked="sim" id="conjunctivalPallor" name="conjunctivalPallor"/>
                                        }
                                        
                                    </div>
                                    <div>
                                        {
                                            edit ? <Check label="Unhas quebradiças" id="koilonychicNails" name="koilonychicNails" disabled /> : <Check label="Unhas quebradiças" id="koilonychicNails" name="koilonychicNails"/>
                                        }
                                        
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {
                                            edit ? <Textarea label="Observação" id="obsPhysicalExam" name="obsPhysicalExam" rows="6" cols="30" disabled/> : <Textarea label="Observação" id="obsPhysicalExam" name="obsPhysicalExam" rows="6" cols="30"/>
                                        }
                                    </div>
                                </div>
                            </Scope>
    
                            <h5>2.3 ALTERAÇÃO NO APARELHO DIGESTIVO</h5>
                            <Scope path="disgestiveSystem">
                                <div>
                                    <div>
                                        {
                                            edit ? <Check label="Má digestão" id="dyspepsia" name="dyspepsia" disabled /> : <Check label="Má digestão" id="dyspepsia" name="dyspepsia" />
                                        }
                                        
                                    </div>
            
                                    <div>
                                        {
                                            edit ? <Check label="Dores estomacais" id="stomachPains" name="stomachPains" disabled /> : <Check label="Dores estomacais" id="stomachPains" name="stomachPains"/>
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Check label="Nauseas" id="nausea" name="nausea" disabled /> : <Check label="Nauseas" id="nausea" name="nausea"/>
                                        }
                                        
                                    </div>
            
                                    <div>
                                        {
                                            edit ? <Check label="Vômitos" id="vomiting" name="vomiting" disabled /> : <Check label="Vômitos" id="vomiting" name="vomiting"/>
                                        }
                                        
                                    </div>
                                    <div>
                                        {
                                            edit ? <Check label="Dificuldade de engolir" id="dysphagia" name="dysphagia" disabled /> : <Check label="Dificuldade de engolir" id="dysphagia" name="dysphagia"/>
                                        }
                                        
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {
                                            edit ? <Textarea label="Observação" id="obsDisgestiveSystem" name="obsDisgestiveSystem" rows="6" cols="30" disabled /> : <Textarea label="Observação" id="obsDisgestiveSystem" name="obsDisgestiveSystem" rows="6" cols="30"/>
                                        }
                                        
                                    </div>
                                </div>
                            </Scope>
        
                            <h5>2.4 ALTERAÇÕES INTESTINAIS</h5>
                            <Scope path="intestinalChanges">
                                <div>
                                    <div>
                                        {
                                            edit ? <Check label="Diarreia" id="diarreia" name="diarreia" disabled/> : <Check label="Diarreia" id="diarreia" name="diarreia" />
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Check label="Constipação" id="cold" name="cold" disabled/> : <Check label="Constipação" id="cold" name="cold" />
                                        }
                                        
                                    </div>
                                    <div>
                                        {
                                            edit ? <Textarea label="Observação" id="obsIntestinalChanges" name="obsIntestinalChanges" rows="6" cols="30" disabled /> : <Textarea label="Observação" id="obsIntestinalChanges" name="obsIntestinalChanges" rows="6" cols="30" />
                                        }
                                        
                                    </div>
                                </div>
                            </Scope>
                        </Scope>
                            <hr/>
    
                            <h4>3. CONSUMO DE ÁGUA</h4>
                            <div>
                                <div>
                                    {
                                        edit ? <Textarea labe="Descrição" id="waterConsumption" name="waterConsumption" rows="6" cols="30" disabled /> : <Textarea labe="Descrição" id="waterConsumption" name="waterConsumption" rows="6" cols="30"/>
                                    }
                                </div>
                            </div>
                            <hr/>
            
                            <h4>4. ALERGIAS E INTOLERÂNCIAS</h4>
                            <Scope path="allergiesAndIntolerances">
                                <div>
                                    <div>
                                    {
                                        edit ? <Textarea label="Alergia alimentar" id="foodAllergy" name="foodAllergy" rows="6" cols="30" disabled /> : <Textarea label="Alergia alimentar" id="foodAllergy" name="foodAllergy" rows="6" cols="30" />
                                    }
                                    </div>
            
                                    <div>
                                        {
                                            edit ? <Textarea label="Outras alergias" id="otherAllergies" name="otherAllergies" rows="6" cols="30" disabled /> : <Textarea label="Outras alergias" id="otherAllergies" name="otherAllergies" rows="6" cols="30"/>
                                        }
                                        
                                    </div>
            
                                    <div>
                                        {
                                            edit ? <Textarea label="Intolerâncias" id="intolerances" name="intolerances" rows="6" cols="30" disabled /> : <Textarea label="Intolerâncias" id="intolerances" name="intolerances" rows="6" cols="30" />
                                        }
                                    </div>
                                </div>
                            </Scope>
                            <hr/>
        
                            <h4>5. USO DE MEDICAMENTOS/SUPLEMENTOS</h4>
                                <Scope path="useOfMedicines">
                                    <div>
                                        <div>
                                            {
                                                edit ? <Textarea label="Medicamentos" id="medicinesOrSupplements" name="medicinesOrSupplements" rows="6" cols="30" disabled/> : <Textarea label="Refeições local/horários" id="medicinesOrSupplements" name="medicinesOrSupplements" rows="6" cols="30"/>
                                            }
                                        </div>
                                        <div>
                                            {
                                                edit ? <Textarea label="Doses" placeholder="Alimentos correspondente a cada refeição" id="dose" name="dose" rows="6" cols="30" disabled/> :  <Textarea label="Alimentos" placeholder="Alimentos correspondente a cada refeição" id="dose" name="dose" rows="6" cols="30"/>
                                            }
                                        </div>
                                        <div>
                                            {
                                                edit ? <Textarea label="Horários" placeholder="Quantidade referente a cada alimento adicionado" id="schedule" name="schedule" rows="6" cols="30" disabled/> : <Textarea label="Quantidades" placeholder="Quantidade referente a cada alimento adicionado" id="schedule" name="schedule" rows="6" cols="30"/>
                                            }
                                        </div>
                                    </div>
                                </Scope>
                            <hr/>
        
                            <h4>6. ATIVIDADE FÍSICA</h4>
                            <Scope path="physicalActivity">
                                <div>
                                    <div>
                                        {
                                            edit ? <Check label="Pratica atividade física" id="physicalActivityYesNo" name="physicalActivityYesNo" disabled/> : <Check label="Pratica atividade física" id="physicalActivityYesNo" name="physicalActivityYesNo"/>
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Textarea label="Descrição da frequência" id="frequencyActivity" name="frequencyActivity" rows="6" cols="30" disabled /> : <Textarea label="Descrição da frenquência" id="frequencyActivity" name="frequencyActivity" rows="6" cols="30" />
                                        }
                                    </div>
                                </div>
                            </Scope>
                            <hr/>
        
                            <h4>7. BEBIDA ALCOÓLICA</h4>
                            <Scope path="alcoholicBeverage">
                                <div>
                                    <div>
                                        {
                                            edit ? <Check label="Ingestão de bebida alcoólica" id="yesNoBeverage" name="yesNoBeverage" disabled/> : <Check label="Ingestão de bebida alcoólica" id="yesNoBeverage" name="yesNoBeverage"/>
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Textarea label="Descrição da frequência" id="frequencyBeverage" name="frequencyBeverage" rows="6" cols="30" disabled /> : <Textarea label="Descrição da frenquência" id="frequencyBeverage" name="frequencyBeverage" rows="6" cols="30" />
                                        }
                                    </div>
                                </div>
                            </Scope>
                            <hr/>
        
                            <h4>8. TABAGISMO</h4>
                            <div>
                                <div>
                                        <Scope path="PersonalInformation">
                                        {
                                            edit ? <Check label="Fumante" id="smoking" name="smoking" disabled /> : <Check label="Fumante" id="smoking" name="smoking"/>
                                        }
                                        </Scope>
                                </div>
                            </div>
                            <hr/>
        
                            <h4>9. HORÁRIOS</h4>
                            <Scope path="schedules">
                                <div>
                                    <div>
                                        {
                                            edit ? <Input label="Acorda às" type="time" name="wakeUp" disabled/> : <Input label="Acorda às" type="time" name="wakeUp" />
                                        }
                                        
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Dorme às" type="time" name="sleeps" disabled/> : <Input label="Dorme às" type="time" name="sleeps" />
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Atividade física às" type="time" name="physicalActivity" disabled /> : <Input label="Atividade física às" type="time" name="physicalActivity"  />
                                        }
                                    </div> 
                                </div>
                            </Scope>
                            <hr/>
        
                            <h4>10. AVALIAÇÃO DIETÉTICA</h4>
                                <Scope path="dietaryEvaluation">
                                    <div>
                                        <div>
                                            {
                                                edit ? <Textarea label="Refeições local/horários" id="mealAndScheduleAndLocal" name="mealAndScheduleAndLocal" rows="6" cols="30" disabled/> : <Textarea label="Refeições local/horários" id="mealAndScheduleAndLocal" name="mealAndScheduleAndLocal" rows="6" cols="30"/>
                                            }
                                        </div>
                                        <div>
                                            {
                                                edit ? <Textarea label="Alimentos" placeholder="Alimentos correspondente a cada refeição" id="foods" name="foods" rows="6" cols="30" disabled/> :  <Textarea label="Alimentos" placeholder="Alimentos correspondente a cada refeição" id="foods" name="foods" rows="6" cols="30"/>
                                            }
                                        </div>
                                        <div>
                                            {
                                                edit ? <Textarea label="Quantidades" placeholder="Quantidade referente a cada alimento adicionado" id="quantities" name="quantities" rows="6" cols="30" disabled/> : <Textarea label="Quantidades" placeholder="Quantidade referente a cada alimento adicionado" id="quantities" name="quantities" rows="6" cols="30"/>
                                            }
                                        </div>
                                    </div>
                                </Scope>
                            <h5>10.1. PREFERÊNCIAS E AVERSÕES</h5>
                                <Scope path="preferencesAndAversions">
                                    <div>
                                        <div>
                                            {
                                                edit ? <Textarea label="Refeições local/horários" id="preferences" name="preferences" rows="6" cols="30" disabled/> : <Textarea label="Refeições local/horários" id="preferences" name="preferences" rows="6" cols="30"/>
                                            }
                                        </div>
                                        <div>
                                            {
                                                edit ? <Textarea label="Alimentos" placeholder="Alimentos correspondente a cada refeição" id="aversions" name="aversions" rows="6" cols="30" disabled/> :  <Textarea label="Alimentos" placeholder="Alimentos correspondente a cada refeição" id="aversions" name="aversions" rows="6" cols="30"/>
                                            }
                                        </div>
                                    </div>
                                </Scope>
                            <hr/>
    
                            <h5>10.2. ALTERAÇÕES DA INGESTÃO ALIMENTAR</h5>
                            <Scope path="foodIngestion">
                                <div>
                                    <div>
                                        {
                                            edit ? <Textarea label="Inapetência" id="Inapetência" name="frequencyBeverage" rows="6" cols="30" disabled></Textarea> : <Textarea label="Inapetência" id="Inapetência" name="frequencyBeverage" rows="6" cols="30"></Textarea>
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Textarea label="Hiperfagia" id="frequencyBeverage" name="frequencyBeverage" rows="6" cols="30" disabled></Textarea> : <Textarea label="Hiperfagia" id="frequencyBeverage" name="frequencyBeverage" rows="6" cols="30"></Textarea>
                                        }
                                    </div>
                                </div>
                            </Scope>
                            <hr/>
    
                            <h4>11. AVALIAÇÃO ANTROPOMETRICA</h4>
                            <Scope path="anthropometricEvaluation">
                                <div>
                                    <div>
                                        {
                                            edit ? <Input label="Paramêtros" type="date" name="date" placeholder="Data" disabled /> : <Input label="Paramêtros" type="date" name="date" placeholder="Data" />
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {
                                            edit ? <Input label="Dobra cutânea torácica" type="Number" max="400" min="0" step="0.1" name="ThoracicSkinfold" placeholder="Em cetímetros" disabled /> : <Input label="Dobra cutânea torácica" type="Number" max="400" min="0" step="0.1" name="ThoracicSkinfold" placeholder="Em cetímetros" />
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Circunferência da cintura" type="Number" max="400" min="0" step="0.1" name="waist" placeholder="Em cetímetros" disabled /> : <Input label="Circunferência da cintura" type="Number" max="400" min="0" step="0.1" name="waist" placeholder="Em cetímetros" />
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Circunferência do braço" type="Number" max="400" min="0" step="0.1" name="arm" placeholder="Em cetímetros" disabled /> : <Input label="Circunferência do braço" type="Number" max="400" min="0" step="0.1" name="arm" placeholder="Em cetímetros" />
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Circunferência do quadril" type="Number" max="400" min="0" step="0.1" name="hip" placeholder="Em cetímetros" disabled /> : <Input label="Circunferência do quadril" type="Number" max="400" min="0" step="0.1" name="hip" placeholder="Em cetímetros" />
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {
                                            edit ? <Input label="Dobra cutânea tricipital" type="Number" max="400" min="0" step="0.1" name="tricepsSkinfold" placeholder="Em cetímetros" disabled /> : <Input label="Dobra cutânea tricipital" type="Number" max="400" min="0" step="0.1" name="tricepsSkinfold" placeholder="Em cetímetros" />
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Dobra cutânea axilar média" type="Number" max="400" min="0" step="0.1" name="mediumAxillarySkinfold" placeholder="Em cetímetros" disabled /> : <Input label="Dobra cutânea axilar média" type="Number" max="400" min="0" step="0.1" name="mediumAxillarySkinfold" placeholder="Em cetímetros" />
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Dobra cutânea peitoral" type="Number" max="400" min="0" step="0.1" name="breastplateSkinfold" placeholder="Em cetímetros" disabled /> : <Input label="Dobra cutânea peitoral" type="Number" max="400" min="0" step="0.1" name="breastplateSkinfold" placeholder="Em cetímetros" />
                                        }
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Dobra cutânea suprailíaca" type="Number" max="400" min="0" step="0.1" name="suprailiacSkinfold" placeholder="Em cetímetros" disabled /> : <Input label="Dobra cutânea suprailíaca" type="Number" max="400" min="0" step="0.1" name="suprailiacSkinfold" placeholder="Em cetímetros" />
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {
                                            edit ? <Input label="Dobra cutânea subescapular" type="Number" max="400" min="0" step="0.1" name="subscapularSkinfold" placeholder="Em cetímetros" disabled /> : <Input label="Dobra cutânea subescapular" type="Number" max="400" min="0" step="0.1" name="subscapularSkinfold" placeholder="Em cetímetros" />
                                        }
                                        
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Dobra cutânea bicipital" type="Number" max="400" min="0" step="0.1" name="bicepsSkinfold" placeholder="Em cetímetros" disabled /> : <Input label="Dobra cutânea bicipital" type="Number" max="400" min="0" step="0.1" name="bicepsSkinfold" placeholder="Em cetímetros" />
                                        }
                                        
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Dobra cutânea abdominal" type="Number" max="400" min="0" step="0.1" name="abdominalSkinfold" placeholder="Em cetímetros" disabled /> : <Input label="Dobra cutânea abdominal" type="Number" max="400" min="0" step="0.1" name="abdominalSkinfold" placeholder="Em cetímetros" />
                                        }
                                        
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Dobra cutânea coxa" type="Number" max="400" min="0" step="0.1" name="thighSkinfold" placeholder="Em cetímetros" disabled /> : <Input label="Dobra cutânea coxa" type="Number" max="400" min="0" step="0.1" name="thighSkinfold" placeholder="Em cetímetros" />
                                        }
                                        
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {
                                            edit ? <Input label="Dobra cutânea panturrilha" type="Number" max="400" min="0" step="0.1" name="calfSkinfold" placeholder="Em cetímetros" disabled/> : <Input label="Dobra cutânea panturrilha" type="Number" max="400" min="0" step="0.1" name="calfSkinfold" placeholder="Em cetímetros" />
                                        }
                                        
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Panturrilha" type="Number" max="400" min="0" step="0.1" name="calf" placeholder="Em cetímetros" disabled /> : <Input label="Panturrilha" type="Number" max="400" min="0" step="0.1" name="calf" placeholder="Em cetímetros" />
                                        }
                                        
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Nível de atividade física" type="Number" max="400" min="0" step="0.1" name="NAF" placeholder="Em cetímetros" disabled/> : <Input label="Nível de atividade física" type="Number" max="400" min="0" step="0.1" name="NAF" placeholder="Em cetímetros"/>
                                        }
                                        
                                    </div>
                                    <div>
                                        {
                                            edit ? <Input label="Peso atual" type="Number" max="400" min="0" step="0.1" name="currentWeight" placeholder="Em kg" disabled/> : <Input label="Peso atual" type="Number" max="400" min="0" step="0.1" name="currentWeight" placeholder="Em kg"/>
                                        }
                                    </div>
                                </div>
                                
                                <hr/>
    
                                <div>
                                    <div>
                                        <div>
                                            <Input label="IMC" name="imc" disabled/>
                                        </div>
                                        <div>
                                            <Input label="Necessidade Hidráulica de água" name="dailyHydraulicNeed" disabled/>
                                        </div>
                                    </div>
                                    <Scope path="energyExpenditure">
                                        <div>
                                            <div>
                                                <Input label="Harris-Benedict" type="Number" name="HarrisBenedict" disabled/>
                                            </div>
                                            <div>
                                                <Input label="FAO/OMS" type="Number" name="faoOms" disabled/>
                                            </div>
                                            <div>
                                                <Input label="IOM" type="Number" name="iom" disabled/>
                                            </div>
                                        </div>
                                    </Scope>
                                </div>
                            </Scope>
                            <hr/>
                            <div>
                                <div>
                                    {
                                        edit ? <Input label="Data da consulta" type="date" name="consultaDate" disabled /> : <Input label="Data da consulta" type="date" name="consultaDate" />
                                    }
                                </div>
                            </div>
    
                            {
                                edit ? <button className="Salve" disabled>Atualizar dados</button> : <button className="Salve" type="submit" onSubmit={e => { e.preventDefault()}} >Atualizar dados</button>
                            }                            
                                
                        </Form>
                    </MedicalInfo>
        
                </Container>
            )
        }
    }
}