import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const styleNav = {
        width: "100%",
        height: "90px",
        display: "flex",
        justifyContent: "flex-start",
        padding: "0 120px 0 120px",
        alignItems: "center",
        backgroundColor: "black",
    };

    const stylelink = {
        color: "white",
        marginLeft: "15px",
        fontSize: "16px",
        textDecoration: "none",
    };

    return (
        <div style={styleNav}>
            <Link style={stylelink} to="/">
                Home
            </Link>
            <Link style={stylelink} to="/hello">
                Hello
            </Link>
            <Link style={stylelink} to="/context">
                Context
            </Link>
            <Link style={stylelink} to="/reducer">
                Reducer
            </Link>
        </div>
    );
};

export default Navbar;
