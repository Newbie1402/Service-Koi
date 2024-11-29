import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

function DefaultLayout({ children }) {
    return (
        <div className="w-screen h-screen">
            <Header />
            <main className="min-h-[calc(100vh-499px)]">{children}</main>
            <Footer />
        </div>
    )
}

export default DefaultLayout
