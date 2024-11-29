import CustomerBookingAppointmentForm from '../components/form/CustomerBookingAppointmentForm'
import MovingPriceTable from '../components/tables/MovingPriceTable'
import ServicePriceTable from '../components/tables/ServicePriceTable'
import { useGetServices } from '../hooks/useGetServices'

function UserBookingAppointment() {
    const { services } = useGetServices()
    return (
        <div className="my-5">
            <h1 className="text-2xl font-bold text-center py-5">Booking An Appointment</h1>
            <div className="container">
                <div className="text-sm mb-5 text-center">
                    <p className="italic text-danger font-medium">* Please read the service price list and travel price list carefully before booking.</p>
                    <p className="mt-1 font-medium">
                        <span className="font-bold">Total Price</span> = Service price + Moving price
                    </p>
                </div>
                <div className="mb-5">
                    <p className="mb-2 text-xl uppercase font-semibold">1. Our Services</p>
                    <ServicePriceTable data={services} />
                </div>
                <div className="mb-5">
                    <p className="mb-2 text-xl uppercase font-semibold">2. Moving price list</p>
                    <MovingPriceTable />
                </div>
                <div className="mb-5">
                    <p className="mb-2 py-3 text-xl uppercase font-semibold">3. Make an appointment</p>
                    <CustomerBookingAppointmentForm services={services} />
                </div>
            </div>
        </div>
    )
}

export default UserBookingAppointment
