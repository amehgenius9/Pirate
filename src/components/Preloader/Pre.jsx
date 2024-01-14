import React from "react";
import './Pre.Style.css';

const Pre = (props) => {
    return <div id={props.load ? "preloader" : "preloader-none"}></div>
}

export default Pre;
