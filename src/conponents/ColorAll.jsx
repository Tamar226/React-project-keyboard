import React, { useState } from 'react';
import './colorsButtonsStyle.css';

function ColorAll(props) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleColorChange = (color) => {
    props.changeColorAll(color);
    toggleOptions(); // להסתיר את האופציות לאחר בחירת צבע
  };

  return (
    <div className="colorsAllButtons">
      <button className="changeColorAllButton" onClick={toggleOptions}>
        {showOptions ? '✕' : '🎨'}
      </button>

      {showOptions && (
        <div className="optionsContainerAll">
          <button className="colorAllButton" onClick={() => handleColorChange("#ff0000")}>🔴</button>
          <button className="colorAllButton" onClick={() => handleColorChange("#f7f759")}>🟡</button>
          <button className="colorAllButton" onClick={() => handleColorChange("#50f230")}>🟢</button>
          <button className="colorAllButton" onClick={() => handleColorChange("#4874f9")}>🔵</button>
          <button className="colorAllButton" onClick={() => handleColorChange("#f265d8")}>🟣</button>
        </div>
      )}
    </div>
  );
}

export default ColorAll;
