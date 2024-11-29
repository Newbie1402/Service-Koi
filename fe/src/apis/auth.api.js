import axiosClient from './axiosClient'
import Cookies from 'universal-cookie'

const cookies = new Cookies(null, { path: '/' })

const authApi = {
    customerRegister: async (newCustomer) => {
        const url = '/customers/create'
        return await axiosClient.post(url, newCustomer)
    },
    customerLogin: async (authInfo) => {
        const url = `/auth/login-customer`
        return await axiosClient.post(url, authInfo)
    },
    staffLogin: async (authInfo) => {
        const url = `/auth/login-staff`
        return await axiosClient.post(url, authInfo)
    },
    customerLogout: async () => {
        const url = `/auth/logout-customer`
        return await axiosClient.post(url, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
            },
        })
    },
    staffLogout: async () => {
        const url = `/auth/logout-staff`
        return await axiosClient.post(url, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
            },
        })
    },
}

export default authApi
