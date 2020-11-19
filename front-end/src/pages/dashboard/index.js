import React from 'react';
import { Form } from '@rocketseat/unform'
import  history  from '../../services/history'

import './styles.css'

export default function Dashboard(){


    async function handleClick(){

        try {
            localStorage.removeItem('@CarolNutri:token')
            localStorage.removeItem('@CarolNutri:user')
   
            history.go('/signin')
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Form onSubmit={handleClick}>
            <button type="submit">logout</button>
        </Form>
    )
}