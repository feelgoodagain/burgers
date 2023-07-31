import React from 'react';
import classes from "./Counter.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
//order items counter component
function Counter(props) {
    return (
        <div className={classes.Counter}>

            {(props.amount && props.amount != 0) ?
                <>
                    <button className={classes.Minus}>
                        <FontAwesomeIcon icon={faMinus} />

                    </button>
                    <span className={classes.Count}>{props.amount}</span>

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