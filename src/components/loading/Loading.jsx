import React, { memo } from 'react'
import './loading.scss'
import './loading_colors.scss'

const Loading = props => {
    const {
        isLoading = false
    } = props

    if (!isLoading) return null
    return (
        <div className='loading_container'>
            <div className='circle' />
        </div>
    )
}

export default memo(Loading)