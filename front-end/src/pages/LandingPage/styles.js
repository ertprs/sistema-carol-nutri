import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
    height: 600px;
    background: #fff;
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const WrapperDepoiment = styled.div`
    background: black;
    height: 100%;
    position: relative;
`
export const Content = styled.div`
    display: flex;
    flex-direction row;
    align-items: center;

    .logo {
        height: 300px;
    }

    .conteudo {
        margin: 50px;
        max-width: 500px;
    }

    .foto {
        height: 250px;
        border-radius: 50%;
    }
`