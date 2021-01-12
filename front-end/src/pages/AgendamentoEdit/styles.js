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

export const Editor = styled.div`
    max-width: 40%;
    margin: 50px auto;

    div {
        display: flex;
        align-items: center;
        
        .Edit{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            background: #fff;
            color #3b9eff;
            margin: 10px;
            font-weight: bold;
            border: 0;
            box-shadow: 2px 2px #363636;
            border-radius: 50%;
            transition: background 0.5s;

            svg{
                color: #be317f;  
            }
    
            &:hover{
                background: #e8e1e1;
    
                div{
                    visibility: visible;
                }
            }
        }

        h2 {
            color: #fff;
            margin: 0;
        }

    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        color: #fff;

        div {

            input {
                width: 100%;
                margin: 10px;
                background: rgba(0, 0, 0, 0.1);
                border: 0;
                border-radius: 4px;
                height: 44px;
                padding: 0 15px;
                color #fff;
        
                &::placeholder {
                    color: rgba(255, 255, 255, 0.7);
                }
    
            }
        }

        label {
            margin: auto;
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
        
        input {
            width: 100%;
            margin: 10px;
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color #fff;
    
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
    }


`