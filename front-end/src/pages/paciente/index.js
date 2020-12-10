import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import {toast} from 'react-toastify'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

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
        const response = await api.get(`user/user/${params.paciente}`)
        setPaciente(response.data)
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
                        Iformações pessoal
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
                                <h2>Modal de Informação pessoal</h2>
                                <a href="#">&times;</a>
                                <p>
                                    Thank to pop me out of that button, but now i'm done so you can close this window.
                                </p>
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