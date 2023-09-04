//cart data and menu data context

import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
    changeItem: () => { }
});

export default CartContext;

