import { createSlice } from '@reduxjs/toolkit'

const OrderSlice = createSlice({
    name: "Order",
    initialState: {
        PendingOrder:null
    },
    reducers: {
        setPendingOrder:(state,action) => {
            state.PendingOrder = action.payload
        },
    }
})

export const { setPendingOrder} = OrderSlice.actions;
export default OrderSlice.reducer