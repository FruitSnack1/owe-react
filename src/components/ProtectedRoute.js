import React from "react"
import { Route, Redirect } from "react-router-dom"
import auth from "../auth/auth"

const ProtectedRoute = ({
    children,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={() => (auth.isAuthenticated() ? children : <Redirect to="/login" />)}
        />
    )
}

export default ProtectedRoute
