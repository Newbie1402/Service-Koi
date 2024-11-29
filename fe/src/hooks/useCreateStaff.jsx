import Swal from 'sweetalert2'
import { useState } from 'react'
import staffApi from '../apis/staff.api'

export const useCreateStaff = () => {
    const [loading, setLoading] = useState(false)

    const createStaff = async (newStaff) => {
        try {
            setLoading(true)
            const response = await staffApi.createStaff(newStaff)
            const { status } = response
            if (status === 201) {
                Swal.fire({
                    title: 'Successfully!',
                    text: 'Create New Staff successfully !!!',
                    confirmButtonText: 'OK',
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

    return { loading, createStaff }
}
