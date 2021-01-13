import styled from 'styled-components'

export const Container = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .content1 {
        margin-top:20px;
        width:95%;
        display: flex;

        img{
            width:480px;
            height: 480px;
        }   

        .conteudo {
            width:100%;
            display: flex;
            flex-direction: column;
            p{
                text-align: justify;
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
    }

    .insta {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 80%;
        text-decoration: none;
        color: #C0C0C0	;
        transition: 0.5s;
        margin-bottom: 100px;
        margin-top: 45px;

        &:hover{
            color: #831e62;
        }

        .perfil {
            display: flex;

            img{
                margin: 15px;
                width:150px;
                height: 150px;
                border-radius: 50%;
                border-style: groove;
            }

            .cabec {
                span {
                    margin: 25px;
                    font-size: 28px;
                }
                p {
                    margin: 25px;
                    font-size: 20px;
    
                    strong {
                        color: #831e62;
                    }
                }
            }

        }

        .images {
            width: 100%;
            display: flex;
            justify-content: space-between;
            
            
            img {
                width: 320px;
                height: 320px;
                margin: 15px;
            }
        }
    }

    .loc {
        width: 100%;
        background: linear-gradient(-180deg, #831e62, #be317f);
        display: flex;
        flex-direction: column;
        justify-content: center;

        text-decoration: none;
 

        padding-bottom: 100px;
        padding-top: 100px;

        .imagesLoc{
            display: flex;
            margin:auto;
            padding: 0;

        }

        .cabecLoc{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 20px auto;

            border-radius: 8px;
            width: 80%;
            padding: 20px;
            color: #be317f;
            background: #fff;

            .title {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 10px;

                h1 {
                    margin: 0;
        
                }

                img {
                    height: 75px;
                    margin: 0;
                    align-item: center;
                }
            }

        }
    }

`