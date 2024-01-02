import React, { useState } from 'react';

function FontSizeAll(props) {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleFontSizeChange = (fontSize) => {
        props.changeFontSizeAll(fontSize);
        toggleOptions();
    };

    return (
        <div className="fontSizeAllButtons">
            <button className="changeFontSizeAllButton" onClick={toggleOptions}>
                {showOptions ? 'A' : 'AA-All'}
            </button>

            {showOptions && (
                <div className="fontSizeAllOptionsContainer">
                    <button className="sizeAllButton" onClick={() => handleFontSizeChange('12px')}>12</button>
                    <button className="sizeAllButton" onClick={() => handleFontSizeChange('20px')}>20</button>
                    <button className="sizeAllButton" onClick={() => handleFontSizeChange('24px')}>24</button>
                    <button className="sizeAllButton" onClick={() => handleFontSizeChange('28px')}>28</button>
                </div>
            )}
        </div>
    );
}

export default FontSizeAll;
