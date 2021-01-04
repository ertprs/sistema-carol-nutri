import React from 'react';
import './styles.js'

import Carousel_ from '../../components/carousel/index'
import logo from '../../assets/logo-completa.svg'
import foto1 from '../../assets/carol-nutri-maca.jpg'
import foto2 from '../../assets/carol-nutri.jpg'
import {Container} from './styles'

export default function LandingPage(){
    return (
        <div>
            <Carousel_/>
                <Container>
                        <div className="imgs">
                            <img className="foto" src={foto1} alt="Carol-nutricionista"/>
                            <img className="logo" src={logo} alt="Carol-nutricionista"/>
                            <img className="foto" src={foto2} alt="Carol-nutricionista"/>
                        </div>
                        <div className="conteudo" id="sobre">
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
                </Container>
        </div>
    )
}