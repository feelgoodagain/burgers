import React, { useContext } from 'react';
import classes from "./Counter.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../store/CartContext';
//order items counter component

const Counter = (props) => {
    const cartCtx = useContext(CartContext)
    const changeItem = (e, meal) => {
        if (e.target.id) {
            cartCtx.changeItem(meal, e.target.id)
        }
    }
    return (
        <div className={classes.Counter} onClick={(e) => { changeItem(e, props.meal) }}>
            {(props.meal.amount && props.meal.amount != 0) ?
                <>
                    <div className={classes.Minus} >
                        <FontAwesomeIcon icon={faMinus} id='remove'/>
                    </div>
                    <span className={classes.Count}>{props.meal.amount}</span>

                </>
                : null
            }

            <div className={classes.Plus} >
                <FontAwesomeIcon icon={faPlus} id='add'/>
            </div>
        </div>
    );
}

export default Counter;