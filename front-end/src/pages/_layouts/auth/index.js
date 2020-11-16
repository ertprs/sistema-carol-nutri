import React from 'react'

import { Wrapper } from './styles'

import HeaderAuth from '../../../components/headerAuth'

export default function AuthLayout({ children }){
    return (
        <Wrapper>
            <HeaderAuth/>
            {children}
        </Wrapper>
    )
}