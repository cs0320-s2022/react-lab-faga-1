import React from 'react';
import './App.css';


function TextBox(props : any) {
    const handler = (event : any) => {props.change(event.target.value)}
    return (
        <div className="TextBox">
            <label>
                {props.label}
            </label>
            <input type={"text"} onChange={handler}>
            </input>
        </div>
    );
}

export default TextBox;