import React from 'react'
import PropTypes from 'prop-types'

GuestGuard.propTypes = {
    children: PropTypes.node.isRequired,
}

function GuestGuard({ children }) {
    return <React.Fragment>{children}</React.Fragment>
}

export default GuestGuard
