import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import pizzaSlice from './pizzas/slicePizza'
import filterSlice from './fiter/filterSlice'

const store = configureStore({
    reducer: {
        pizzaSlice,
        filterSlice
    }
});


export type AppDispatch = typeof store.dispatch // #вопрос
export const useAppDispatch: () => AppDispatch = useDispatch // #вопрос
type typeState = typeof store.getState
export type RootState = ReturnType<typeState> // можно еще через комбайн редюсерс
export default store