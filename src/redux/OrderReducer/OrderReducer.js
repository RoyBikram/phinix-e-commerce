import { createSlice } from '@reduxjs/toolkit'

const OrderSlice = createSlice({
    name: "Order",
    initialState: {
        PendingOrder: null,
        ConfirmOrder: null
    },
    reducers: {
        setPendingOrder:(state,action) => {
            state.PendingOrder = action.payload
        },
        setConfirmOrder:(state,action) => {
            state.ConfirmOrder = action.payload
        }
    }
})

export const { setPendingOrder,setConfirmOrder} = OrderSlice.actions;
export default OrderSlice.reducer