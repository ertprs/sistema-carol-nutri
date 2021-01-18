import React from 'react'

import { Wrapper } from './styles'

import HeaderAuth from '../../../components/headerAuth'
import Footer from '../../../components/footer'

export default function AuthLayout({ children }){
    return (
        <>
            <HeaderAuth/>
            <Wrapper>
                {children}
            </Wrapper>
            <Footer/>
        </>
    )
}