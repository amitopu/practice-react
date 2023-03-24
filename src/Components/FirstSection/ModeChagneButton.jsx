import React from "react";

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

export default ModeChangeButton;
