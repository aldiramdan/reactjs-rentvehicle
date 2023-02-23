import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer/users'

export const store = configureStore({
    reducer: {
        users: userReducer
    }
})