import React from 'react'

import { Wrapper } from './styles'

import HeaderDefault from '../../../components/headerDefault'
import SideBar from '../../../components/sideBar'
import Footer from '../../../components/footer'


export default function DefaultLayout({children}){
    return (
        <>
            <HeaderDefault/>
            <SideBar/>
            <Wrapper>
                {children}
            </Wrapper>
            <Footer/>
        </>

    )
}