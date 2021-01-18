import styled from 'styled-components';

export const Return = styled.div`
    padding-top: 3%;
    padding-right: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        padding: 5px;
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

export const Container = styled.div`
    margin: auto;

    form {
        max-width: 40%;
        margin: auto;
        display: flex;
        flex-direction: column;
        padding-top: 6%;

        h2 {
            color: #fff;
        }

        label {
            margin: 0;
            color: #fff;
        }

        textarea {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            padding: 10px;
            color #fff;
            width: 100%;
    
            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }
        
        input, select {
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
                background: #0885ff;
            }
        }
    }
`

export const Loading = styled.div`
    display: flex;
    flex-direction column;
    align-items: center;

    h1 {
        margin-top: 200px;
        max-width: 450px;
        color: #fff;
    }
`