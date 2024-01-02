// import React from "react"
// function FontStyle(props) {
//     return(<div>
//           <button className="fontstyle" onClick={() => props.changeFontStyle("italic")}>italic</button>

//     </div>);
// } ;
// export default FontStyle;
import React, { useState } from 'react';

function FontStyle(props) {
  const [isItalic, setIsItalic] = useState(false);

  const toggleItalic = () => {
    setIsItalic(!isItalic);
    const newStyle = isItalic ? 'normal' : 'italic';
    props.changeFontStyle(newStyle);
  };

  return (
    <div>
      <button className="fontstyle" onClick={toggleItalic}>
        {isItalic ? 'R' : 'I'}
      </button>
    </div>
  );
}

export default FontStyle;
