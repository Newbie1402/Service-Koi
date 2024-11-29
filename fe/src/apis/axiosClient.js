import axios from 'axios'
import queryString from 'query-string'

export const API_URL = import.meta.env.VITE_API_URL

const axiosClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    paramsSerializer: (params) => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async (config) => {
    return config
})

export default axiosClient
