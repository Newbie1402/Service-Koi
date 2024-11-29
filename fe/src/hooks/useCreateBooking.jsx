import Swal from 'sweetalert2'
import { useState } from 'react'
import bookingApi from '../apis/booking.api'
import { formatMoney } from '../ultils/formatMoney'

export const useCreateBooking = () => {
    const [loading, setLoading] = useState(false)

    const createBooking = async (newBooking, totalPrice) => {
        try {
            setLoading(true)
            const response = await bookingApi.createBooking(newBooking)
            const { status } = response
            if (status === 201) {
                Swal.fire({
                    title: 'Successfully!',
                    text: `Total price: ${formatMoney(totalPrice)}`,
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

    return { loading, createBooking }
}
