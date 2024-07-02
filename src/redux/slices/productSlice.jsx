import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initalState = {
    product: [],
    selectedProduct: {},
    loading: false
}

const BASE_URL = "https://fakestoreapi.com/products"

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {

})

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