import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://54.225.76.99:8000/api'
})
