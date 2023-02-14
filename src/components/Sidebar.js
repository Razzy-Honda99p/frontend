import React from "react";
import {Link} from 'react-router-dom';
import logo from "../assets/images/99P_Labs.png"

function Sidebar(){
    return (
        <div id="sidebar">
            <ul>
            <li>
                <img id="logo" src={logo} alt="logo"/>
            </li>
            <Link to="/" className="link">
                <li className = "sidebar-selection">
                    Dashboard
                </li>
            </Link>
            <Link to="/global" className="link">
                <li className = "sidebar-selection">
                    Global View
                </li>
            </Link>
            </ul>
        </div>
    );
}

export default Sidebar;