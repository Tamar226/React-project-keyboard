import React, { useState } from 'react';

const Language = (props) => {
  const [showButtons, setShowButtons] = useState(false);

  const handleShowButtons = () => {
    setShowButtons(true);
  };

  return (
    <div className='showLanguage'>
      <button id="altShift" onClick={handleShowButtons}>Alt+Shift</button>

      {showButtons && (
    <div className='languageButtons'>
      <button className='lngButton' onClick={() => props.onSelectLanguage('hebrew')}>עברית</button>
      <button className='lngButton' onClick={() => props.onSelectLanguage('english')}>English</button>
    </div>
  )}
      <div id="capsLock"><button onClick={() => props.onSelectLanguage('caps-lock')}>caps lock</button></div>
      <button id="emoji" onClick={() => props.onSelectLanguage('emoji')}>😊</button>
      <button id="chars" onClick={() => props.onSelectLanguage('#$+')}>#$+</button>
   
  </div>);
};

export default Language;
