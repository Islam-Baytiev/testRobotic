import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {instance} from "../../API/instance";
import {ISmartAccessory} from "../../Models/DataDTO";




type SmartState = {
    smart: ISmartAccessory[];
    isLoading: boolean;
    isError: boolean;
}

export const fetchSmartStore = createAsyncThunk<ISmartAccessory[]>('smart/fetchSmartStatus', async () => {
    const { data } = await instance.get('/products');
    return data.products;
});

const initialState: SmartState = {
    smart: [],
    isLoading: false,
    isError: false,
};

const smartData = createSlice({
    name: 'smart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSmartStore.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSmartStore.fulfilled, (state, action) => {
                state.isLoading = false;
                state.smart = [...state.smart, ...action.payload]
            })
            .addCase(fetchSmartStore.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
        });
    },
});
export default smartData.reducer;
