import React from "react";
import logo from "../../logo.svg";

function Logo({ darkMode }) {
    const imageStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: `${darkMode ? "black" : "white"}`,
    };
    const image = <img src={logo} style={imageStyle} alt="" />;

    return image;
}
export default Logo;
