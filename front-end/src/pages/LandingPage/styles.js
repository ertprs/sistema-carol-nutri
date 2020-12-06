import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 900px;
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
        left: 0;
        height: 400px;
    }

    .conteudo {
        margin: 50px;
        max-width: 500px;
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');
        {
            font-family: roboto;
            font-size: 20px;
            align: center;
        }
        h1 {
            font-family: roboto;
            font-weight: 900;
            color: #831e62;
        }
        strong {
            color: #831e62;
        }
    }

    .foto {
        height: 250px;
        border-radius: 50%;
    }
`