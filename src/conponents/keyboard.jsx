import React, { useState } from 'react';
import "./keyboardStyle.css";
import "./colorsButtonsStyle.css";

const languages = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',],
    ['`', '!', '@', '#', '$', '%', '^', '&', '*', '(' ,')','_','-','+','=','?','.',',','/',';',':','[',']','~',"'",'"'],
    ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ['😃',  '😅',  '😘', '😜',  '😒', '😤', '😠', '😡', '😟', '🤢', '🤕', '🤠', '🤡', '🤫', '🤓', '😈', '👿', '👻', '👽', '🤖'],
    [" "]
];


function Keyboard(props) {
    const currentL = () => {
        if (props.language == "#$+") {
            return 1;
        }
        if (props.language == "hebrew") {
            return 2;
        }
        if (props.language == "english") {
            return 3;
        }
        if (props.language == "caps-lock") {
            return 4;
        }
        if (props.language == "emoji") {
            return 5;
        }
        

    }
    return (
        <div className='lettersButtons'>
            {languages[0].map((letter, key) => (<button key={key} onClick={() => props.addLetter(letter)} >{letter}</button>))}

            <button onClick={() => { props.deleteLetter() }}>Delete</button>
            <button onClick={() => { props.clearAll() }}>Clear-All</button><br/>

            {languages[currentL()].map((letter, key) => (<button key={key} onClick={() => props.addLetter(letter)} >{letter}</button>))}
            <button onClick={() => { props.changeColorAll();props.changeFontSizeAll() }}>Reset to default mode</button>
            <button onClick={() => { props.undo() }}>Ctrl+Z</button>
            {languages[6].map((letter, key) => (<button className="space" key={key} onClick={() => props.addLetter(letter)} >{letter}</button>))}


        </div>
        
    );
};

export default Keyboard;


