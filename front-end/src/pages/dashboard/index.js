import React, { useContext } from 'react';

import {AuthContext} from '../../context/AuthContext'

export default function LandingPage(){

    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    )
}