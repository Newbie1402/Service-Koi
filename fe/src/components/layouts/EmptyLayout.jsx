import PropTypes from 'prop-types'

EmptyLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

function EmptyLayout({ children }) {
    return (
        <div className="w-screen h-screen">
            <main>{children}</main>
        </div>
    )
}

export default EmptyLayout
