import React, { useContext } from 'react';
import classes from "./Counter.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../store/CartContext';
//order items counter component

const Counter = (props) => {
    const cartCtx = useContext(CartContext)
    const changeItem = (meal, action) => {
        cartCtx.changeItem(meal, action)
    }
    return (
        <div className={classes.Counter} onClick={() => { changeItem(props.meal)}}>
            {(props.meal.amount && props.meal.amount != 0) ?
                <>
                    <button className={classes.Minus}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className={classes.Count}>{props.meal.amount}</span>

                </>
                : null
            }

            <div className={classes.Plus}>
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </div>
    );
}

export default Counter;