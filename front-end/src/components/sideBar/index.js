import React, { useContext }  from 'react'

import { Content } from "./styles.js"
import {AuthContext} from '../../context/AuthContext'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function SideBar(){

    const { user } = useContext(AuthContext)

    if(user.eAdmin == true){
        return (
            <Content>
                <nav class="main-menu">
                    <div class="container"><AiOutlineMenu size={20}/></div>
                    <ul>
                        <li>
                            <Link to="/dashboard">
                                <span class="nav-text">
                                    Pagina Inicial
                                </span>
                            </Link>
                        
                        </li>
                        <li class="has-subnav">
                            <Link to="/pacientes">
                                <span class="nav-text">
                                    Pacientes
                                </span>
                            </Link>
                            
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

    if(user.eAdmin == false){
        return (
            <Content>
                <nav class="main-menu">
                    <div class="container"><AiOutlineMenu size={20}/></div>
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
}
