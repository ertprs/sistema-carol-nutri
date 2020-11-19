import React, { useContext } from 'react'
import { Container, Content, Profile } from "./styles.js"
import logo from '../../assets/logo.svg'

import {AuthContext} from '../../context/AuthContext'

export default function HeaderDefault(){
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="Carol Nutri" />
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <p>{user.name}</p>
                        </div>
                        <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"></img>
                    </Profile>
                </aside>
            </Content>
        </Container>
    )
}
