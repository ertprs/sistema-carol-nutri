import styled, { keyframes} from 'styled-components';

const DaDireitaParaEsquerda = keyframes`
    from{
        opacity: 0;
        transform: translateX(10%)

    }
    to {
        opacity: 1;
        transform: translateX(0)
    }
`

export const Container = styled.div`
    padding: 30px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

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

        h2 {
            color: #fff;
        }
    }

    aside{
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        padding:15px;
        
        a {
            margin: 10px;
            width:50%;
            padding: 25px;
            border-radius: 8px;
            background: #fff;
            text-decoration: none;

            display: flex;
            flex-direction: column;

            strong {
                font-size: 22px;
                color: #831e62;
                display: block;
                text-decoration: none;
                margin:0;
            }

            span {
                display: block;
                margin-top: 3px;
                color: #831e62;

            }

            p{
                color: #831e62;
                text-decoration: none;
                margin:0;   
            }
        }
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            border: 0;
            background: none;
            margin: 0 25px;
        }

        strong {
            color: #fff;
            font-size: 24px;
            margin: 0;

            @media(max-width: 800px) {
                font-size: 16px;
                margin: 0 7px;
            }
            
        }
    }

    .buscaData{
        display: flex;
        flex-direction: row;
        align-self: stretch;
        align-items: stretch;

        padding:30px;
        width: 100%;

        h2{
            color: #fff;
        }

        .consultas{
            width:100%;
            height: 100%;
        }

        .agendamento{
            width:100%;
            height: 100%;
            border-left: 1px solid #fff;

        }

        ul {
            height: 100%;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 15px;
            width:100%;
            margin: 30px 20px;
        }

    }

    hr {
        background: #fff;
        margin:10px;
        padding:0;
    }

`

export const Time = styled.li`
    animation: ${DaDireitaParaEsquerda} 0.2s;
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    background: #fff;

    @media(max-width: 800px) {
        padding: 10px;
    }

    a {
        display: block;
        text-decoration: none;
        color: #831e62;

        strong {
            color: #831e62;
            display: block;
            text-decoration: none;
            margin:0;
            
            @media(max-width: 800px) {
                font-size: 10px;
            }
        }

        span {
            display: block;
            text-decoration: none;
            margin-top: 3px;
            font-weight: bold;
            font-size: 18px;
            @media(max-width: 800px) {
                font-size: 10px;
            }
            color: ${props => (props.available ? '#831e62' : '#831e62')};
        }
    }

    opacity: ${props => (props.past ? 0.6 : 1)};

    p{
        font-size: 16px;
        margin: 0;
        padding: 0;
        @media(max-width: 800px) {
        font-size: 10px;
    }
`
export const Formulario = styled.form`
    display: flex;
    align-self: center;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    width: 50%;

    font-size: 14px;

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
        transition: background 0.3s;

        &:hover {
            background: #0885ff;
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