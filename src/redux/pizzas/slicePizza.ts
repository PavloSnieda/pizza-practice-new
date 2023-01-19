import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { initialStatePizzas, PizzaType, PizzaStatus } from '../../types/types'

interface actionPizza {
    type: string
    payload: PizzaType[]
}

export const getPizzaFetch = createAsyncThunk('users/getPizzaFetch',
    async (thunkAPI) => {

        const { data } = await axios('https://63c810d85c0760f69ac471a8.mockapi.io/pizzas/pizzas')
        return data
    }
)

const initialState: initialStatePizzas = {
    pizzas: [],
    status: PizzaStatus.LOADING
}

const pizzaSlice = createSlice({
    name: 'pizzaSlice',
    initialState,
    reducers: {
        setPizzas(state, action) {
            state.pizzas = action.payload
        }
    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getPizzaFetch.pending, (state: initialStatePizzas) => {
            // pending state doesn't det payload anyway ! That's ridiculous !
            state.status = PizzaStatus.LOADING
        })
        builder.addCase(getPizzaFetch.fulfilled, (state: initialStatePizzas, action: actionPizza) => {
            state.pizzas = action.payload
            state.status = PizzaStatus.SUCCESS
        });
        builder.addCase(getPizzaFetch.rejected, (state: initialStatePizzas) => {
            state.pizzas = []
            state.status = PizzaStatus.REJECTED
        });
    },
})





export const { setPizzas } = pizzaSlice.actions
export default pizzaSlice.reducer