import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import bookingApi from '../apis/booking.api'

export const useGetMeBooking = (customerId) => {
    const [loading, setLoading] = useState(false)
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        const getMeBooking = async (customerId) => {
            try {
                setLoading(true)
                const response = await bookingApi.getBooking()
                const { status, data } = response
                if (status === 200) {
                    const foundBookings = data.filter((item) => item.customer.id === customerId)
                    setBookings(foundBookings)
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
        getMeBooking(customerId)
    }, [customerId])

    return { loading, bookings }
}
