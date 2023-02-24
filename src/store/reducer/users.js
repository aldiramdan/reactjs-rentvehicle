import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'users',
    initialState: {
        isAuth: false,
        token: '',
        data: {}
    },
    reducers: {
        login(state, actions){
            return {
                ...state,
                isAuth: true,
                token: actions.payload
            }
        },
        logout(state, actions){
            return {
                ...state,
                isAuth:false,
                token: '',
                data: {}
            }
        },
        regUsers(state, actions){
            return {
                ...state,
                data: actions.payload
            }
        }
    }
})

export const { login, logout, regUsers } = userSlice.actions
export default userSlice.reducer