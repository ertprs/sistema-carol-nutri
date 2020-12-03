import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import {Container, Form, Paciente, Loading} from './styles'
import Logo from '../../assets/logo-branca.svg'
import api from "../../services/api"
import {FiChevronRight} from 'react-icons/fi'

import ReactLoading from 'react-loading'

export default class Pacientes extends Component{
    state = {
        pacientes: [],
        loading: true
    }

    async componentDidMount(){
        const response = await api.get('/user/users')

        
        this.setState({ 
            pacientes: response.data.docs,
            loading: false
        })

    }

    render(){

        const {pacientes, loading } = this.state

        if (loading){
            return <><Loading><h1>Carregando</h1><ReactLoading  color="#fff" /></Loading></>
        }

        return(
            <>
                <Container>
                    <img src={Logo} alt="Carol Nutri"/>
                    <h1>Explore a lista dos pacientes.</h1>
                </Container>

                <Form>
                    <input placeholder="Informe o nome do usuário"/>
                    <button type="button">Pesquisar</button>
                </Form>


                {pacientes.map(paciente => (
                    <Paciente>
                        <Link key={String(paciente._id)}>
                            <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"/>
                            <div>
                                <div className="conteudo">
                                    <strong>{paciente.name}</strong>
                                    <p>{paciente.email}</p>
                                    <span>status</span>
                                </div>
                            </div>

                            <FiChevronRight size={20}/>
                        </Link>
                    </Paciente>
                ))}
            </>
        )
    }
}  
