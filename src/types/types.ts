// Sort 
export interface PropsSort {
    setSort: (i: number) => void,
    sortActive: number
}

export interface ItemPopup {
    id: number,
    title: string
}

//slicePizza

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
