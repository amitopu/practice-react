import React, { useState } from "react";
import Header from "./Header";
import Logo from "./Logo";
import ModeChangeButton from "./ModeChagneButton";

const FirstSection = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <>
            <Header />
            <Logo darkMode={darkMode}></Logo>
            <br />
            <ModeChangeButton
                mode={darkMode}
                change={setDarkMode}
            ></ModeChangeButton>
        </>
    );
};

export default FirstSection;
