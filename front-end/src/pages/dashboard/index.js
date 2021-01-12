import React, { useState} from 'react';

import {Container} from './styles.js'
import Logo from '../../assets/logo-branca.svg'
import ReactLoading from 'react-loading'

export default function Dashboard(){
    const [loading, setLoading] = useState(true);

    if (loading){
        return (
            <>
                <Container>
                    <div>
                        <img src={Logo} alt="Carol Nutri"/>
                        <h1>Construção da página em andamento</h1>
                    </div>
                </Container>
            </>

        )
    }

    
}