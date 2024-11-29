import Swal from 'sweetalert2'
import authApi from '../apis/auth.api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'
import { config } from '../configs'
import { useCookies } from 'react-cookie'

export const useStaffLogin = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [, setCookie] = useCookies(['token'])
    const { setAuthUser } = useAuthContext()

    const staffLogin = async (staffLoginInfo) => {
        try {
            setLoading(true)
            const response = await authApi.staffLogin(staffLoginInfo)
            const { status, data } = response
            if (status === 200) {
                const { token, ...userData } = data
                setAuthUser(userData)
                setCookie('token', token, { path: '/' })
                localStorage.setItem('__user-information', JSON.stringify(data))
                Swal.fire({
                    title: 'Successfully!',
                    text: 'Login successfully !!!',
                    confirmButtonText: 'Go to Staff Dashboard',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(config.routes.staff)
                    }
                })
            }
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

    return { loading, staffLogin }
}
