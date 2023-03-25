import React, { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === "fuel") return { money: state.money - 50 };
    if (action.type === "passenger") return { money: state.money + 10 };
    return new Error();
};

const initialState = { money: 100 };

const ReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ margin: "25px 0 0 5px" }}>
            <h3>Current wallet balance: {state.money}</h3>
            <button onClick={() => dispatch({ type: "passenger" })}>
                New Passenger
            </button>
            <button onClick={() => dispatch({ type: "fuel" })}>
                Fill Fuel Tank
            </button>
        </div>
    );
};

export default ReducerExample;
