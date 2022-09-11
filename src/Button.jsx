import React from "react";
import { useState } from "react";

const Button = (props) => {

    /**stateの追加 */
    const [clickCount, setCount] = useState(0);
    console.log("CLICK COUNT", clickCount);
    function addCount() {
        setCount(clickCount + 1);
    }

    return (
        <button className="btn btn-primary" onClick={addCount}>
            {props.text}
        </button>
    );
}

export default Button;