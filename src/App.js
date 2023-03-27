import React from "react";
import FirstSection from "./Components/FirstSection/FirstSection";
import ContextExample from "./Components/ContextExample/ContextExample";
import ReducerExample from "./Components/ReducerExample/ReducerEmaple";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Player from "./Components/Player/Player";
import Controlled from "./Components/Controlled/Controlled";
import Goal from "./Components/Goal/Goal";

// app component or main component
function App() {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hello" element={<FirstSection />} />
                <Route path="/context" element={<ContextExample />} />
                <Route path="/reducer" element={<ReducerExample />} />
                <Route path="/player" element={<Player />} />
                <Route path="/form" element={<Controlled />} />
                <Route path="/goal" element={<Goal />} />
            </Routes>
        </>
    );
}

export default App;
