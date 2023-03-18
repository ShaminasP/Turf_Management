import Axios from 'axios'
export const Axiosuser = Axios.create({
    baseURL: 'http://localhost:3001',
    headers: {'Content-Type': 'application/json'}
})