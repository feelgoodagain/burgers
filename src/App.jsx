import React, { useState } from 'react'

import './App.css'
import Meals from "./components/Meals/Meals.jsx";


function App() {
  let MEALS_DATA = [
    { id: 1, title: 'whopper' }
  ]
  const [meals, setMeals] = useState(MEALS_DATA);

  return (
    <div>
      <Meals mealsData={meals}></Meals>
    </div>
  )
}

export default App
