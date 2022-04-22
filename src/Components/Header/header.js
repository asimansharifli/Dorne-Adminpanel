import React from "react";
import "./header.css";
import {Link} from "react-router-dom";

export default function Header(){
    return<>
        <div className="header">
            <div className="logo">
                <img src={require("../../Assets/Logo/logo.png")} alt="Logo"/>
            </div>
            <ul>
                <li><Link to="/">Destination</Link></li>
                <li><Link to="/restuarant">Restuarant</Link></li>
                <li><Link to="/events">Events</Link></li>

            </ul>
        </div>
    </>
}
