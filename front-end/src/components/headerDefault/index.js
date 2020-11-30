import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Content, Profile } from "./styles.js"
import logo from '../../assets/logo.svg'
import  history  from '../../services/history'

import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Nav } from 'reactstrap';

import {AuthContext} from '../../context/AuthContext'

export default function HeaderDefault(){
    async function handleClick(){

        try {
            localStorage.removeItem('@CarolNutri:token')
            localStorage.removeItem('@CarolNutri:user')
   
            history.go('/signin')
        } catch (error) {
            console.log(error)
        }

    }

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <Content>
                <nav>
                <Link to="/dashboard" title="Ir para Dashboard">
                    <img src={logo} alt="Carol Nutri" />
                </Link>
                </nav>

                <aside>
                    <Profile>
                        <Nav pills>
                            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle nav caret>
                                    <a>{user.name}</a>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <Link to="/perfil" title="Ir para seu perfil">
                                        <DropdownItem>
                                            Perfil
                                        </DropdownItem>
                                    </Link>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={handleClick}>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            </Nav>
                            <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"></img>
                    </Profile>
                </aside>
            </Content>
        </Container>
    )
}
