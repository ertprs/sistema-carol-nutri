import styled from 'styled-components'

import { darken } from 'polished'


export const Container = styled.div`
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    height: 130px;
    display: flex;
    flex-direction row;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: #fff;
    position:relative;
    bottom:0;
    width: 100%;

    a{
        font-size: 20px;
        text-decoration: none;
        color: #343A40;
        margin:25px;
    }

    nav {
        display: flex;
        flex-direction column;
        align-items: center;
        margin:25px;

        h3 {
            margin: 15px;
            color: #343A40;
        }

        .icons{
            a {
                margin: 15px;
        
                .icon{
                
                    &:hover{
                        color: ${darken(0.05, '#831e62')}
                    }
                }
            }   
        }
    
    }

`