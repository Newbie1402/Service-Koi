import React from 'react'
import PropTypes from 'prop-types'

import { Navigate } from 'react-router-dom'

import { useAuthContext } from '../contexts/AuthContext'

import { config } from '../configs'
import { isObjectEmpty } from '../ultils/isEmptyObject'

AdminGuard.propTypes = {
    children: PropTypes.node.isRequired,
}

function AdminGuard({ children }) {
    const { authUser } = useAuthContext()

    if (isObjectEmpty(authUser)) return <Navigate to={config.routes.login} replace />

    return <React.Fragment>{children}</React.Fragment>
}

export default AdminGuard
