import React, { useState } from "react";
import "./Controlled.css";

const Controlled = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let inputValues = { name, email, password };
        console.log(inputValues);
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                        <label htmlFor="name">Name </label>
                        <input
                            placeholder="User Name"
                            id="name"
                            name="name"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email </label>
                        <input
                            placeholder="Email"
                            id="email"
                            name="email"
                            type="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password </label>
                        <input
                            placeholder="Password"
                            id="password"
                            name="password"
                            type="password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className="button">
                        <button>Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Controlled;
