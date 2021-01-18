import styled, {keyframes} from 'styled-components'

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
    padding-top: 5%;
    padding-left: 20%;
    padding-bottom: 5%;

    div {
        display: flex;
        min-height: 100%;
    
        img {
            height: 75px;
            margin: 0;
            align-item: center;
        }
    
        h1 {
            font-size: 36px;
            line-height: 48px;
            margin: auto 0;
            color: #fff;
        }
    
    }

`

export const Formulario = styled.form`
    min-height: 100%;
    width: 80%;
    margin-top: 20px;
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

export const Receita = styled.div`
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