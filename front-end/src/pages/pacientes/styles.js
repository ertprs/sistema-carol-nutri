import styled from 'styled-components'

import { darken } from 'polished'

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

    display: flex;
    max-width: 700px;
    align-items: center;
    margin: 50px 0 0  150px;

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
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

    margin-left: 150px;
    margin-bottom: 50px;
    max-width: 700px;

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
`

export const Paciente = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

    margin-top: 30px;
    margin-left: 150px;
    max-width: 700px;

    a{
        background: #fff;
        border-radius:5px;
        width:100%;
        padding: 24px;
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