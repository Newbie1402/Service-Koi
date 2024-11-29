import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import bookingApi from '../apis/booking.api'

export const useStaffGetBookings = (customerId) => {
    const [loading, setLoading] = useState(false)
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        const staffGetBookings = async (staffId) => {
            try {
                setLoading(true)
                const response = await bookingApi.getBooking()
                console.log(response);
                
                const { status, data } = response
                if (status === 200) {
                    const foundBookings = data.filter((item) => item.staff.id === staffId)
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
        staffGetBookings(customerId)
    }, [customerId])

    return { loading, bookings }
}
