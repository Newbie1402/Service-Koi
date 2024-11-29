import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = createContext({
    authUser: {},
    setAuthUser: () => {},
})

// Custom hook to use the AuthContext
export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
    const initAuthUser = JSON.parse(localStorage.getItem('__user-information') ?? '{}')
    const [authUser, setAuthUser] = useState(initAuthUser)

    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>
}
AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
