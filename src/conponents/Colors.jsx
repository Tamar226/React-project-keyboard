import React from "react";

function Colors(props) {
    return (
        <div className="colorsButtons">

            <button className="colorButton" onClick={() => props.changeColor("#ff0000")}>🔴</button>
            <button className="colorButton" onClick={() => props.changeColor("#f7a438")}>🟠</button>
            <button className="colorButton" onClick={() => props.changeColor("#f7f759")}>🟡</button>
            <button className="colorButton" onClick={() => props.changeColor("#50f230")}>🟢</button>
            <button className="colorButton" onClick={() => props.changeColor("#edede8")}>⚪</button>
            <button className="colorButton" onClick={() => props.changeColor("#4874f9")}>🔵</button>
            <button className="colorButton" onClick={() => props.changeColor("#f265d8")}>🟣</button>

        </div>);

};
export default Colors;

