import { useState } from "react";
import logo from "./logo.svg";

// header component
function Header() {
    return <h1>Hello world</h1>;
}

// logo component
function Logo({ darkMode }) {
    const imageStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: `${darkMode ? "black" : "white"}`,
    };
    const image = <img src={logo} style={imageStyle} alt="" />;

    return image;
}

const ModeChangeButton = ({ mode, change }) => {
    let darkModeOn = <p>Dark mode is on</p>;
    let darkModeOff = <p>Dark mode is off</p>;
    const modeChangeHandler = () => {
        change((mode) => !mode);
        // if (!mode) {
        //     console.log("Dark mode is turned on");
        // } else {
        //     console.log("Dark mode is turned off");
        // }
    };

    return (
        <>
            {mode ? darkModeOn : darkModeOff}
            <button onClick={modeChangeHandler}>change mode</button>
        </>
    );
};

// app component or main component
function App() {
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
}

export default App;
