import Swal from 'sweetalert2'
import authApi from '../apis/auth.api'
import { useState } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

export const useCustomerLogout = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [, , removeCookie] = useCookies(['token'])
    const { setAuthUser } = useAuthContext()

    const customerLogout = async () => {
        try {
            setLoading(true)
            await authApi.customerLogout()
            setAuthUser({})
            removeCookie('token', { path: '/' })
            localStorage.setItem('__user-information', JSON.stringify({}))
            Swal.fire({
                title: 'Successfully!',
                text: 'Logout successfully !!!',
            })
            navigate('/')
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error,
                color: 'error',
                iconColor: 'error',
            })
        } finally {
            setLoading(false)
        }
    }

    return { loading, customerLogout }
}
