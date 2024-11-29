import axiosClient from './axiosClient'
import Cookies from 'universal-cookie'

const cookies = new Cookies(null, { path: '/' })

const staffApi = {
    changePassword: async (staffId, newPassword) => {
        const url = `/staff/update-password/${staffId}`
        return await axiosClient.put(
            url,
            { newPassword },
            {
                headers: {
                    Authorization: `Bearer ${cookies.get('token')}`,
                },
            }
        )
    },
    getStaffs: async (params) => {
        const url = '/staff'
        return await axiosClient.get(url, {
            params,
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
            },
        })
    },
    createStaff: async (newStaff) => {
        const url = '/staff/create'
        return await axiosClient.post(url, newStaff, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
            },
        })
    },
    updateStaff: async (staffId, staff) => {
        const url = `/staff/update/${staffId}`
        return await axiosClient.put(url, staff, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
            },
        })
    },
    deleteStaff: async (staffId) => {
        const url = `/staff/delete/${staffId}`
        return await axiosClient.delete(url, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
            },
        })
    },
}

export default staffApi
