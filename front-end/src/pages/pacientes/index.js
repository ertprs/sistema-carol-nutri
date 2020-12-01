import React from 'react';

import {Container, Form, Paciente} from './styles'
import Logo from '../../assets/logo-branca.svg'
import api from "../../services/api"
import {FiChevronRight} from 'react-icons/fi'


export default function Pacientes(){

    return (
        <>
            <Container>
                <img src={Logo} alt="Carol Nutri"/>
                <h1>Explore a lista dos pacientes.</h1>
            </Container>

            <Form>
                <input placeholder="Informe o nome do usuário"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Paciente>
                <a>
                    <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"/>
                    <div>
                        <div className="conteudo">
                            <strong>Nome</strong>
                            <p>E-mail</p>
                            <span>status</span>
                        </div>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Paciente>
        </>
    )
}