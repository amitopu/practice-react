import React from "react";
import FirstSection from "./Components/FirstSection/FirstSection";
import ContextExample from "./Components/ContextExample/ContextExample";
import ReducerExample from "./Components/ReducerExample/ReducerEmaple";

// app component or main component
function App() {
    return (
        <>
            <FirstSection></FirstSection>
            <ContextExample></ContextExample>
            <ReducerExample></ReducerExample>
        </>
    );
}

export default App;
