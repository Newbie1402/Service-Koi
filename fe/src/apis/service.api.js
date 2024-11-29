import axiosClient from './axiosClient'
import Cookies from 'universal-cookie'

const cookies = new Cookies(null, { path: '/' })

const serviceApi = {
    getServices: async (params) => {
        const url = '/services'
        return await axiosClient.get(url, { params })
    },
    createService: async (newService) => {
        const url = '/services/create'
        return await axiosClient.post(url, newService, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
            },
        })
    },
    updateService: async (serviceId, updated) => {
        const url = `/services/update/${serviceId}`
        return await axiosClient.put(url, updated, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
            },
        })
    },
    deleteService: async (serviceId) => {
        const url = `/services/delete/${serviceId}`
        return await axiosClient.delete(url, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
            },
        })
    },
}

export default serviceApi
