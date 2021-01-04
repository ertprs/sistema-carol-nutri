import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import {toast} from 'react-toastify'
import { FiChevronLeft,  FiChevronRight } from 'react-icons/fi'
import { AiOutlineClose, AiFillEdit } from "react-icons/ai";
import { useHistory } from 'react-router-dom'
import { Form, Input, Textarea } from '@rocketseat/unform'
import * as Yup from 'yup'

import api from '../../services/api'
import {Return, ArtigoInfo, Container, Editor} from './styles'
import Tooltip from '../../components/tooltip/index'

export default function Artigo(){

    var history = useHistory()

    const { params } = useRouteMatch();

    const [artigo, setArtigo] = useState([]);
    const [edit, setEdit] = useState(true);

    useEffect(async () => {
        api.get(`artigo/list/${params.artigo}`).then((response) => {
            setArtigo(response.data)
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
    },[params.artigo])

    async function handClick(){
        console.log('entrou na função')
        await api.delete(`artigo/delete/${artigo._id}` ,{
        }).then(() => {
            toast.success('Receita excluída!')
            history.push('/artigos')
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
    }

    const schema = Yup.object().shape({

        title: Yup.string()
            .required("Titulo é obrigatório!"),
    
        description: Yup.string()
            .required("Descrição é obrigatória!"),
    
        link: Yup.string()
            .required("Link é um campo obrigatório!"),
    
    })

    async function handlSubmit(data) {
        console.log(data)
        
        await api.put(`artigo/edit/${artigo._id}` ,{ 
            title: data.title,
            description: data.description,
            link: data.link,
         }).then(async () => {
             toast.success('Artigo atualizado')
             history.push('/artigos')
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

    return (
    <Container>
        <Return>
            <Link to="/artigos">
                <FiChevronLeft/>
                Voltar
            </Link>
        </Return>

        <ArtigoInfo>
            <h1>Informações do artigo</h1>
            <header>
                <div>
                    <strong>
                        {artigo.title}
                    </strong>
                    <p>
                        {artigo.description}
                    </p>
                </div>
            </header>
            <div className="botoes">
                <a href={artigo.link} target="_blank">ver<FiChevronRight/></a>
                <button onClick={handClick} type="button">Excluir <AiOutlineClose size={20} /></button>
            </div>
            <hr/>
        </ArtigoInfo>
        <Editor>
            <div>
                <h2>Editar artigo</h2>
                <button className="Edit" onClick={handleClick}><AiFillEdit size={20}/><Tooltip texto="Habilitar campos para edição"/></button>
            </div>

            <Form schema={schema} onSubmit={handlSubmit} initialData={artigo}>
                {
                    edit ? <Input label="Link do documento" name="link" placeholder="Link do documento do drive" disabled /> : <Input label="Link do documento" name="link" placeholder="Link do documento do drive" />
                }
                {
                    edit ? <Input label="Titulo do artigo"  name="title" placeholder="Ex.: Fungos no alimentos" disabled/> : <Input label="Titulo do artigo"  name="title" placeholder="Ex.: Fungos no alimentos"/>
                }
                {
                    edit ?  <Textarea rows="4" label="Descrição sobre o artigo" name="description" placeholder="Informe um breve descrição sobre artigo" disabled/> : <Textarea rows="4" label="Descrição sobre o artigo" name="description" placeholder="Informe um breve descrição sobre artigo" />
                }
                {
                    edit ? <button disabled>Desabilitado</button> : <button onSubmit={e => { e.preventDefault()}} type="submit" >Atualizar dados</button>
                }
            </Form>
        </Editor>
    </Container>
    )


}