import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import {toast} from 'react-toastify'
import { FiChevronLeft,  FiChevronRight } from 'react-icons/fi'
import { AiOutlineClose, AiFillEdit } from "react-icons/ai";
import { useHistory } from 'react-router-dom'
import { Form, Input, Textarea } from '@rocketseat/unform'
import * as Yup from 'yup'
import ReactLoading from 'react-loading'

import api from '../../services/api'
import {Return, UsuarioInfo, Container, Editor, Loading} from './styles'
import Tooltip from '../../components/tooltip/index'

export default function Receita(){

    var history = useHistory()

    const { params } = useRouteMatch();

    const [Receita, setReceita] = useState([]);
    const [edit, setEdit] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        setLoading(true)
        api.get(`receitas/list/${params.receita}`).then((response) => {
            setReceita(response.data)
            setLoading(false)
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
    },[params.Receita])

    async function handClick(){
        setLoading(true)
        await api.delete(`receitas/delete/${params.receita}` ,{
        }).then(() => {
            setLoading(false)
            toast.success('Receita excluída!')
            history.push('/receitas')
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
    }

    const schema = Yup.object().shape({
        image: Yup.string()
            .required("Titulo é obrigatório!"),

        title: Yup.string()
            .required("Titulo é obrigatório!"),
    
        description: Yup.string()
            .required("Descrição é obrigatória!"),
    
        link: Yup.string()
            .required("Link é um campo obrigatório!"),
    
    })

    async function handlSubmit(data) {
        setLoading(true)
        await api.put(`receitas/edit/${Receita._id}` ,{ 
            title: data.title,
            description: data.description,
            link: data.link,
         }).then(async () => {
            setLoading(false)
             toast.success('Receita atualizado')
             history.push('/receitas')
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })

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
    }else{
        return (
            <Container>
                <Return>
                    <Link to="/receitas">
                        <FiChevronLeft/>
                        Voltar
                    </Link>
                </Return>
        
                <UsuarioInfo>
                    <h1>Informações da receita</h1>
                    <header>
                        <img src={Receita.image}/>
                        <div>
                            <strong>
                                {Receita.title}
                            </strong>
                            <p>
                                {Receita.description}
                            </p>
                        </div>
                    </header>
                    <div className="botoes">
                        <a href={Receita.link} target="_blank">ver<FiChevronRight/></a>
                        <button onClick={handClick} type="button">Excluir <AiOutlineClose size={20} /></button>
                    </div>
                    <hr/>
                </UsuarioInfo>
                <Editor>
                    <div>
                        <h2>Editar receita</h2>
                        <button className="Edit" onClick={handleClick}><AiFillEdit size={20}/><Tooltip texto="Habilitar campos para edição"/></button>
                    </div>
        
                    <Form schema={schema} onSubmit={handlSubmit} initialData={Receita}>
                        {
                            edit ? <Input label="Link do documento" name="link" placeholder="Link do documento do drive" disabled /> : <Input label="Link do documento" name="link" placeholder="Link do documento do drive" />
                        }
                        {
                            edit ? <Input label="Titulo da receita"  name="title" placeholder="Ex.: Bolo de chocolate sem açucar" disabled/> : <Input label="Titulo da receita"  name="title" placeholder="Ex.: Fungos no alimentos"/>
                        }
                        {
                            edit ?  <Textarea rows="4" label="Descrição" name="description" placeholder="Informe um breve descrição sobre a receita" disabled/> : <Textarea rows="4" label="Descrição" name="description" placeholder="Informe um breve descrição sobre a receita" />
                        }
                        {
                            edit ? <button disabled>Desabilitado</button> : <button onSubmit={e => { e.preventDefault()}} type="submit" >Atualizar dados</button>
                        }
                    </Form>
                </Editor>
            </Container>
            )
    }
}