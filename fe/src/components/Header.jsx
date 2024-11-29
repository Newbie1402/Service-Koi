import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { config } from '../configs'
import Navbar from './Navbar'
import { Button } from '@nextui-org/react'
import { FaSignInAlt } from 'react-icons/fa' // Import icon đăng nhập
import { useAuthContext } from '../contexts/AuthContext'
import { isObjectEmpty } from '../ultils/isEmptyObject'
import { Avatar } from '@nextui-org/react'
import UserHeaderDropdown from './UserHeaderDropdown'

function Header() {
    const { authUser } = useAuthContext()

    const headerbar = [
        { label: 'About us', path: config.routes.about },
        { label: 'Faq', path: config.routes.faq },
        { label: 'services', path: config.routes.services },
    ]

    return (
        <header>
            <div className="container py-4 grid grid-cols-[150px_1fr]">
                <Link to={'/'}>
                    <Logo width={200} height={82} />
                </Link>
                <div className="flex items-center justify-end gap-5">
                    <div className="flex items-center justify-end">
                        <ul className="flex items-center justify-start">
                            {headerbar.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path} className="text-[21px] leading-[80px] font-medium uppercase px-[21px] text-primary">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Button className="text-[21px] leading-[80px] font-medium uppercase text-white px-0" color="warning">
                            <Link to={config.routes.appointment} className="px-[21px]">
                                Request Appointment
                            </Link>
                        </Button>
                    </div>
                    <div className="bg-slate-300 w-[2px] h-[40%]" />
                    <div>
                        {!isObjectEmpty(authUser) && (
                            <div className="relative group py-2 z-10">
                                <div className="flex items-center justify-end gap-3 px-5 py-2 rounded-xl group-hover:bg-slate-100 group-hover:shadow-md transition duration-200 cursor-pointer">
                                    <p>Hi, {authUser.name}</p>
                                    <Avatar size="sm" isBordered src={`https://ui-avatars.com/api/?name=${authUser.name}`} />
                                </div>
                                <div className="absolute top-full right-0 hidden group-hover:block bg-slate-100 w-[200px] rounded-md">
                                    <UserHeaderDropdown />
                                </div>
                            </div>
                        )}
                        {isObjectEmpty(authUser) && (
                            <Link to="/login">
                                <Button
                                    color="primary"
                                    className="flex items-center gap-2" // Căn giữa icon và text
                                >
                                    <FaSignInAlt size={20} /> {/* Thêm icon đăng nhập */}
                                    Login
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <Navbar />
        </header>
    )
}

export default Header
