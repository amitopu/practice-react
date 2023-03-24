import React, { useContext } from "react";
import { mealsContext } from "./MealsContextProvider";

const MealsList = () => {
    const meals = useContext(mealsContext);
    const style = {
        border: "2px solid black",
        width: "250px",
        textAlign: "center",
        marginLeft: "5px",
    };
    return (
        <div>
            {meals.map((meal, index) => (
                <h2 key={index} style={style}>
                    {meal}
                </h2>
            ))}
        </div>
    );
};

export default MealsList;
