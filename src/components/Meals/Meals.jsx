import React from 'react';
import Meal from "./Meal/Meal.jsx"
import classes from "./Meals.module.css"
function Meals() {
    return (
        <div className={classes.MealsBox}>
            <Meal></Meal>
            <Meal></Meal>
            <Meal></Meal>
            <Meal></Meal>
            <Meal></Meal>
            <Meal></Meal>
            <Meal></Meal>
            <Meal></Meal>
            <Meal></Meal>
            <Meal></Meal>
            <Meal></Meal>
        </div>

    );
}

export default Meals;