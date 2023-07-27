import React from 'react';
import classes from "./Counter.module.css"


//order items counter component
function Counter(props) {
    return (
        <div className={classes.Counter}>

            {(props.amount && props.amount != 0) ?
                <>
                    <button className={classes.Minus}>
                        <span>-</span>
                    </button>
                    <span className={classes.Count}>{props.amount}</span>

                </>
                : null
            }

            <button className={classes.Plus}>
                <span>+</span>
            </button>
        </div>
    );
}

export default Counter;