import React, { useContext }  from 'react'
import {Link} from 'react-router-dom'

import { Content } from "./styles.js"
import {AuthContext} from '../../context/AuthContext'


export default function SideBar(){

    const { singOut } = useContext(AuthContext)

    function handleClick(){ singOut()}

    return (
            <Content>
                <nav class="main-menu">
                    <ul>
                        <li>
                            <a href="http://justinfarrow.com">
                                <span class="nav-text">
                                    Pagina Inicial
                                </span>
                            </a>
                        
                        </li>
                        <li class="has-subnav">
                            <a href="#">
                                <span class="nav-text">
                                    Consultório
                                </span>
                            </a>
                            
                        </li>
                        <li class="has-subnav">
                            <a href="#">
                                <span class="nav-text">
                                    Sobre
                                </span>
                            </a>
                            
                        </li>
                    </ul>
                </nav>
            </Content>
    )
}
