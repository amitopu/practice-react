import React, { useState } from "react";

const GoalForm = ({ addGoal }) => {
    const [goal, setGoal] = useState({ goal: "", by: "" });
    const submitHandler = (e) => {
        e.preventDefault();
        addGoal(goal);
        setGoal({ goal: "", by: "" });
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={goal.goal}
                    name="goal"
                    placeholder="Enter goal.."
                    onChange={(e) =>
                        setGoal({ ...goal, [e.target.name]: e.target.value })
                    }
                />
                <input
                    type="text"
                    value={goal.by}
                    name="by"
                    placeholder="enter by.."
                    onChange={(e) =>
                        setGoal({ ...goal, [e.target.name]: e.target.value })
                    }
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default GoalForm;
