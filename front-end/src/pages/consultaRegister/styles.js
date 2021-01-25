import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
    max-width: 65%;
    margin: 50px auto;

    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin:0;
        padding: 10px;
    }
        
        img {
            height: 100px;
            margin: 0;
            align-item: center;
        }
    
        h1 {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            margin: 0;
            font-size: 40px;

            @media(max-width: 800px) {
                font-size: 20px;
                margin: 0 7px;
            }
        }
    }

    .formulario {
        display: flex;
        flex-direction: column;
        padding: 30px;


        h2 {
            color: #fff;
        }

        label {
            margin: 0;
            color: #fff;
        }

        textarea {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            padding: 10px;
            color #fff;
            width: 100%;
    
            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }
        
        input, select {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color #fff;
            margin: 0 0 10px;

            option{
                background: #831e62;
            }
    
            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }
    
        span {
            color: #fff;
            align-self: self-start;
            margin: 0 0 10px;
            font-weight: bold;
        }
    
        hr {
            border: 0;
            height: 1px;
            background: #fff;
            margin: 10px 0 20px;
        }
    
        button {
            margin: 5px 0 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.3s;
    
            &:hover {
                background: ${darken(0.05, '#0885ff')}
            }
        }
    }


`

export const Return = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        padding: 5px;
        margin: 3% 20% 5px 5px;
        display: flex;
        align-items: center;
        text-decoretion: none;
        color: #fff;
        transition: .3s;
        border-radius: 6px;


        &:hover{
            color: #a8a8b3;
            background: rgba(320, 320, 320, 0.1)
        }
    }
`

export const Formulario = styled.form`
    min-height: 100%;
    padding: 30px;
    display: flex;

    input {
        color: #3a3a3a;
        flex: 1;
        height: 60px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
    }

    button {
        background: #3b9eff;
        width: 20%;
        height: 60px;
        background: #fffff;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background 0.3s;

        &:hover {
            background: #0885ff;
        }
    }

    div{
        display: flex;
       
        svg{
            margin-left: 30px;
            color: #fff;
            transition: .6s;
            cursor:pointer;
            &:hover {
            transform: rotate(90deg);
            }
        }
    }
`

export const Paciente = styled.div`
    min-height: 100%;
    margin-top: 20px;
    width: 80%;

    a{
        background: #fff;
        border-radius:8px;
        width:100%;
        padding: 16px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.6s;

        &:hover{
            transform: translateX(50px);
        }


        img {
            width: 75px;
            height: 75px;
            border-radius:50%;
            margin: 0;
        }


        div{
            display: flex;
            flex-direction: column;

            margin-left: 16px;

            strong {
                padding:0px;
                margin:0px;
                font-size: 20px;
                color: #be317f;
            }

            p{
                color: #831e62;
                padding:0px;
                margin:0px;
                text-align: justify;
            }

        }
        svg{
            margin-left: auto;
            color: #831e62;
            min-width: 5%;
        }
    }

`

export const Loading = styled.div`
    display: flex;
    flex-direction column;
    align-items: center;

    h1 {
        margin-top: 200px;
        max-width: 450px;
        color: #fff;
    }
`