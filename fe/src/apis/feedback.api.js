import axiosClient from './axiosClient'
import Cookies from 'universal-cookie'

const cookies = new Cookies(null, { path: '/' })

const feedbackApi = {
    getFeedback: async () => {
        const url = '/feedback'
        return await axiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
            },
        })
    },
    createFeedback: async (newFeedback) => {
        const url = '/feedback/create'
        return await axiosClient.post(url, newFeedback, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
            },
        })
    },
}

export default feedbackApi
