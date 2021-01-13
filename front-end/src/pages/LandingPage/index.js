import React from 'react';
import './styles.js'

import Carousel_ from '../../components/carousel/index'
import logo from '../../assets/logo-completa.svg'
import foto1 from '../../assets/carol-nutri-maca.jpg'
import foto2 from '../../assets/carol-nutri.jpg'
import foto3 from '../../assets/nutri1.jpg'
import foto4 from '../../assets/nutri2.jpg'
import foto5 from '../../assets/Loc.jpg'
import foto6 from '../../assets/Loc1.jpg'
import Logo1 from '../../assets/logo.svg'
import { GoLocation } from "react-icons/go";

import {Container} from './styles'

export default function LandingPage(){
    return (
        <div>
            <Carousel_/>
                <Container>
                    <div className="content1">
                        <img src={logo} alt="Carol-nutricionista"/>
                        <div className="conteudo">
                            <h1>Sobre Carol</h1>
                            <p> Sou Carol Bernardino, tenho 22 anos e escolhi cuidar do próximo através do
                                alimento desde os 17 anos quando ingressei no curso de nutrição. Atuo na
                                área clínica e esportiva (pós graduanda na mesma área), acolhendo cada
                                paciente com muito amor e afeto, abraçando cada objetivo individualmente e
                                segurando a mão para percorrer o melhor trajeto para o resultado. No lindo
                                laço formado por Nutricionista e paciente, me transbordo e vibro cada
                                conquista como se fosse minha.
                            </p>
                            <p>
                                “É o invisível que produz o visível”. Ao longo dos quatro anos de graduação
                                pude moldar o meu interior, esse invisível tão importante para demonstração do
                                amor pelo cuidado e pela profissão que escolhi, que tem sido intensificado na
                                convivência com todos que optam por ser do meu time.
                            </p>
                            <p>
                            Agradeço a confiança no meu trabalho e reafirmo: No <strong>#TeamCarol</strong> o amor é
                            transmitido através do alimento!
                            </p>
                        </div>
                    </div>
                    <a className="insta"  href="https://www.instagram.com/carolbl_/?hl=pt-br" target="_blank">
                        <div className="perfil" >
                            <img src={foto4} alt="Carol-nutricionista"/>
                            <div className="cabec">
                                <span>carolbl_</span>
                                <p>siga-nos no instagram e venha participar do <strong>#TeamCarol</strong></p>
                            </div>
                        </div>
                        <div className="images">
                            <img src={foto1} alt="Carol-nutricionista"/>
                            <img src={foto2} alt="Carol-nutricionista"/>
                            <img src={foto3} alt="Carol-nutricionista"/>
                        </div>
                    </a>
                    <a className="loc" href="https://www.google.com/maps/place/Oral+Center+-+ODONTOLOGIA+ESPECIALIZADA/@-6.4826169,-35.4323927,17z/data=!4m5!3m4!1s0x7ad8e4ad12fbb49:0xb6d312bea769e7dd!8m2!3d-6.4825423!4d-35.4326663?hl=pt-BR" target="_blank">
                        <div className="cabecLoc">
                            <div className="title">
                                <img src={Logo1} alt="Carol Nutri"/>
                                <h1>Localização</h1>
                            </div>
                            <div className="end">
                                <GoLocation size={26}/>
                                <strong>Oral Center - ODONTOLOGIA ESPECIALIZADA</strong>
                                <p>R. Assis Chateaubriand, 1067 - São Sebastião, Nova Cruz - RN, 59215-000</p>
                                <span>(84) 3281-2654</span>
                            </div>
                        </div>
                        <div className="imagesLoc">
                            <img src={foto5} alt="Carol-nutricionista"/>
                            <img src={foto6} alt="Carol-nutricionista"/>
                        </div>
                    </a>

                </Container>
        </div>
    )
}