import React from 'react'
import classes from './Cart.module.scss'
import IconImg from '../../assets/bag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
export default function Cart() {
    return (
        <div className={classes.Cart}>
            <div className={classes.Icon}>
                <FontAwesomeIcon icon={faBagShopping} />
                <span className={classes.TotalAmount}>$222</span>
            </div>
            <p className={classes.Price}>24</p>
            <button>Checkout</button>
        </div>
    )
}
