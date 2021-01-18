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
        
        @media(max-width: 800px) {
            flex-direction: column;
            position: relative;
        }

        img{
            width:30%;
            height: 30%;
            @media(max-width: 800px) {
                width:60%;
                height: 60%;
            }
        }   

        .conteudo {
            width:100%;
            display: flex;
            flex-direction: column;
            
            p{
                text-align: justify;
                font-size: 20px;
                align: center;

                @media(max-width: 800px) {
                    text-align: justify;
                    font-size: 10px;
                    align: center;
                    padding:10px;
                }
            }
            h1 {
                font-weight: 900;
                color: #831e62;
            }
            strong {
                color: #831e62;
            }
        }
    }

    .insta {
        background: #fafafa;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        text-decoration: none;
        color: #A9A9A9;
        transition: 0.5s;
        margin-bottom: 100px;
        margin-top: 45px;

        nav {
            width:100%;
            background: #FFFFFF;
            padding: 15px 0 15px 0;
            border-top: solid 2px rgba(150,150,150,0.5);
            border-opacity: 0.9;

            img{
                margin-left: 4%;
                width:10%;
                height: 10%;
            }
        }

        &:hover{
            color: #831e62;
        }

        .perfil {
            display: flex;
            margin: 4%;
            img{
                margin: 1%;
                width:15%;
                height: 15%;
                border-radius: 50%;
                border-style: groove;

                @media(max-width: 800px) {
                    width:20%;
                    height: 20%;
                }
            }

            .cabec {
                display: flex;
                justify-content: center;
                flex-direction: column;

                span {
                    margin-bottom: 5%;
                    margin-left: 8%;
                    font-size: 28px;

                    @media(max-width: 800px) {
                        font-size: 18px;
                    }
                }
                p {
                    margin-left: 8%;
                    font-size: 20px;

                    @media(max-width: 800px) {
                        font-size: 10px;
                    }
    
                    strong {
                        color: #831e62;
                    }
                }
            }

        }

        .images {
            margin: 0 4%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            
            
            img {
                width: 30%;
                height: 30%;
                margin: 0.5%px;
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
            justify-content: center;
            margin:auto;
            padding: 0;
            background: #fff;
            width: 80%;
            border-radius: 0 0 8px 8px;

            padding-bottom: 100px;

            img{
                width: 40%;
                height: 40%;
                margin:0;
            }

        }

        .cabecLoc{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: auto;

            border-radius: 8px 8px 0 0;
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
                    @media(max-width: 800px) {
                        font-size: 20px;
                    }
                }

                img {
                    height: 75px;
                    margin: 0;
                    align-item: center;
                    @media(max-width: 800px) {
                        height: 45px;
                    }
                }
            }

            .end{

                strong{
                    font-size: 20px;
                    @media(max-width: 800px) {
                        font-size: 10px;
                    }
                }
                p{
                    font-size: 20px;
                    @media(max-width: 800px) {
                        font-size: 10px;
                    }
                }

                span{
                    font-size: 20px;
                    @media(max-width: 800px) {
                        font-size: 10px;
                    }
                }

                svg {
                    @media(max-width: 800px) {
                        height: 10px;
                    }
                }
            }

        }
    }

`