import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initalState = {
    product: [],
    selectedProduct: {},
    loading: false
}

const BASE_URL = "https://fakestoreapi.com"

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await axios.get(`${BASE_URL}/products`);
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