import React from "react";
import FirstSection from "./Components/FirstSection/FirstSection";
import ContextExample from "./Components/ContextExample/ContextExample";
import ReducerExample from "./Components/ReducerExample/ReducerEmaple";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

// app component or main component
function App() {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hello" element={<FirstSection />} />
                <Route path="context" element={<ContextExample />} />
                <Route path="reducer" element={<ReducerExample />} />
            </Routes>
        </>
    );
}

export default App;
