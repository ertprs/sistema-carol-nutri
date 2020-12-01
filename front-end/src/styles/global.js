import {createGlobalStyle} from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
    *{
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');
        font-family: Roboto, sans-serif;
        margin: 0;
        padding:0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
    height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-dcoretion: none;
    }
    
    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`