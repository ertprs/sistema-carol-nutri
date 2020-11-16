import React, { Children } from 'react'

import { Wrapper } from './styles'

import HeaderDefault from '../../../components/headerDefault'
import SideBar from '../../../components/sideBar'

export default function DefaultLayout({children}){
    return (
        <Wrapper>
            <HeaderDefault/>
            <SideBar/>
            {children}
        </Wrapper>
    )
}