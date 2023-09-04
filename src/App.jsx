import React, { useState } from 'react'
import CartContext from './components/store/CartContext';
import './App.css'
import Meals from "./components/Meals/Meals.jsx";


function App() {

  // data retrieved from backend server API
  let MEALS_DATA = [
    { id: 1, title: 'whopper', amount: 0, price: 12 },
    { id: 2, title: 'whopper2', amount: 0, price: 12 },
    { id: 3, title: 'whopper3', amount: 0, price: 12 },
    { id: 4, title: 'whopper4', amount: 0, price: 12 },
    { id: 5, title: 'whopper5', amount: 0, price: 12 },
    { id: 6, title: 'whopper6', amount: 0, price: 12 },
    { id: 7, title: 'whopper7', amount: 0, price: 12 },
  ]
  // init meals display state
  const [meals, setMeals] = useState(MEALS_DATA);
  // init cart items state
  const [cartData, setCartData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0
  })
  const changeItem = (meal, action) => {
    const newCart = { ...cartData }
    console.log(action);
    switch (action) {
      case 'add':
        if (newCart.items.indexOf(meal) === -1) {
          newCart.items.push(meal)
          meal.amount = 1
        } else {
          meal.amount += 1
        }
        newCart.totalAmount += 1;
        newCart.totalPrice += meal.price
        break;
      case 'remove':
        meal.amount -= 1;
        if (meal.amount === 0) {
          newCart.items.splice(newCart.items.indexOf(meal), 1)
        }
        newCart.totalAmount -= 1
        newCart.totalPrice -= meal.price
        break;
    }
    setCartData(newCart)
    console.log(newCart);
  }
  return (
    <CartContext.Provider value={{ ...cartData, changeItem }}>
      <div>
        <Meals mealsData={meals}></Meals>
      </div>
    </CartContext.Provider >
  )
}

export default App
