import axios from 'axios'

const api = axios.create({
    //baseURL: 'http://localhost:8080'
    baseURL: 'https://sistema-carol-nutri.devorion.repl.co'
})

export default api