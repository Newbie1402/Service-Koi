import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import serviceApi from '../apis/service.api'

export const useGetServices = () => {
    const [loading, setLoading] = useState(false)
    const [services, setServices] = useState([])

    useEffect(() => {
        const getServices = async () => {
            try {
                setLoading(true)
                const response = await serviceApi.getServices()
                const { status, data } = response
                if (status === 200) {
                    setServices(data)
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
        getServices()
    }, [])

    return { loading, services }
}
