import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Content, Profile, ContainerSegundario } from "./styles.js"
import logo from '../../assets/logo.svg'

export default function HeaderAuth(){
    return (
        <>
        <Container>
            <Content>
                <nav>
                    <Link to="/" title="Ir para página inicial"><img src={logo} alt="Carol Nutri" /></Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <Link class="link-1" title="Fazer login" to="/signin">Login</Link>
                            <Link class="link-1" title="Fazer cadastro" to="/signup">Cadastro</Link>
                        </div>
                    </Profile>
                </aside>
            </Content>
        </Container>

        <ContainerSegundario>
            <nav>
                <Link className="Link" to="/agendamento-publico">
                    Agendamento
                </Link>
                <Link className="Link" to="/#sobre">
                    Sobre Carol
                </Link>
                <Link className="Link" to="/receitasPublicos">
                    Receitas
                </Link>
                <Link className="Link" to="/artigosPublicos">
                    Artigos
                </Link>
            </nav>
        </ContainerSegundario>
        </>
    )
}
