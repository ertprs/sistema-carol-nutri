import styled, {keyframes} from 'styled-components'

import { darken } from 'polished'

const DaDireitaParaEsquerda = keyframes`
    from{
        opacity: 0;
        transform: translateX(-20%)

    }
    to {
        opacity: 1;
        transform: translateX(0)
    }
`

export const Container = styled.div`
animation: ${DaDireitaParaEsquerda} 1s;
`

export const Return = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        margin: 3% 20% 5px 5px;
        display: flex;
        align-items: center;
        text-decoretion: none;
        color: #fff;
        transition: .3s;


        &:hover{
            color: #a8a8b3;
        }
}
`

export const UsuarioInfo = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20%;
    margin-bottom: 5%;

    header {
        display: flex;
        width: 70%;

        img {
            width: 100px;
            height:100px;
            border-radius: 50%;
            margin: 0;
            padding: 0;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 28px;
                color: #fff;
            }

            p{
                font-size: 20px;
                color: #fff;
                margin-top: 4px;
                margin-bottom: 4px;
            }

            span {
                color: #fff;
            }
        }
    }

    hr {
        width: 70%;
        border: 0;
        height: 1px;
        background: #fff;
        margin: 10px 0 20px;
    }

    div {
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            background: #17A2b8;
            font-family: roboto, sans-serif;

            width: 100px;
            height: 40px;
            border: none;
            border-radius: 6px;
            transition: 0.5s;
    
            &:hover {
                background: #5FC2FF;
            }

            svg {
                margin: 0;
            }
            

        }

        h2 {
            color: #fff;
        }

        ul {
            display: flex;
            flex-direction: column;
            width: 70%;
            color: #fff;

            li{
                display: flex;
                color: #fff;
                margin:0;
                padding: 5px;

                strong {
                    margin:0;
                }

                p {
                    margin:0;
                    margin-left:10px;
                }

            }
        }
    }

`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
    height: 100%;
  

    &:target {
    visibility: visible;
    opacity: 1;
    }
  
    div {
        margin: 30px auto;
        padding: 20px;
        background: #fff;
        border-radius: 5px;
        width: 70%;
        position: relative;
        transition: all 5s ease-in-out;

        h2 {
            margin-top: 0;
            color: #333;
        }
    
        hr{
            width: 100%;
            background: black;
        }

        ul {
            width: 100%;

            li {
                display: flex;
                justify-content: center;
                margin: 0px;
                padding 0px;
                input {
                    width: 80%;
                    background: rgba(0, 0, 0, 0.1);
                    border: 0;
                    border-radius: 4px;
                    height: 44px;
                    padding: 0 15px;
                    color black;
                    margin: 0 0 10px;
            
                    &::placeholder {
                        color: rgba(255, 255, 255, 0.7);
                    }
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



    a {
        background: transparent;
        position: absolute;
        top: 20px;
        right: 30px;
        transition: all 200ms;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
        color: #333;

        &:hover {
            background: transparent;
            color: black;
        }
      }

      p {
        max-height: 30%;
        overflow: auto;
    }

    @media screen and (max-width: 700px){
        .box{
          width: 70%;
        }
        .popup{
          width: 70%;
        }
      }
  }
  
`