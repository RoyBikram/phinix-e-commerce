import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: "User",
    initialState: {
        UserData:null
    },
    reducers: {
        setUser: (state,action) => {
            state.UserData = action.payload
        }
    }
})

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer