import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import {toast} from 'react-toastify'
import {FiChevronRight} from 'react-icons/fi'
import {AiFillPlusCircle, AiOutlineRedo} from 'react-icons/ai'

import {Container, Formulario, Paciente, Loading} from './styles'
import Logo from '../../assets/logo-branca.svg'
import api from "../../services/api"
import Tooltip from '../../components/tooltip/index'

import ReactLoading from 'react-loading'

export default class Pacientes extends Component{
    constructor(){
        super();
        this.state = {
            nomeBusca: '',
            pacientes: [],
            loading: true
        }

        this.onChange = (event) => {
            this.setState({
                nomeBusca: event.target.value,
            })
        }

        this.search = async ()  => {
            if(this.state.nomeBusca != ''){
                api.get(`user/userName/${this.state.nomeBusca}`).then((response) => {
                    this.setState({
                        pacientes: response.data,
                        loading: false
                    })
                }).catch((error) => {
                    let erro = JSON.parse(error.request.response)
                    toast.error(erro.error)
                })
            } else {
                toast.error('Insira um paramentro para a busca.')
            }

        }
    }

    async componentDidMount(){
        api.get('/user/users').then((response) => {
            this.setState({
                pacientes: response.data.docs,
                loading: false
            })
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
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

                <Formulario>
                    <input value={this.state.nomeBusca} onChange={this.onChange} name="pesquisa" type="text" placeholder="Informe o nome do usuário"/>
                    <button onClick={this.search} type="button">Pesquisar</button>
                    <Link>
                        <div>
                            <Link to="/registrar-paciente">
                                <AiFillPlusCircle size={60}/>
                                <Tooltip texto="Cadastrar novo usuário."/>
                            </Link>
                        </div>
                    </Link>
                        <div>
                            <AiOutlineRedo size={60} />
                            <Tooltip texto="Atualizar lista de pacientes."/>
                        </div>
                </Formulario>

                {pacientes.map(paciente => (
                    <Paciente>
                        <Link key={String(paciente._id)}  to={`/paciente/${paciente._id}`}>
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
