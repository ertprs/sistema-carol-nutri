import React, {useContext} from 'react';

import {AuthContext} from '../../context/AuthContext'

import './styles.css'

export default function Dashboard(){

    const { user } = useContext(AuthContext)

    if(user.eAdmin == true){
        return (
            <p>e adm</p>
        )
    }

    if(user.eAdmin == false){
        return (
            <p>Não é adm</p>
        )
    }


}