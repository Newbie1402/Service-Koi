import StaffBookingTable from '../components/tables/StaffBookingTable'
import { useAuthContext } from '../contexts/AuthContext'
import { useStaffGetBookings } from '../hooks/useStaffGetBookings'

function StaffBookingPage() {
    const { authUser } = useAuthContext()
    const { bookings } = useStaffGetBookings(authUser.id)

    return (
        <div className="p-5">
            <h1 className="text-2xl font-semibold">Staff Bookings Management</h1>
            <div className="border-t mt-5 pt-10">
                <StaffBookingTable data={bookings} />
            </div>
        </div>
    )
}

export default StaffBookingPage
