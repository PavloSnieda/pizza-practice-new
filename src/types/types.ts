//Header

export interface HeaderProps {
    searchValue: string
}

//Home

export interface HomeProps {
    searchValue: string
}


// Sort 
export interface PropsSort {
    // setSort: (i: number) => void,
    activeSort: ItemPopup
    sortLists: ItemPopup[]


}

export interface ItemPopup {
    id: number
    title: string
    sort: string
}

export interface CategoriesProps {
    listsCatigoris: string[]
    activeCategory: number
}

//slicePizza

export interface TypeAsyncThunk {
    sortFilter: string
    sort: string
    categoryId: number
    searchValue: string
}

export interface PizzaType {
    "id": number,
    "imageUrl": string,
    "title": string,
    "types": number[],
    "sizes": number[],
    "price": number,
    "category": number,
    "rating": number
}


export interface initialStatePizzas {
    pizzas: PizzaType[],
    status: string
}

export enum PizzaStatus {
    LOADING = 'pending',
    SUCCESS = 'succeeded',
    REJECTED = 'failed'
}

//filtes slice 

export interface FilterSliceState {
    activeCategory: number;
    listsCatigoris: string[];
    sortLists: ItemPopup[]
    sctiveSort: ItemPopup
    searchValue: string
}
