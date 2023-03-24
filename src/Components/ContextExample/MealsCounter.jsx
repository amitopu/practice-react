import React, { useContext } from "react";
import { mealsContext } from "./MealsContextProvider";

const MealsCounter = () => {
    const meals = useContext(mealsContext);
    return <p>Total number of meals {meals.length}</p>;
};

export default MealsCounter;
