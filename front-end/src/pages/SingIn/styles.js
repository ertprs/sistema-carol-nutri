import styled from 'styled-components'

import { darken } from 'polished'


export const Wrapper = styled.div`
    height: 100%;
    background: linear-gradient(180deg, #831e62, #be317f);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    height: 100%;
    width: 100%;
    max-width: 315px;
    text-align: center;

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

    a {
        border: none;
        color: #fff;
        margin-top: 15px;
        font-size: 16px;
        opacity: 0.8;
        

        &: hover {
            opacity: 1;
        }
    }

    img {
        margin-top: 75px;
        height: 120px;
    }

`
