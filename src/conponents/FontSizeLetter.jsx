import React, { useState } from 'react';

function FontSizeLetter(props) {
   const [showOptions, setShowOptions] = useState(false);

   const toggleOptions = () => {
      setShowOptions(!showOptions);
   };

   const handleFontSizeChange = (fontSize) => {
      props.changeFontSize(fontSize);
      toggleOptions();
   };

   return (
      <div className="fontSizeButtons">
         <button className="changeFontSizeButton" onClick={toggleOptions}>
            {showOptions ? 'A' : 'AA'}
         </button>

         {showOptions && (
            <div className="fontSizeOptionsContainer">
               <button className="sizeButton" onClick={() => handleFontSizeChange('12px')}>12</button>
               <button className="sizeButton" onClick={() => handleFontSizeChange('20px')}>20</button>
               <button className="sizeButton" onClick={() => handleFontSizeChange('24px')}>24</button>
               <button className="sizeButton" onClick={() => handleFontSizeChange('28px')}>28</button>
            </div>
         )}
      </div>
   );
}

export default FontSizeLetter;
