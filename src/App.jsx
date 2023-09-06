import React, { useState } from 'react'
import CartContext from './components/store/CartContext';
import './App.scss'
import Meals from "./components/Meals/Meals.jsx";
import Filter from './components/Filter/Filter';
import Cart from "./components/Cart/Cart"

function App() {
  // TODO: 1.change all the css file into scss format
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
  }

  const filterHandler = (keywords) => {
    console.log(keywords);
    const New_MEALS_DATA = MEALS_DATA.filter(item => item.title.indexOf(keywords) !== -1)
    setMeals(New_MEALS_DATA)
  }
  return (
    <CartContext.Provider value={{ ...cartData, changeItem }}>
      <div>
        <Filter filterHandler={filterHandler} />
        <Meals mealsData={meals}></Meals>
        <Cart></Cart>
      </div>
    </CartContext.Provider >
  )
}

export default App
