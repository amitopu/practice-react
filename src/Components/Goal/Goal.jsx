import React, { useState } from "react";
import DisplayGoal from "./DisplayGoal";
import GoalForm from "./GoalForm";

const Goal = () => {
    const [goals, setGoals] = useState([]);
    const addGoal = (goal) => {
        setGoals([...goals, goal]);
    };
    return (
        <div>
            <h1>Add goals/slogan for your brand.</h1>
            <GoalForm addGoal={addGoal}></GoalForm>
            <DisplayGoal goals={goals}></DisplayGoal>
        </div>
    );
};

export default Goal;
