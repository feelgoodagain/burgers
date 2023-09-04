import React from 'react';
import Meal from "./Meal/Meal.jsx"
import classes from "./Meals.module.css"
function Meals(props) {
    return (
        <div className={classes.MealsBox}>
            {
                props.mealsData.map((item) =>
                    <Meal key={item.title} meal={item}/>
                )
            }
        </div>

    );
}

export default Meals;