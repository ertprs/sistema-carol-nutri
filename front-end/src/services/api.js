import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sistema-carol-nutri.devorion.repl.co'
})
// 
export default api