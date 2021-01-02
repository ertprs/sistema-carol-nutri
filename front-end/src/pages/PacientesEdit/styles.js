import styled, {keyframes} from 'styled-components'

const DaDireitaParaEsquerda = keyframes`
    from{
        opacity: 0;
        transform: translateX(-20%)

    }
    to {
        opacity: 1;
        transform: translateX(0)
    }
`

export const Container = styled.div`
    animation: ${DaDireitaParaEsquerda} 1s;
    width 70%;
    margin: auto;
`

export const Return = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        margin-top:20px;
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

export const UsuarioInfo = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    margin-top:20px;

    header {
        display: flex;

        img {
            width: 100px;
            height:100px;
            border-radius: 50%;
            margin: 0;
            padding: 0;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 28px;
                color: #fff;
            }

            p{
                font-size: 20px;
                color: #fff;
                margin-top: 4px;
                margin-bottom: 4px;
            }

            span {
                color: #fff;
            }
        }
    }
    hr {
        border: 0;
        height: 1px;
        background: #fff;
        margin: 10px 0 20px;
    }
`

export const MedicalInfo = styled.div`
    form {
        display: flex;
        flex-direction: column;

        h5{
            color: #fff;
            margin:0;
            margin-top: 100px;
            margin-bottom: 20px;
            font-weight: bold;
        }

        h4{
            color: #fff;
            margin: auto;
            margin-bottom: 20px;
            
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            padding:0;
            width: 100%;

            div {
                display: flex;
                flex-direction: column;
                margin:15px;
                width: 100%;
                vertical-align: middle;

                label{
                    display: flex;
                    justify-content: center;
                    margin: 0;
                    color : #fff;
                    width: 100%;              
                }

                input, select {
                    width: 100%;
                    background: rgba(0, 0, 0, 0.1);
                    border: 0;
                    border-radius: 4px;
                    height: 44px;
                    padding: 0 15px;
                    color #fff;
                    margin:auto;    
            
                    &::placeholder {
                        color: rgba(255, 255, 255, 0.7);
                    }

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

            }
        }
    
        hr {
            border: 0;
            height: 1px;
            background: #fff;
            margin: 10px 0 20px;
        }
    
        button {
            width: 80%;
            margin: 5px auto;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.3s;
        }
    }

`