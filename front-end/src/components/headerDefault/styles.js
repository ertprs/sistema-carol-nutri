import styled from 'styled-components'

export const Container = styled.div`
    padding: 10px 30px;
    background: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`

export const Content = styled.div`

    background: #fff;
    height: 64px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        background: #fff;
        display: flex;
        align-items: center;

        img {
            background: #fff;
            height: 64px;
            margin-right: 2px;
            padding-right: 2px;
            margin-left: 15px;
            padding-left: 15px;
        }

    }

    aside {
        background: #fff;
        display: flex;
        align-items: center;
    }
`
export const Profile = styled.div`
background: #fff;
    display: flex;
    margin-left: 20px;
    padding-left: 20px;



    a {

        border-bottom: none;
        color: #831e62;
    }

    img {
        height:40px;
        border-radius: 100%;
    }
`