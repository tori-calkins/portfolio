import React from "react";
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
        <button id="goBackButton">
            <NavLink to="/">
                Go Back
            </NavLink>
        </button>
        </>
    )
}

export default Header