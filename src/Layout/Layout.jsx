import React from 'react'
import { Outlet } from 'react-router-dom'

import { Grid } from '@/components'

import './styles.scss'

const Layout = () => {
    return (
        <Grid className="app_container">
            <Outlet />
        </Grid>
    )
}

export default Layout
