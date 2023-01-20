import { createSlice } from '@reduxjs/toolkit'
import { FilterSliceState } from '../../types/types'


const initialState: FilterSliceState = {
    //category
    activeCategory: 0,
    listsCatigoris: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
    // sort
    sortLists: [
        { id: 0, title: 'популярности', sort: 'rating' },
        { id: 2, title: 'цене', sort: 'price' },
        { id: 3, title: 'алфавиту', sort: 'title' },
        { id: 4, title: 'популярности (ASK - от большего)', sort: '-rating' },
        { id: 5, title: 'цене (ASK - от большего)', sort: '-price' },
        { id: 6, title: 'алфавиту (ASK - от большего)', sort: '-title' }
    ],
    sctiveSort: { id: 0, title: 'популярности', sort: 'rating' },
    //input 
    searchValue: ''

}

export const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setCategory(state: FilterSliceState, action) {
            state.activeCategory = action.payload
        },
        setSort(state: FilterSliceState, action) {
            state.sctiveSort = action.payload
        },
        setValue(state: FilterSliceState, action) {
            state.searchValue = action.payload
        }
    },
})





export const { setCategory, setSort, setValue } = filterSlice.actions
export default filterSlice.reducer