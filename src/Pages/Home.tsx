import React from 'react';
import PizzaBlog from '../components/PizzaBlog';
import Categories from '../components/Сategories';
import Sort from '../components/Sort';
import '../scss/app.scss'
//redux
import { useSelector } from 'react-redux'
import { getPizzaFetch } from '../redux/pizzas/slicePizza'
import { useAppDispatch } from '../redux/store'
//types 
import { RootState } from '../redux/store'
import { PizzaType, HomeProps } from '../types/types'

const Home: React.FC<HomeProps> = ({ searchValue }) => {

    const dispatch = useAppDispatch()
    //state 
    const pizzas = useSelector((state: RootState) => state.pizzaSlice.pizzas)
    const sortLists = useSelector((state: RootState) => state.filterSlice.sortLists)
    const activeSort = useSelector((state: RootState) => state.filterSlice.sctiveSort)
    const listsCatigoris = useSelector((state: RootState) => state.filterSlice.listsCatigoris)
    const activeCategory = useSelector((state: RootState) => state.filterSlice.activeCategory)
    const status = useSelector((state: RootState) => state.pizzaSlice.status)

    //запрос
    const sortFilter = activeSort.sort[0] === '-' ? 'ask' : 'desc'
    const sort = activeSort.sort.replace('-', '')
    const categoryId = activeCategory


    React.useEffect(() => {
        dispatch(getPizzaFetch({ sort, categoryId, sortFilter, searchValue }))
    }, [activeCategory, activeSort, searchValue])

    return (
        <div >
            <div className="content__top">
                <Categories activeCategory={activeCategory} listsCatigoris={listsCatigoris} />
                <Sort sortLists={sortLists} activeSort={activeSort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {status !== 'pending' ? pizzas.map((obj: PizzaType) => {
                    return < PizzaBlog {...obj} key={obj.id.toString()} />
                }) : <span>Loading...</span>}

            </div>
        </div>
    );
}


export default Home;