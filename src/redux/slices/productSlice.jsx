import { createSlice } from '@reduxjs/toolkit'

const initalState = {
    product: [],
    selectedProduct: {}
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export const { } = productSlice.actions

export default productSlice.reducer