import PropTypes from 'prop-types'
import Sidebar from '../Sidebar'

DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

function DashboardLayout({ children }) {
    return (
        <div className="max-w-screen max-h-screen w-screen h-screen overflow-hidden">
            <div className="grid grid-cols-[280px_1fr]">
                <Sidebar />
                <main className="border-l rounded-tl-lg rounded-bl-lg">{children}</main>
            </div>
        </div>
    )
}

export default DashboardLayout
