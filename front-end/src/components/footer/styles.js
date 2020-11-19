import styled from 'styled-components'

import { darken } from 'polished'


export const Container = styled.div`
    height: 150px;
    display: flex;
    flex-direction row;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);

    h3 {
        margin: 15px;
        color: #831e62;
    }

    a {
        margin: 15px;

        .icon{

            color: #be317f;

            &:hover{
                color: ${darken(0.05, '#831e62')}
            }
        }
    }
`