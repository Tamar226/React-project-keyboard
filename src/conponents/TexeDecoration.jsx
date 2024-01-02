import React from "react";
import { useState } from "react";
function TexeDecoration(props) {
    const [isUnderLine, setIsUnderLine] = useState(false);

    const toggleDecoration = () => {
        setIsUnderLine(!isUnderLine);
        const newDecoration = isUnderLine ? 'none' : 'underLine';
        props.changeTextDecoration(newDecoration);
    };

    return (
        <div>
            <button className="textdecoration" onClick={toggleDecoration}>
                {isUnderLine ? 'U' : 'Uu'}
            </button>
        </div>
    );

}
export default TexeDecoration;