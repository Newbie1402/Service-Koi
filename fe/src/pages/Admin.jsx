import { useState } from 'react'
import Efficiency from '../components/admin/Efficiency'
import DoctorsWorkSchedule from '../components/admin/DoctorsWorkSchedule'
import CustomersSchedule from '../components/admin/CustomersSchedule'
import Blogs from '../components/admin/Blogs'
import CustomerProfile from '../components/admin/CustomerProfile'
import '../styles/Admin.css'
import ServiceManagement from '../components/admin/ServiceManagement'

const Admin = () => {
    // State để lưu tên của component đang hiển thị
    const [activeComponent, setActiveComponent] = useState('Efficiency')

    // Hàm thay đổi component khi nhấn vào mục trong sidebar
    const handleMenuClick = (componentName) => {
        setActiveComponent(componentName)
    }

    return (
        <div className="admin-container flex">
            {/* Sidebar */}
            <div className="sidebar">
                <h2 className="text-xl font-semibold mb-6">ADMIN Manage</h2>
                <ul>
                    <li className="mb-4">
                        <div className={`text-lg cursor-pointer ${activeComponent === 'Efficiency' ? 'active' : ''}`} onClick={() => handleMenuClick('Efficiency')}>
                            Efficiency
                        </div>
                    </li>
                    <li className="mb-4">
                        <div className={`text-lg cursor-pointer ${activeComponent === 'DoctorsWorkSchedule' ? 'active' : ''}`} onClick={() => handleMenuClick('DoctorsWorkSchedule')}>
                            Doctor Management
                        </div>
                    </li>
                    <li className="mb-4">
                        <div className={`text-lg cursor-pointer ${activeComponent === 'ServiceManagement' ? 'active' : ''}`} onClick={() => handleMenuClick('ServiceManagement')}>
                            Service Management
                        </div>
                    </li>
                </ul>
            </div>

            {/* Main content */}
            <div className="main-content">
                {/* Render component tương ứng dựa trên activeComponent */}
                {activeComponent === 'Efficiency' && <Efficiency />}
                {activeComponent === 'DoctorsWorkSchedule' && <DoctorsWorkSchedule />}
                {activeComponent === 'ServiceManagement' && <ServiceManagement />}
            </div>
        </div>
    )
}

export default Admin
