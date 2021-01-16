import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
    max-width: 60%;
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

        h1{
            color: #fff;
            font-family: roboto;
        }

    }


    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        label {
            margin: 0;
            color: #fff;
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
    
            &:hover {
                background: ${darken(0.05, '#0885ff')}
            }
        }
    }

`