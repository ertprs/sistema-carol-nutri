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
                <input type="checkbox" id="chec" />
                <label for="chec"><AiOutlineMenu size={28}/></label>
                <nav>
                     <ul>
                        <li>
                            <Link to="/dashboard">
                                <span>Consultório</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/pacientes">
                                <span>Pacientes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/#">
                                <span>Agenda</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/receitas">
                                <span>Receitas</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/#">
                                <span>Artigos</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Content>
        )
    }

    if(user.eAdmin == false){
        return (
            <Content>
                <input type="checkbox" id="chec" />
                <label for="chec"><AiOutlineMenu size={28}/></label>
                <nav>
                    <ul>
                        <li>
                            <Link to="/dashboard">
                                <span>Pagina Inicial</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/pacientes">
                                <span>Pacientes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard">
                                <span>Receitas</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard">
                                <span>Artigos</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Content>
        )
    }
}
