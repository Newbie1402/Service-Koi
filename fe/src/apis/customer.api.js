import axiosClient from './axiosClient'
import Cookies from 'universal-cookie'

const cookies = new Cookies(null, { path: '/' })

const customerApi = {
    changePassword: async (customerId, newPassword) => {
        const url = `/customers/update-password/${customerId}`
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
}

export default customerApi
