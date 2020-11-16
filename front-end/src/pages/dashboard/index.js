import React, { useContext } from 'react';

import './styles.css'

import {AuthContext} from '../../context/AuthContext'

export default function LandingPage(){

    const { user } = useContext(AuthContext)

    return (
        <div>
        </div>
    )
}