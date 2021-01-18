import styled from 'styled-components'

export const Content = styled.div`
  padding: 0;
  margin: 0;
  background: rgba(16,16,16,0.4);
  height: 100%;
  position: absolute;
  transition: 1s;

  &:hover{
    transform: translateX(200px);

    > label{
      transform: translateX(-60px);
    }
  }

  label {
    cursor:pointer;
    margin-top:7px;
    color: #fff;
    padding: 15px;
    position: absolute;
    z-index:1;
    transition: 1.3s;

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
          }
        }
      }
    }
  }
`