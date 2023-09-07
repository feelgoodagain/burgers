import React, { useContext } from 'react'
import classes from './Cart.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../store/CartContext'
export default function Cart() {
    const cartCtx = useContext(CartContext)
    return (
        <div className={classes.Cart}>
            <div className={classes.Icon}>
                <FontAwesomeIcon icon={faBagShopping} />
                {cartCtx.totalAmount ?
                    (<span className={classes.TotalAmount}>{cartCtx.totalAmount}</span>) : null
                }
            </div>

            <p className={cartCtx.totalPrice?classes.Price:`${classes.Price} ${classes.NoProduct}`}>{cartCtx.totalPrice ? `$${cartCtx.totalPrice}` : 'None product selected'}</p>
            <button className={classes.CheckoutButton}>Checkout</button>
        </div >
    )
}
