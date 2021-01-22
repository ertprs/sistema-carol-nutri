import React, { createContext, useCallback, useState, useRef } from "react"
import api from '../services/api'
import {toast} from 'react-toastify'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [data, setData] = useState( async () => {
        const token = localStorage.getItem('@CarolNutri:token')
        var user = localStorage.getItem('@CarolNutri:user')

        try{
            await api.get(`user/user/${user._id}`).then((response) =>{
                user = response.data
                localStorage.setItem('@CarolNutri:user', JSON.stringify(user))
            }).catch((error) => {
                let erro = JSON.parse(error.request.response)
                toast.error(erro.error)
            })
        } catch(error) {
            console.log('Ocorreu um erro, entre em contato co o suporte')
        }

        api.defaults.headers['authorization'] = `Bearer ${token}`

        if(token && user){
            return { token: token, user: JSON.parse(user)}
        }

        return {}
    })


const signIn = useCallback( async ({ email, password}) => {
    try {
        await api.post('auth/authenticate'  ,{
            email,
            password,
        }).then((response) => {
            var { token, user } = response.data
    
           api.defaults.headers['authorization'] = `Bearer ${token}`
        
            localStorage.setItem('@CarolNutri:token', token)
            localStorage.setItem('@CarolNutri:user', JSON.stringify(user))
        
            setData({ token, user})

            toast.success(`Bem vinda(a) ${user.name}.`)
            toast.info(`Seu tempo de sessão irá expirar em 4 horas.`)

            //FUNÇÃO QUE EXPIRA A SESSÃO APÓS 4 HORAS
            setTimeout(function(){ 
                localStorage.removeItem('@CarolNutri:token')
                localStorage.removeItem('@CarolNutri:user')
            
                setData({})
            }, 14400000);
            
            //FUNÇÃO QUE INFORMA QUANDO FALTAR 30 MINUTOS PARA A SESSÃO EXPIRAR
            setTimeout(function(){ 
                toast.info(`Seu tempo de sessão irá expirar em 30 minutos.`)
            }, 12600000);

        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
    

    } catch (error) {
        toast.error('Ocorreu um erro ao tentar fazer o login, tente novamente ou entre em contato.')
    }

}, [])

const update = useCallback( async ({email, password}) => {
    try {
        await api.post('auth/authenticate'  ,{
            email,
            password,
        }).then((response) => {
            const { token, user } = response.data
    
            api.defaults.headers['authorization'] = `Bearer ${token}`
        
            localStorage.setItem('@CarolNutri:token', token)
            localStorage.setItem('@CarolNutri:user', JSON.stringify(user))
        
            setData({ token, user})
        }).catch((error) => {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        })
    

    } catch (error) {
        toast.error('Ocorreu um erro ao atualizar o perfil, tente novamente ou entre em contato.')
    }

}, [])

const singOut = useCallback(() => {
    localStorage.removeItem('@CarolNutri:token')
    localStorage.removeItem('@CarolNutri:user')

    setData({})
}, [])

    return (
        <AuthContext.Provider value={{ user: data.user ,  signIn, update, singOut }}>
            {children}
        </AuthContext.Provider>
    )
}