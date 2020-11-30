import React, { createContext, useCallback, useState } from "react"
import api from '../services/api'
import {toast} from 'react-toastify'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
const [data, setData] = useState(() => {
    const token = localStorage.getItem('@CarolNutri:token')
    const user = localStorage.getItem('@CarolNutri:user')

    if(token && user){
        return { token: token, user: JSON.parse(user)}
    }

    return {}
})

const signIn = useCallback( async ({ email, password}) => {
    try {
        const response = await api.post('auth/authenticate'  ,{
            email,
            password,
        })
    
        const { token, user } = response.data
    
        api.defaults.headers['authorization'] = `Bearer ${token}`
    
        localStorage.setItem('@CarolNutri:token', token)
        localStorage.setItem('@CarolNutri:user', JSON.stringify(user))
    
        setData({ token, user})
    } catch (error) {
        toast.error('Credenciais inválidas!')
    }

}, [])

const update = useCallback( async ({user}) => {
    try {
        localStorage.removeItem('@CarolNutri:user')
        localStorage.setItem('@CarolNutri:user', JSON.stringify(user))
        setData({ user: user })
    } catch (error) {
        toast.error('algo deu errado!')
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