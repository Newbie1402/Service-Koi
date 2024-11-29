import { Link, NavLink } from 'react-router-dom'
import { config } from '../configs'
import Logo from './Logo'

function Sidebar() {
    const SIDEBAR_MENUS = [
        { id: 1, path: config.routes.staff, label: 'Staff Home' },
        { id: 2, path: config.routes.staff_schedule, label: 'Staff Schedule' },
        { id: 3, path: config.routes.staff_booking, label: 'Staff Booking' },
    ]
    return (
        <aside className="w-full h-screen">
            <div className="flex items-center justify-center">
                <Link to={config.routes.home}>
                    <Logo width={100} height={100} />
                </Link>
            </div>

            <div className="border-t p-5 h-[calc(100%-80px)] overflow-y-scroll no-scrollbar">
                <ul>
                    {SIDEBAR_MENUS.map((item) => (
                        <li key={item.id} className="mb-5">
                            <NavLink
                                to={item.path}
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? 'w-full inline-flex items-center justify-start gap-2.5 p-[14px] bg-primary-50 text-primary-600 rounded-lg transition duration-200 hover:text-primary-600'
                                        : 'w-full inline-flex items-center justify-start gap-2.5 p-[14px] transition duration-200 hover:text-primary-600'
                                }
                            >
                                <p className="text-sm font-semibold">{item.label}</p>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
