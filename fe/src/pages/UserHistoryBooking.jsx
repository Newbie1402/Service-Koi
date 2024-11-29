import HistoryBookingTable from '../components/tables/HistoryBookingTable'
import { useAuthContext } from '../contexts/AuthContext'
import { useGetMeBooking } from '../hooks/useGetMeBooking'

UserHistoryBooking.propTypes = {}

function UserHistoryBooking() {
    const { authUser } = useAuthContext()
    const { bookings } = useGetMeBooking(authUser.id)
    console.log(bookings)

    return (
        <div className="my-5">
            <h1 className="text-2xl font-bold text-center py-5">History Booking</h1>
            <div className="mt-3">
                <HistoryBookingTable data={bookings} />
            </div>
        </div>
    )
}

export default UserHistoryBooking
