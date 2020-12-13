import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import {toast} from 'react-toastify'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Form, Input} from '@rocketseat/unform'

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

    const { params } = useRouteMatch();

    const [paciente, setPaciente] = useState([]);

    useEffect(async () => {
        api.get(`user/user/${params.paciente}`).then((response) => {
            setPaciente(response.data)
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
    },[params.paciente])

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
                        <p name="dateBirth" placeholder="Data de nascimento" >{paciente.PersonalInformation?.dateBirth}</p>
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
                        <p name="IntestinalTransit" placeholder="Data de nascimento" >{paciente.PersonalInformation?.IntestinalTransit}</p>
                    </li>
                    <li>
                        <strong>Qualidade do sono:</strong>
                        <p name="sleepQuality" placeholder="Data de nascimento" >{paciente.PersonalInformation?.sleepQuality}</p>
                    </li>
                    <li>
                        <strong>Peso:</strong>
                        <p name="Weight" placeholder="Data de nascimento" >{paciente.PersonalInformation?.dateBirth}</p>
                    </li>
                    <li>
                        <strong>Altura:</strong>
                        <p name="height" placeholder="Data de nascimento" >{paciente.PersonalInformation?.height}</p>
                    </li>
                    <li>
                        <strong>Urina:</strong>
                        <p name="UrinaryStaining" placeholder="Data de nascimento" >{paciente.PersonalInformation?.UrinaryStaining}</p>
                    </li>
                </ul>
                <a type="button" href="#popup1">Editar <FiChevronRight/></a>
                    <Modal id="popup1">
                        <div ClassName="popup">
                            <h2>Modal de Informação pessoal</h2>
                            <hr/>
                            <a href="#">&times;</a>
                            <Form initialData={paciente.PersonalInformation}>
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
                                        <Input  type="text" name="UrinaryStaining" placeholder="Tipo da urina"/>
                                    </li>
                                    <li>
                                        <button>Salvar</button>
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