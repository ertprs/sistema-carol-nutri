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
        width: 80%;
        border: 0;
        height: 1px;
        background: #fff;
        margin: 10px 0 20px;
    }


`

export const medicalInfo = styled.div`
    max-width: 600px;
    margin: 50px auto;

    div{
        
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    input {
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color #fff;
        margin: 0 0 10px;

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
    }
`