import styled, {keyframes} from 'styled-components'

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
        margin-right: 20%;
        margin-top:20px;
        padding: 5px;
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

export const UsuarioInfo = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');
    width 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    margin-top:80px;
    margin: auto;

    header {
        display: flex;

        img {
            width: 150px;
            height:150px;
            border-radius: 50%;
            margin: 0;
            padding: 0;
        }

        div {
            display: flex;
            justify-content: center;
            align-self: center;
            flex-direction: column;
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

    .botoes {
        display: flex;
        justify-content: space-between;
        margin: 50px 15px;

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            background: #ff6464;
            font-family: roboto, sans-serif;

            width: 100px;
            height: 40px;
            border: none;
            border-radius: 6px;
            transition: 0.5s;
    
            &:hover {
                background: #ff3c3c;
            }
        }

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

        .excluir {
            background: red;
        }
    }


`