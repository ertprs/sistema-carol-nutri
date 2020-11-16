import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container, Content, Profile } from "./styles.js"
import logo from '../../assets/logo-branca.svg'

export default function HeaderAuth(){
    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/" title="Ir para página inicial"><img src={logo} alt="Carol Nutri" /></Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <a class="link-1" title="Fazer login" href="/signin">Login</a>
                            <a class="link-1" title="Fazer cadastro" href="/signup">Cadastro</a>
                        </div>
                    </Profile>
                </aside>
            </Content>
        </Container>
    )
}
