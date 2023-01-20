import React from 'react';
import { useSelector } from 'react-redux'
import PizzaBlog from '../components/PizzaBlog';

import Categories from '../components/Сategories';
import Sort from '../components/Sort';
import '../scss/app.scss';
import { getPizzaFetch } from '../redux/pizzas/slicePizza'
import { useAppDispatch } from '../redux/store'
//types 
import { RootState } from '../redux/store'
import { PizzaType } from '../types/types'

const Home: React.FC = () => {

    const [sortActive, sortActiveSet] = React.useState(0)
    const dispatch = useAppDispatch()
    const pizzas = useSelector((state: RootState) => state.pizzaSlice.pizzas)

    function setSort(i: number): void {
        sortActiveSet(i)
    }

    React.useEffect(() => {
        dispatch(getPizzaFetch())
    }, [])

    return (
        <div >
            <div className="content__top">
                <Categories />
                <Sort sortActive={sortActive} setSort={setSort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map((obj: PizzaType) => {
                    return < PizzaBlog {...obj} key={obj.id.toString()} />
                })}
            </div>
        </div>
    );
}


export default Home;