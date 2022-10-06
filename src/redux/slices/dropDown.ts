import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    dropdownValue: 'Phone',
    dropdownState: false,
};
const dropDown = createSlice({
    name: 'dropDown',
    initialState,
    reducers: {
        setDropdownState(state) {
            state.dropdownState = !state.dropdownState;
        },
        setDropDownValue(state, action) {
            state.dropdownValue = action.payload
        },
    },
});
export const {setDropdownState, setDropDownValue} = dropDown.actions
export default dropDown.reducer;
