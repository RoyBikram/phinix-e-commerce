import { createSlice } from '@reduxjs/toolkit'

const CardSlice = createSlice({
    name: "Card",
    initialState: {
        CardData: null,
        CardProductQuantity: 0
    },
    reducers: {
        setCardData:(state,action) => {
            state.CardData = action.payload
        },
        setCardProductQuantity: (state, action) => {
            state.CardProductQuantity = action.payload
        }
    }
})

export const { setCardData,setCardProductQuantity} = CardSlice.actions;
export default CardSlice.reducer