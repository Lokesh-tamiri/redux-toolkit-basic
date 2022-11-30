import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        },
        increaseByPayload: (state, payload) => {
            state.count += parseInt(payload.payload)
        }
    }
})


export const { increment, decrement, reset, increaseByPayload } = counterSlice.actions;
export default counterSlice.reducer