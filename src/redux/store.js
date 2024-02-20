import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/auth/authSlice'

export default configureStore({
    reducer: {
        auth: authSlice
    },
    //*******************************UNCOMMENT FOR PRODUCTION*******************************
    // devTools: false
}) 