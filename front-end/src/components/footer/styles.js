import styled from 'styled-components'

import { darken } from 'polished'


export const Container = styled.div`
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    height: 130px;
    display: flex;
    flex-direction row;
    align-items: center;
    justify-content: center;
    background: #fff;
    position:relative;
    bottom:0;
    width: 100%;

    nav {
        display: flex;
        flex-direction column;
        align-items: center;


        h3 {
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');
            font-family: Roboto;
            margin: 15px;
            color: #831e62;
        }

        .icons{
            a {
                margin: 15px;
        
                .icon{
        
                    color: #be317f;
        
                    &:hover{
                        color: ${darken(0.05, '#831e62')}
                    }
                }
            }   
        }
    
    }

`