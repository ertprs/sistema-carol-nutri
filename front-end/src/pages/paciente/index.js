import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import {toast} from 'react-toastify'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Form, Input, Check } from '@rocketseat/unform'
import * as Yup from 'yup'
import history from '../../services/history'

import tipo1 from '../../assets/bristol/tipo1.png'
import tipo2 from '../../assets/bristol/tipo2.png'
import tipo3 from '../../assets/bristol/tipo3.png'
import tipo4 from '../../assets/bristol/tipo4.png'
import tipo5 from '../../assets/bristol/tipo5.png'
import tipo6 from '../../assets/bristol/tipo6.png'
import tipo7 from '../../assets/bristol/tipo7.png'

import escala1 from '../../assets/Urina/escala1.png'
import escala2 from '../../assets/Urina/escala2.png'
import escala3 from '../../assets/Urina/escala3.png'
import escala4 from '../../assets/Urina/escala4.png'
import escala5 from '../../assets/Urina/escala5.png'
import escala6 from '../../assets/Urina/escala6.png'
import escala7 from '../../assets/Urina/escala7.png'
import escala8 from '../../assets/Urina/escala8.png'

import api from '../../services/api'

import {Return, UsuarioInfo, Modal, Container} from './styles'

/*
As informações pessoais, dá para deixar, só para a visualização da nutricionista. Já as
informações do usuário, dá para deixar da mesma forma, porém terá um botão para editar.
Clicando no botão, abrirá um modal para editar as informações deste usuário. Ao lado deste botão,
deve ter um botão em vermelho para deletar o usuário. Este botão, também deverá abrir um modal para
a confirmação da exclusão do usuário.
*/

export default function Paciente(){

    const schema = Yup.object().shape({

        name: Yup.string()
            .required("O nome é obrigatório!"),
    
        email: Yup.string()
            .email("Insira um e-mail válido!")
            .required("O e-mail é obrigatório!"),
    
        password: Yup.string()
            .required("A senha é obrigatória!"),
    
        dateBirth: Yup.string()
            .required("Data de nascimento é um campo obrigatório!"),
    
        maritalStatus: Yup.string()
            .required("Estado cívil é um campo obrigatório!"),
    
        phone: Yup.string()
            .required("Telefone é um campo obrigatorio!"),
    
        IntestinalTransit: Yup.string()
            .required("Transito intestinal é um campo obrigatório!"),
    
        sleepQuality: Yup.string()
            .required("Qualidade do sono é um campo obrigatório!"),
    
        Weight: Yup.string()
            .required("Peso é um campo obrigatório!"),
    
        height: Yup.string()
            .required("Altura é um campo obrigatorio!"),
    
        UrinaryStaining: Yup.string()
            .required("Tipo da urina é um campo obrigatorio!")
    
    })

    const { params } = useRouteMatch();
    const [urina, setUrina] = useState([]);
    const [bristol, setBristol] = useState();
    const [paciente, setPaciente] = useState([]);
    const [dataReal, setDataReal] = useState([]);

    useEffect(async () => {
        api.get(`user/user/${params.paciente}`).then((response) => {
            setPaciente(response.data)
        
            var ano  = response.data.PersonalInformation.dateBirth.split("-")[0];
            var mes  = response.data.PersonalInformation.dateBirth.split("-")[1];
            var dia  = response.data.PersonalInformation.dateBirth.split("-")[2];
            setDataReal(dia + '/' + ("0"+mes).slice(-2) + '/' + (ano))

            switch (response.data?.PersonalInformation.IntestinalTransit) {
                case '1':
                    setBristol(tipo1)
                  break;
                case '2':
                    setBristol(tipo2)
                    break;
                case '3':
                    setBristol(tipo3)
                    break;
                case '4':
                    setBristol(tipo4)
                    break;
                case '5':
                    setBristol(tipo5)
                    break;
                case '6':
                    setBristol(tipo6)
                    break;
                case '7':
                    setBristol(tipo7)
                    break;
                default:
                  console.log(`Sorry, we are out of.`);
              }
            
              switch (response.data?.PersonalInformation.UrinaryStaining) {
                case '1':
                    setUrina(escala1)
                  break;
                case '2':
                    setUrina(escala2)
                    break;
                case '3':
                    setUrina(escala3)
                    break;
                case '4':
                    setUrina(escala4)
                    break;
                case '5':
                    setUrina(escala5)
                    break;
                case '6':
                    setUrina(escala6)
                    break;
                case '7':
                    setUrina(escala7)
                    break;
                case '8':
                    setUrina(escala8)
                default:
                  console.log(`Sorry, we are out of.`);
            }

        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
    },[params.paciente])

    console.log(urina)


    async function handlSubmit(data) {
        await api.put(`user/userUp/${paciente._id}` ,{
            PersonalInformation: {
                dateBirth: data.dateBirth,
                maritalStatus: data.maritalStatus,
                phone: data.phone,
                IntestinalTransit: data.IntestinalTransit,
                sleepQuality: data.sleepQuality,
                Weight: data.Weight,
                height: data.height,
                UrinaryStaining: data.UrinaryStaining
            },            
        }).then((response) => {
            setPaciente(response.data)
            toast.success('Dados atualizados.')
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
        
    }


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
                        {paciente.email}
                    </p>
                    <span>
                        status
                    </span>
                </div>
            </header>
            <hr/>
            <div>
                <h2>
                    Iformações pessoais
                </h2>
                <ul >
                    <li>
                        <strong>Data de nascimento:</strong>
                        <p name="dateBirth" placeholder="Data de nascimento" >{dataReal}</p>
                    </li>
                    <li>
                        <strong>Estado civil:</strong>
                        <p name="maritalStatus" placeholder="Data de nascimento" >{paciente.PersonalInformation?.maritalStatus}</p>
                    </li>
                    <li>
                        <strong>Telefone:</strong>
                        <p name="phone" placeholder="Data de nascimento" >{paciente.PersonalInformation?.phone}</p>
                    </li>
                    <li>
                        <strong>Transito intestinal:</strong>
                    </li>
                    <img src={ bristol }/>
                    <li>
                        <strong>Qualidade do sono:</strong>
                        <p name="sleepQuality" placeholder="Data de nascimento" >{paciente.PersonalInformation?.sleepQuality}</p>
                    </li>
                    <li>
                        <strong>Peso:</strong>
                        <p name="Weight" placeholder="Data de nascimento" >{paciente.PersonalInformation?.Weight} kg</p>
                    </li>
                    <li>
                        <strong>Altura:</strong>
                        <p name="height" placeholder="Data de nascimento" >{paciente.PersonalInformation?.height} m</p>
                    </li>
                    <li>
                        <strong>Urina:</strong>
                    </li>
                    <img src={urina}/>

                </ul>
                <a type="button" href="#popup1">Editar <FiChevronRight/></a>
                    <Modal id="popup1">
                        <div ClassName="popup">
                            <h2>Modal de Informação pessoal</h2>
                            <hr/>
                            <a href="#">&times;</a>
                            <Form initialData={paciente.PersonalInformation} onSubmit={handlSubmit}>
                                <ul >
                                    <li>
                                        <Input  type="date" name="dateBirth" placeholder="Data de nascimento"/>
                                    </li>
                                    <li>
                                        <Input  name="maritalStatus" placeholder="status civil"/>
                                    </li>
                                    <li>
                                        <Input  type="text" name="phone" placeholder="Número de telefone"/>
                                    </li>
                                    <li>
                                        <Input  type="text" name="IntestinalTransit" placeholder="Transito intestinal"/>
                                    </li>
                                    <li>
                                        <Input  type="text" name="sleepQuality" placeholder="Qualidade do sono"/>
                                    </li>
                                    <li>
                                        <Input  type="text"  name="Weight" placeholder="Peso"/>
                                    </li>
                                    <li>
                                        <Input  type="text" step=".1" name="height" placeholder="Altura"/>
                                    </li>
                                    <li>
     
                                    </li>
                                    <li>
                                        <button>Salvar alterações</button>
                                    </li>
                                </ul>
                            </Form>
                        </div>
                    </Modal>
                <hr/>
                <h2>
                    Protocolo de serviço
                </h2>
                <ul>
                    <li>
                        Informações
                    </li>
                    <li>
                        Informações
                    </li>
                    <li>
                        Informações
                    </li>
                </ul>
                <a type="button" href="#popup1">Editar <FiChevronRight/></a>
                    <Modal id="popup1">
                        <div ClassName="popup">
                            <h2>Modal de Protocolo de serviço</h2>
                            <a href="#">&times;</a>
                            <p>
                                Thank to pop me out of that button, but now i'm done so you can close this window.
                            </p>
                        </div>
                    </Modal>
                <hr/>
            </div>
        </UsuarioInfo>
    </Container>
    )


}