import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: "User",
    initialState: {
        UserData: null,
        UserAddress: null
        
    },
    reducers: {
        setUser: (state,action) => {
            state.UserData = action.payload
        },
        setUserAddress: (state,action) => {
            state.UserAddress = action.payload
        }
    }
})

export const { setUser,setUserAddress } = UserSlice.actions;
export default UserSlice.reducer