import Swal from 'sweetalert2'
import { useState } from 'react'
import staffApi from '../apis/staff.api'

export const useFindDoctor = () => {
    const [loading, setLoading] = useState(false)

    const findDoctor = async (schedule) => {
        try {
            setLoading(true)
            const response = await staffApi.getStaffs()
            const { status, data } = response
            if (status === 200) {
                const newData = data.filter((item) => item.staffschedule.includes(schedule))
                return newData
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'error',
                    color: 'error',
                    iconColor: 'error',
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

    return { loading, findDoctor }
}
