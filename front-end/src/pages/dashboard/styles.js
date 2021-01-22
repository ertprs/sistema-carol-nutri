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
export const Loading = styled.div`
    display: flex;
    flex-direction column;
    align-items: center;

    h1 {
        color: #fff;
    }
`

export const MedicalInfo = styled.div`
    padding:100px;

    .cab {
        display: flex;
        justify-content: center;

        img {
            width: 150px;
            height: 150px;
            margin:0;
        }

        h1{
            color: #fff;
            font-weight: bold;
        }
    }
    .info {
        margin:25px;
        h4 {
            color: #fff;
        }
    }
    
    form{
        display: flex;
        flex-direction: column;

        h5{
            color: #fff;
            margin:0;
            margin-top: 100px;
            margin-bottom: 20px;
            font-weight: bold;
        }

        h4{
            color: #fff;
            margin: auto;
            margin-bottom: 20px;
            
        }

        .containerGrande{
            display: flex;
            flex-direction: column;

            .buttonQuant{
                display: flex;
                flex-direction: row;
                
                button{
                    width: 100%;
                    background: #3b9eff;
                    color #fff;
                    margin: 10px;;
                    height: 36px;
                    font-weight: bold;
                    border: 0;
                    border-radius: 4px;
                    font-size: 16px;
                    transition: background 0.5s;
        
                    &:hover{
                        background: #3273ed;
                    }
                }
                
            }

            .containerMedio{
                display: flex;
                flex-direction: row;
            }
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            padding:0;
            width: 100%;

            div {
                display: flex;
                flex-direction: column;
                margin:15px;
                width: 100%;
                vertical-align: middle;

                label{
                    display: flex;
                    justify-content: center;
                    margin: 0;
                    color : #fff;
                    width: 100%;              
                }

                select{
                    option{
                        color: #9D266F;
                        background: #fff;
                    }
                }

                input, select {
                    width: 100%;
                    background: rgba(0, 0, 0, 0.1);
                    border: 0;
                    border-radius: 4px;
                    height: 40px;
                    padding: 0 15px;
                    color #fff;
                    margin:auto;    
            
                    &::placeholder {
                        color: rgba(255, 255, 255, 0.7);
                    }

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

            }
        }
    
        hr {
            border: 0;
            height: 1px;
            background: #fff;
            margin: 10px 0 20px;
        }
    }

        .Salve{
            width: 100%;
            background: #3b9eff;
            color #fff;
            margin: 10px;;
            height: 36px;
            font-weight: bold;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.5s;

            &:hover{
                background: #3273ed;
            }
        }
    
`

export const Container = styled.div`
    padding: 30px 0;
    max-width: 80%;
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

        a {
            svg{
                margin-left:60px;
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

            @media(max-width: 800px) {
                font-size: 20px;
                margin: 0 7px;
            }
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
        margin-top: 30px;
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
    }

    opacity: ${props => (props.past ? 0.6 : 1)};

    strong {
        display: block;
        text-decoration: none;
        color: ${props => (props.available ? '#831e62' : '#831e62')};
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
    p{
        font-size: 16px;
        @media(max-width: 800px) {
            font-size: 10px;
    }
`