/**Routes keys */
export const routesKeys = {
    home: 'home',
    login: 'login',
    signup: 'signup',
    recover_password: 'recover_password',
    vite_counter: 'vite_counter',
}

/* (If apply)
 * headerRoutes: string[] ->    links that will be displayed in header
 * sideMenuRoutes: string[] ->  links that will be displayed in side menu
 * noRedirectPaths: string[] -> routes that are not applied to redirect after sign in
 */
export const headerRoutes = []
export const sideMenuRoutes = []
export const noRedirectPaths = []

/* routes access types
 * publicRoutes: string[]   ->      does not matter if a user session exists
 * requireNoAuthRoutes: string[] -> routes require a user session does not exist
 * requireAuthRoutes: string[] ->   routes require a user session exists
 */
export const publicRoutes = [routesKeys.vite_counter]
export const requireNoAuthRoutes = [routesKeys.login, routesKeys.signup, routesKeys.recover_password]
export const requireAuthRoutes = [routesKeys.home]

/**
 * Routes object
 * path -> text displayed in url
 * linkName -> text to display in app links (header, sidemenu)
 */

export const routes = {
    [routesKeys.home]: {
        path: '/',
        linkName: 'Home',
    },
    [routesKeys.login]: {
        path: '/inicia_sesion',
        linkName: 'Login',
    },
    [routesKeys.signup]: {
        path: '/registro',
        linkName: 'Signup',
    },
    [routesKeys.recover_password]: {
        path: '/recover_password',
        linkName: 'Recover password',
    },
    [routesKeys.vite_counter]: {
        path: '/contador_vite',
        linkName: 'Vite Counter',
    }
}
