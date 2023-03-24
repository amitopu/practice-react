import React, { createContext, useState } from "react";

export const mealsContext = createContext([]);
const allMeals = [
    "Fried rice with chicken chap",
    "Cold coffee",
    "Naan roti with chicken grill",
];
const MealsContextProvider = ({ children }) => {
    const [meals] = useState(allMeals);
    return (
        <>
            <mealsContext.Provider value={meals}>
                {children}
            </mealsContext.Provider>
        </>
    );
};

export default MealsContextProvider;
