import React from "react";

const DisplayGoal = ({ goals }) => {
    return (
        <div>
            {goals.map((g) =>
                g.goal ? (
                    <li key={g.goal}>
                        <span>{g.goal}</span> by <span>{g.by}</span>
                    </li>
                ) : (
                    <span></span>
                )
            )}
        </div>
    );
};

export default DisplayGoal;
