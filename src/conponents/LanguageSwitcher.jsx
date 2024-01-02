import React, { useState } from 'react';
import Language from './Language';
import Keyboard from './keyboard';

function LanguageSwitcher(props) {
    const [currentLanguage, setCurrentLanguage] = useState('hebrew'); // שפת התחלה
    function languageChange(language){
        console.log(currentLanguage);
        setCurrentLanguage(language);
        console.log(language);
    };
    return (
        <div className='languageButton'>
            <Language onSelectLanguage={languageChange} />
            <Keyboard deleteLetter={props.deleteLetter} undo={props.undo} clearAll={props.clearAll} changeColorAll={props.changeColorAll} changeFontSizeAll={props.changeFontSizeAll}language={currentLanguage} addLetter={props.addLetter}  text={props.text} setText={props.setText} />
        </div>
    );
};

export default LanguageSwitcher;