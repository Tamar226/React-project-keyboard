import React, { useState } from 'react';

function FontWeight(props) {
  const [isBold, setIsBold] = useState(false);

  const toggleBold = () => {
    setIsBold(!isBold);
    const newWeight = isBold ? 'normal' : 'bold';
    props.changeFontWeight(newWeight);
  };

  return (
    <div>
      <button className="fontweight" onClick={toggleBold}>
        {isBold ? 'R' : 'B'}
      </button>
    </div>
  );
}

export default FontWeight;
