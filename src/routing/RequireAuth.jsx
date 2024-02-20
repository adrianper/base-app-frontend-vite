import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { noRedirectPaths, routes } from "./routes"

const RequireAuth = () => {
    const { authenticated } = useSelector(store => store.auth)
    const location = useLocation()
    const locationState = {}

    /**
     * Redirect user to the /login page, saving current location to be redirected after sign in
     */
    if (!noRedirectPaths.includes(location.pathname)) locationState.from = location

    return authenticated ? <Outlet /> : <Navigate replace to={routes.login.path} state={locationState} />
}

export default RequireAuth