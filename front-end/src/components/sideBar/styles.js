import styled from 'styled-components'

export const Content = styled.div`
  backgroud: black;
  padding: 0;
  margin: 0;
  width: 200px;
  heigth: 100%;

  input{
    display: none;
  }

  input:checked ~ nav {
    transform: translateX(200px);
  }

  label {
    cursor:pointer;
    margin-top:7px;
    color: #1C1C1C;
    padding: 15px;
    position: absolute;
    z-index:1;
    transition: 1s;
  }

  input:checked ~ label {
    transform: translateX(150px);
    color: #fff;
  }
  
  nav {
    width: 200px;
    height: 100%;
    position: absolute;
    left: -200px;
    transition: 0.5s;
    background: rgba(16,16,16,0.4);

    ul {
      margin-top: 25px;
      width: 100%;
      position: absolute;

      li {

        &:hover{
          margin-left: 15px;
          transition: 0.3s;

          span{
            color: #be317f;
            text-shadow: black 1px 1px 2px;
          }

        }

        a {
          text-decoration: none;
          color: black;
          display: block;
          padding: 20px 5px;
          color: #fff;
          font-weight: 200px;
    
      
          span{
            margin-left: 15px;
            font-size: 20px;
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');
            font-family: Roboto;
          }
        }
      }
    }
  }
`