import styled from 'styled-components';

export const Container = styled.div`
    max-width: 60%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;

    h2 {
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        color: #831e62;
        padding: 5%;
        margin: 4%;
        transition: 1.2s;

        &:hover{
            box-shadow: 2px 4px black;
            
        }

    }
    svg {
        color: #ff0000;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
    }
    
    div {
        display: flex;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: center;
        margin:0;

        a {
            svg{
                margin-left:60px;
                color: #fff;
                transition: .6s;
                cursor:pointer;
                &:hover {
                    transform: rotate(90deg);
                    div{
                        visibility: visible;
                    }
                }
            }
        }
    
        img {
            height: 75px;
            margin: 0;
            align-item: center;
        }
    
        h1 {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            margin: 0;

        }
    }
    
    header {
        display: flex;
        align-self: center;
        align-items: center;

        button {
            border: 0;
            background: none;
        }

        strong {
            color: #fff;
            font-size: 24px;
            margin: 0 15px;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        margin-top: 30px;
    }
`;

export const Time = styled.li`
    padding: 20px;
    border-radius: 4px;
    background: #fff;

    opacity: ${props => (props.past ? 0.6 : 1)};

    strong {
        display: block;
        color: ${props => (props.available ? '#999' : '#7159c1')};
        font-size: 20px;
        font-weight: normal;
    }

    span {
        display: block;
        margin-top: 3px;
        color: ${props => (props.available ? '#999' : '#666')};
    }
`

export const Loading = styled.div`
    height: 500px;

    display: flex;
    flex-direction column;
    align-items: center;

    h1 {
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

        margin-top: 200px;
        font-family: Roboto;
        color: 3a3a3a;
        max-width: 450px;
        color: #fff;
    }

`