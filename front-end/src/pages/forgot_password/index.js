import React, { useContext } from 'react';
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import {toast} from 'react-toastify'
import { useHistory } from 'react-router-dom'

import logo from '../../assets/logo-branca.svg'
import { Wrapper, Content } from './styles'

import api from '../../services/api'

const schema = Yup.object().shape({
    email: Yup.string()
        .email("Insira um e-mail válido!")
        .required("O e-mail é obrigatório!")
})


export default function ForgotPassword(){

    var history = useHistory()

    
    try {
        async function handlesubmit(data){
            try {
                await api.post('auth/forgot_password'  ,{
                    email: data.email,
                }).then((response) => {

                    toast.success('Token enviado. Verifique sua caixa de e-mail.')
                    history.push('/signin')

                }).catch((err) => {
                    toast.error('Este email já existe!')
                })

            } catch (error) {
                toast.error(error.message)
            }

        }
    
        return (
            <>
                <Wrapper>
                    <Content>
                        <img src={logo} alt="Carol-nutricionista"/>
    
                        <Form schema={schema} onSubmit={handlesubmit}>
                            <p>Informe seu e-mail para enviarmos um token para a recuperação da senha.</p>
                            <Input name="email" type="email" placeholder="Seu e-mail" />
    
                            <button type="submit">Enviar</button>
                        </Form>
                    </Content>
                </Wrapper>
            </>
    
        )
    } catch (error) {
        console.log(error)
    }

}