import { config } from '../configs'

// Guards
import { CustomerGuard, StaffGuard } from '../guards'
// Layouts
import EmptyLayout from '../components/layouts/EmptyLayout'
import DefaultLayout from '../components/layouts/DefaultLayout'
import DashboardLayout from '../components/layouts/DashboardLayout'
// Public Page
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import AppointmentPage from '../pages/AppointmentPage'
import FaqPage from '../pages/FaqPage'
import Services from '../pages/services'
// Auth
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
// Roles Page
import UserPage from '../pages/UserPage'
import UserInformation from '../pages/UserInformation'
import UserBookingAppointment from '../pages/UserBookingAppointment'
import UserHistoryBooking from '../pages/UserHistoryBooking'
import Admin from '../pages/Admin'
import Staff from '../pages/Staff'
import StaffSchedulePage from '../pages/StaffSchedulePage'
import StaffBookingPage from '../pages/StaffBookingPage'

export const globalRoutes = [
    // Public Pages
    { path: config.routes.home, element: HomePage, layout: DefaultLayout },
    { path: config.routes.about, element: AboutPage, layout: DefaultLayout },
    { path: config.routes.appointment, element: AppointmentPage, layout: DefaultLayout },
    { path: config.routes.faq, element: FaqPage, layout: DefaultLayout },
    { path: config.routes.services, element: Services, layout: DefaultLayout },
    // Auth Pages
    { path: config.routes.login, element: LoginPage, layout: EmptyLayout },
    { path: config.routes.register, element: RegisterPage, layout: EmptyLayout },
    // User Pages
    { path: config.routes.user, element: UserPage },
    { path: config.routes.user_information, element: UserInformation, layout: DefaultLayout, guard: CustomerGuard },
    { path: config.routes.user_booking_appointment, element: UserBookingAppointment, layout: DefaultLayout, guard: CustomerGuard },
    { path: config.routes.user_history_booking, element: UserHistoryBooking, layout: DefaultLayout, guard: CustomerGuard },
    // Staff Pages
    { path: config.routes.staff, element: Staff, layout: DashboardLayout, guard: StaffGuard },
    { path: config.routes.staff_schedule, element: StaffSchedulePage, layout: DashboardLayout, guard: StaffGuard },
    { path: config.routes.staff_schedule, element: StaffSchedulePage, layout: DashboardLayout, guard: StaffGuard },
    { path: config.routes.staff_booking, element: StaffBookingPage, layout: DashboardLayout, guard: StaffGuard },
    // Admin Pages
    { path: config.routes.admin, element: Admin, layout: EmptyLayout },
]
