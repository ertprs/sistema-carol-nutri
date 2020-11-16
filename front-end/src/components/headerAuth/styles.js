import styled from 'styled-components'

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
    padding: 10px 30px;
    background: #831e62;
`

export const Content = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');

    background: #831e62;
    height: 64px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        background: #831e62;
        display: flex;
        align-items: center;

        img {
            background: #831e62;
            height: 64px;
            margin-right: 2px;
            padding-right: 2px;
        }

        a {
            background: #831e62;
            font-weight: bold;
            font-size: 20px;
            color: #fff;
            border-bottom: 0;
        }
    }

    aside {
        background: #831e62;
        display: flex;
        align-items: center;
    }
`
export const Profile = styled.div`
background: #831e62;
    display: flex;
    margin-left: 20px;
    padding-left: 20px;

    div {
        background: #831e62;
        text-align: right;
        margin-right: 10px;

        strong {
            background: #831e62;
            display: block;
            color: #fff;
        }


        .link-1 {
            transition: 0.3s ease;
            background: #831e62;
            color: #ffffff;
            font-size: 20px;
            text-decoration: none;
            border-top: 4px solid#831e62;
            border-bottom: 4px solid#831e62;
            padding: 20px 0;
            margin: 0 20px;
          }
          .link-1:hover {
            border-top: 4px solid #ffffff;
            border-bottom: 4px solid #ffffff;
            padding: 6px 0; 
          }
    }

    img {
        height: 40px;
        border-radius: 100%;
    }
`