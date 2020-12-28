import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import {toast} from 'react-toastify'
import * as Yup from 'yup'
import { Form, Input } from '@rocketseat/unform'

import { FiChevronLeft } from 'react-icons/fi'
import {AiOutlineMail, AiOutlinePhone, AiOutlineBell} from 'react-icons/ai'

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

import {Return, UsuarioInfo, Container, medicalInfo} from './styles'

/*
As informações pessoais, dá para deixar, só para a visualização da nutricionista. Já as
informações do usuário, dá para deixar da mesma forma, porém terá um botão para editar.
Clicando no botão, abrirá um modal para editar as informações deste usuário. Ao lado deste botão,
deve ter um botão em vermelho para deletar o usuário. Este botão, também deverá abrir um modal para
a confirmação da exclusão do usuário.
*/

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

export default function Paciente(){

    const { params } = useRouteMatch();

    const [paciente, setPaciente] = useState([]);
    const [informacoesMedicas, setInformacoes] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(async () => {
        await api.get(`user/user/${params.paciente}`).then((response) => {
            setPaciente(response.data)
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
        await api.get(`form//list/${params.paciente}`).then((response) => {
            setInformacoes(response.data)
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
        
        <medicalInfo>
            <Form schema={schema} >
                <div>
                    <Input  name="" placeholder="Nome e sobrenome"/>
                </div>
                <button type="submit">Atualizar perfil</button>
            </Form>
        </medicalInfo> 
    </Container>
    )


}