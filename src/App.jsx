import React from 'react'
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { publicRoutes, requireAuthRoutes, requireNoAuthRoutes, routes, routesKeys } from './routing/routes'
import { useComposeProviders } from './hooks'
import Layout from './Layout/Layout'
import RequireAuth from './routing/RequireAuth'
import RequireNoAuth from './routing/RequireNoAuth'
import { MessageBoxContextProvider } from './context/MessageDialogContext'
import { LoadingAppContextProvider } from './context/LoadingAppContext'
import store from './redux/store'
import AxiosProvider from './config/AxiosProvider'

import { Home, Login, RecoverPassword, Signup, ViteCounter } from './Pages'

const routeElements = {
  [routesKeys.home]: <Home />,
  [routesKeys.login]: <Login />,
  [routesKeys.signup]: <Signup />,
  [routesKeys.recover_password]: <RecoverPassword />,
  [routesKeys.vite_counter]: <ViteCounter />,
}

function App() {
  const RouterProviders = useComposeProviders(BrowserRouter, Routes)
  const AppProviders = useComposeProviders(
    MessageBoxContextProvider,
    LoadingAppContextProvider,
  )

  return (
    <ReduxProvider store={store}>
      <AppProviders>
        <RouterProviders>
          <Route element={<AxiosProvider />}>
            <Route exact path="" element={<Layout />}>
              {publicRoutes.map(routeName =>
                <Route key={routeName} path={routes[routeName].path} element={routeElements[routeName]} />
              )}
              <Route element={<RequireAuth />}>
                {requireAuthRoutes.map(routeName =>
                  <Route key={routeName} path={routes[routeName].path} element={routeElements[routeName]} />
                )}
              </Route>
              <Route element={<RequireNoAuth />}>
                {requireNoAuthRoutes.map(routeName =>
                  <Route key={routeName} path={routes[routeName].path} element={routeElements[routeName]} />
                )}
              </Route>
            </Route>
          </Route>
          < Route path="*" element={<Navigate to="" replace />} />
        </RouterProviders>
      </AppProviders>
    </ReduxProvider>
  )
}

export default App
