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
    
    header {
        display: flex;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: center;
        margin:0;
        padding: 10px;
        
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

    div {
        display: flex;
        align-self: center;
        align-items: center;

        button {
            border: 0;
            background: none;
        }

        h4{
            color: #fff;
        }

        strong {
            color: #fff;
            font-size: 24px;
            margin: 0 15px;

            @media(max-width: 800px) {
                font-size: 16px;
                margin: 0 7px;
            }
            
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        width:70%;
        margin: 30px auto;
    }

`

export const Time = styled.li`
    animation: ${DaDireitaParaEsquerda} 0.2s;
    min-width: 100%;
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
        @media(max-width: 800px) {
            font-size: 10px;
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