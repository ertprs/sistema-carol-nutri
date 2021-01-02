import React, {useContext} from 'react';

import {AuthContext} from '../../context/AuthContext'

import './styles.css'

export default function Dashboard(){

    const { user } = useContext(AuthContext)

    if(user.eAdmin === true){
        return (
            <>
                <p>é adm</p>
            </>
        )
    } else {
        return (
            <>
                <p>Não é adm</p>
            </>
        )
    }
}