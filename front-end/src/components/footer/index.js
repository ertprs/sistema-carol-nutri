import React from 'react'
import {  AiFillFacebook, AiFillInstagram,  AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

import {Container} from './styles.js'

export default function Footer(){
    return (
            <Container>
                <nav>
                    <h3>KEEP IN TOUCH</h3>
                    <div className="icons">
                        <a href="https://api.whatsapp.com/send?phone=+558494794472" target="_blank">
                            <AiOutlineWhatsApp className="icon" size={35}/>
                        </a>
                        <a href="https://www.instagram.com/carolbl_/?hl=pt-br" target="_blank">
                            <AiFillInstagram className="icon" size={35} />
                        </a>
                        <a href="https://www.facebook.com/caroline.bernardinol" target="_blank">
                            <AiFillFacebook className="icon" size={35}/>
                        </a>
                    </div>
                </nav>
            </Container>

    )
}
