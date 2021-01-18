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
    max-width: 60%;
    padding-top: 50px;
    margin: auto;
    display: flex;
    flex-direction: column;

    h2 {
        animation: ${DaDireitaParaEsquerda} 0.2s;

        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        color: #831e62;
        padding: 5%;
        margin: 4%;
        transition: 1.2s;

        &:hover{
            box-shadow: 2px 4px black;
        }

    }
    svg {
        color: #ff0000;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
    }
    
    div {
        display: flex;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: center;
        margin:0;

        &:hover{

        }

        a {
            svg{
                margin-left:60px;
                color: #fff;
                transition: .6s;
                cursor:pointer;
                &:hover {
                    transform: rotate(90deg);
                }
            }
        }
    
        img {
            height: 75px;
            margin: 0;
            align-item: center;
        }
    
        h1 {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            margin: 0;

        }
    }
    
    header {
        display: flex;
        align-self: center;
        align-items: center;

        button {
            border: 0;
            background: none;
        }

        strong {
            color: #fff;
            font-size: 24px;
            margin: 0 15px;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        margin-top: 30px;
    }
`;

export const Time = styled.li`
    animation: ${DaDireitaParaEsquerda} 0.2s;
    min-width: 100%;
    padding: 20px;
    border-radius: 8px;
    background: #fff;

    a {
        display: block;
        text-decoration: none;
        color: #831e62;
    }

    opacity: ${props => (props.past ? 0.6 : 1)};

    strong {
        display: block;
        text-decoration: none;
        color: ${props => (props.available ? '#831e62' : '#831e62')};
    }

    span {
        display: block;
        text-decoration: none;
        margin-top: 3px;
        font-weight: bold;
        font-size: 18px;
        color: ${props => (props.available ? '#831e62' : '#831e62')};
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