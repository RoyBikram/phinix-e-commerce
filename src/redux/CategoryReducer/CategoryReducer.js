import { createSlice } from '@reduxjs/toolkit'

const CategorySlice = createSlice({
    name: "Category",
    initialState: {
        CategoryData:null
    },
    reducers: {
        setCategoryData:(state,action) => {
            state.CategoryData=action.payload
        }
    }
})

export const { setCategoryData } = CategorySlice.actions;
export default CategorySlice.reducer