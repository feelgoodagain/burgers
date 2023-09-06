import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from "./Filter.module.scss"

export const Filter = () => {
    return (
        <div className={classes.MenuFilter}>
            <div className={classes.FilterBox}>
                <input className={classes.FilterInput} type="text" placeholder='please input keywords' />
                <FontAwesomeIcon className={classes.FilterIcon} icon={faSearch} />
            </div>
        </div>
    )
}
export default Filter;