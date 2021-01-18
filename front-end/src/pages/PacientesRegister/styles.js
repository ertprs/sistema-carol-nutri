import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        h2 {
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

export const Return = styled.div`
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