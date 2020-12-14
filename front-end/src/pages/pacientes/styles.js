import styled, {keyframes} from 'styled-components'

import { darken } from 'polished'

const DaDireitaParaEsquerda = keyframes`
    from{
        opacity: 0;
        transform: translateX(40%)

    }
    to {
        opacity: 1;
        transform: translateX(0)
    }
`

export const Container = styled.div`
    animation: ${DaDireitaParaEsquerda} 1s;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

    display: flex;
    width: 60%;
    align-items: center;
    margin: 5% 0 0 15%;

    img {
        height: 75px;
        margin: 0;
        align-item: center;
        margin-bottom: 50px;
    }

    h1 {
        font-family: roboto, sans-serif;
        font-size: 36px;
        color: 3a3a3a;
        max-width: 450px;
        line-height: 48px;
        margin: 0;
        margin-bottom: 50px;
        color: #fff;
    }

`

export const Formulario = styled.form`
    animation: ${DaDireitaParaEsquerda} 1.5s;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

    margin-left: 15%;
    margin-bottom: 50px;
    width: 60%;

    display: flex;

    input {
        font-family: Roboto, sans-serif;
        color: #3a3a3a;
        flex: 1;
        height: 60px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
    }

    button {
        font-family: roboto, sans-serif;
        background: #3b9eff;
        width: 210px;
        height: 60px;
        background: #fffff;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background 0.3s;

        &:hover {
            background: ${darken(0.05, '#0885ff')}
        }
    }

    div{
        display: flex;

        &:hover{
            div{
                visibility: visible;
            }
        }
       
        svg{
            margin-left: 30px;
            color: #fff;
            transition: .6s;
            cursor:pointer;
            &:hover {
                transform: rotate(90deg);
                div{
                    visibility: visible;
                }
            }
        }
    }
`

export const Paciente = styled.div`
    animation: ${DaDireitaParaEsquerda} 1.5s;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

    margin-top: 1px;
    margin-left: 15%;
    width: 60%;

    a{
        background: #fff;
        border-radius:8px;
        width:100%;
        padding: 16px;
        display: block;
        text-decoration: none;
        margin-bottom: 15px;

        display: flex;
        align-items: center;
        transition: transform 0.6s;

        &:hover{
            transform: translateX(50px);
        }


        img {
            width: 64px;
            height: 64px;
            border-radius:50%;
            margin: 0;
        }


        div{
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #be317f;
            }

            p{
                color: #831e62;
                padding:0px;
                margin:0px;

            }

            span {
                font-size: 14px;
                color: #A8A8B3;
                font-weight: bold;
            }

        }
        svg{
            margin-left: auto;
            color: #831e62;
        }
    }

`

export const Loading = styled.div`
    animation: ${DaDireitaParaEsquerda} 1.5s;
    height: 500px;

    display: flex;
    flex-direction column;
    align-items: center;

    h1 {
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

        margin-top: 200px;
        font-family: Roboto;
        color: 3a3a3a;
        max-width: 450px;
        color: #fff;
    }

`