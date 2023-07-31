import React, { useState } from 'react';
import classes from "./Meal.module.css"
import Counter from "../../UI/Counter/Counter.jsx";
function Meal() {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src="\img\1.png" />
            </div>
            <div>
                
            </div>
            <div className={classes.ContentBox}>
                <h2 className={classes.Title}>
                    burger
                </h2>
                <p className={classes.Des}>
                    one of the best and most popular burgers
                </p>
                <div className={classes.PriceTag}>
                    <span>$12</span>
                    <div>
                        <Counter amount={1}></Counter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meal;