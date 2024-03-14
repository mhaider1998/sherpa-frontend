import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://54.225.76.99:8000/api'
})
