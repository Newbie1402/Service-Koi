import { useState } from 'react'
import Footer from '../components/Footer'
import Exam from '../components/home-sections/Exam'
import Hero from '../components/home-sections/Hero'
import HouseTime from '../components/home-sections/HouseTime'
import Meeting from '../components/home-sections/Meeting'
import OurServices from '../components/home-sections/OurServices'
import WeCome from '../components/home-sections/WeCome'
import { config } from '../configs'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@nextui-org/react'
import { FaUser } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'

function UserPage() {
    const [showLogout, setShowLogout] = useState(false)
    const navigate = useNavigate()

    const headerbar = [
        { label: 'About us', path: config.routes.about },
        { label: 'Faq', path: config.routes.faq },
        { label: 'Services', path: config.routes.services },
    ]

    const handleLogout = () => {
        // Xử lý đăng xuất ở đây
        // Ví dụ: Xóa token, điều hướng về trang đăng nhập, v.v.
        navigate('/')
    }

    return (
        <div className="w-full h-full">
            <header>
                <div className="container py-4 grid grid-cols-[150px_1fr] gap-3">
                    <Link to={'/'}>
                        <Logo width={200} height={82} />
                    </Link>
                    <div style={{ gap: '100px' }} className="flex items-center justify-center">
                        <div className="flex items-center">
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

                        <div className="relative">
                            <FaUser size={30} onClick={() => setShowLogout(!showLogout)} className="cursor-pointer text-primary" />

                            {/* Nút Đăng xuất */}
                            {showLogout && (
                                <Button color="error" className="absolute top-full mt-2" onClick={handleLogout}>
                                    Đăng xuất
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
                <Navbar />
            </header>
            <Hero />
            <HouseTime />
            <Meeting />
            <WeCome />
            <Exam />
            <OurServices />
            <Footer />
        </div>
    )
}

export default UserPage
