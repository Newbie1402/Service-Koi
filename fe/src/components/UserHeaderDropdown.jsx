import { Link } from 'react-router-dom'
import { useCustomerLogout } from '../hooks/useCustomerLogout'
import { config } from '../configs'

function UserHeaderDropdown() {
    const { customerLogout } = useCustomerLogout()
    const DROPDOWN_MENUS = [
        {
            id: 1,
            label: 'View Information',
            path: config.routes.user_information,
        },
        {
            id: 2,
            label: 'Booking an appointment',
            path: config.routes.user_booking_appointment,
        },
        {
            id: 3,
            label: 'History booking',
            path: config.routes.user_history_booking,
        },
        {
            id: 4,
            label: 'Logout',
            action: () => {
                customerLogout()
            },
        },
    ]
    return (
        <ul className="p-3">
            {DROPDOWN_MENUS.map((item) => (
                <li key={item.id} className="px-2 py-2 hover:bg-primary-50 hover:text-primary-600 rounded-md transition duration-300">
                    {item.action && <button onClick={item.action}>{item.label}</button>}
                    {item.path && (
                        <Link to={item.path} className="block">
                            {item.label}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default UserHeaderDropdown
