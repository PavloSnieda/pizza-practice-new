import React from "react";
//redux
import { useAppDispatch } from '../redux/store'
import { useSelector } from "react-redux";
import { setCategory } from '../redux/fiter/filterSlice'
//types 

import { CategoriesProps } from '../types/types'

const Categories: React.FC<CategoriesProps> = ({ listsCatigoris, activeCategory }) => {

    const dispatch = useAppDispatch()

    return (
        <div className="categories">
            <ul>
                {listsCatigoris.map((el, ind) => {
                    return <li key={el} onClick={() => dispatch(setCategory(ind))} className={activeCategory === ind ? 'active' : ''}> {el} </li>
                })}
            </ul>
        </div>
    )
}

export default Categories