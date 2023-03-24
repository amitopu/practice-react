import React from "react";
import MealsContextProvider from "./MealsContextProvider";
import MealsList from "./MealsList";
import MealsCounter from "./MealsCounter";

const ContextExample = () => {
    return (
        <>
            <h1>List of all meals</h1>
            <MealsContextProvider>
                <MealsList></MealsList>
                <MealsCounter></MealsCounter>
            </MealsContextProvider>
        </>
    );
};

export default ContextExample;
