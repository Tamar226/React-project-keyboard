import { useState } from 'react';
// import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
import WrittenText from './WrittenText';
import LanguageSwitcher from './LanguageSwitcher';
import Colors from './Colors';
import FontSizeLetter from './FontSizeLetter';
import ColorAll from './ColorAll'
import FontSizeAll from './FontSizeAll'
import FontWeight from './FontWeight';
import FontStyle from './FontStyle';
import TexeDecoration from './TexeDecoration';

const saveRecentChanges = [];
const recentStyleChanges = [];
const recentLettersChanges = [];

function WriteOnKeyboard() {
    const [text, setText] = useState([{ key: "2", myText: "", style: { color: "#afaeae", size: "16px", weight: "normal", style: "normal", decoration: "none" } }]);
    function addLetter(letter) {
        let temp = [...text];
        // stringUndo([...temp]);
        if (temp.length == 0) {
            temp.push({ key: "2", myText: "", style: { color: "#afaeae", size: "16px", weight: "normal", style: "normal", decoration: "none" } });
        }
        temp[temp.length - 1].myText += letter;
        setText(temp);
    };
    function changeColor(color) {
        let temp = [...text];
        // styleUndo({ size: temp[temp.length - 1].style.size, color: color, style: temp[temp.length - 1].style.style, weight: temp[temp.length - 1].style.weight, decoration: temp[temp.length - 1].style.decoration });
        if (temp[temp.length - 1].myText == "") {
            temp[temp.length - 1].style.color = color;
        }
        else {
            temp.push({ key: `#`, myText: "", style: { size: temp[temp.length - 1].style.size, color: color, style: temp[temp.length - 1].style.style, weight: temp[temp.length - 1].style.weight, decoration: temp[temp.length - 1].style.decoration } });
        }
        setText(temp);
    };
    function changeFontSize(fontSize) {
        setText(prevText => {
            const temp = [...prevText];
            const currentLetter = temp[temp.length - 1];
            if (currentLetter.myText === "") {
                currentLetter.style.size = fontSize;
            } else {
                temp.push({ key: `#`, myText: "", style: { color: currentLetter.style.color, size: fontSize, style: currentLetter.style.style, weight: currentLetter.style.weight, decoration: currentLetter.style.decoration } });
            }
            return temp;
        });
    }
    function changeFontStyle(fontStyle) {
        let temp = [...text];
        // styleUndo({ key: "#", myText: "", style: { size: temp[temp.length - 1].style.size, color: temp[temp.length - 1].style.color, style: fontStyle, weight: temp[temp.length - 1].style.weight, decoration: temp[temp.length - 1].style.decoration } });
        if (temp[temp.length - 1].myText == "") {
            temp[temp.length - 1].style.style = fontStyle;
        }
        else {
            temp.push({ key: "#", myText: "", style: { size: temp[temp.length - 1].style.size, color: temp[temp.length - 1].style.color, style: fontStyle, weight: temp[temp.length - 1].style.weight, decoration: temp[temp.length - 1].style.decoration } });
        }
        setText(temp)

    }
    function changeFontWeight(weight) {
        const temp = [...text];
        // styleUndo({ key: "#", myText: "", style: { size: temp[temp.length - 1].style.size, color: temp[temp.length - 1].style.color, style: temp[temp.length - 1].style.style, weight: weight, decoration: temp[temp.length - 1].style.decoration } });
        if (temp[temp.length - 1].myText == "") {
            temp[temp.length - 1].style.weight = bold;
        }
        else {
            temp.push({ key: "#", myText: "", style: { size: temp[temp.length - 1].style.size, color: temp[temp.length - 1].style.color, style: temp[temp.length - 1].style.style, weight: weight, decoration: temp[temp.length - 1].style.decoration } });
        }
        setText(temp)
    }
    function changeTextDecoration(decoration) {
        const temp = [...text];
        // styleUndo({ key: "#", myText: "", style: { size: temp[temp.length - 1].style.size, color: temp[temp.length - 1].style.color, style: temp[temp.length - 1].style.style, weight: weight, decoration: decoration } });
        if (temp[temp.length - 1].myText == "") {
            temp[temp.length - 1].style.decoration = decoration;
        }
        else {
            temp.push({ key: "#", myText: "", style: { size: temp[temp.length - 1].style.size, color: temp[temp.length - 1].style.color, style: temp[temp.length - 1].style.style, weight: temp[temp.length - 1].style.weight, decoration: decoration } });
        }
        setText(temp)

    }
    function deleteLetter() {
        let temp = [...text]
        if (temp.length == 1 && temp[0].myText == "")
            return
        if (temp[temp.length - 1].myText == "") {
            temp.pop()
            console.log(temp)
        }
        // stringUndo([...temp]);
        temp[temp.length - 1].myText = temp[temp.length - 1].myText.slice(0, -1);
        setText(temp);

    };
    function clearAll() {
        // stringUndo([...text]);
        setText([{ key: `#`, myText: "", style: { size: 16, color: "#afaeae" } }]);
    };
    function changeColorAll(color) {
        const temp = [...text];
        // styleUndo([...temp]);
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].myText != "") {
                temp[i].style.color = color;
            }
        }
        setText(temp);
    };
    function changeFontSizeAll(fontSize) {
        const temp = [...text];
        // styleUndo([...temp]);
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].myText != "") {
                temp[i].style.size = fontSize;
            }
        }
        setText(temp);
    };
    // function undo() {
    //     if (saveRecentChanges.length > 0) {
    //         if (saveRecentChanges[saveRecentChanges.length - 1] === "recentLettersChanges") {
    //             let temp = [...text];
    //             if (temp[temp.length - 1].myText.length == 1) {
    //                 temp[temp.length - 1].myText = ""
    //             } else
    //                 temp[temp.length - 1].myText = temp[temp.length - 1].myText.slice(0, -1);
    //             setText([...temp]);
    //             recentLettersChanges.pop();
    //             saveRecentChanges.pop();
    //         }
    //         else if (saveRecentChanges[saveRecentChanges.length - 1] === "recentStyleChanges") {
    //             //שמירת המערך של הסטייל בשינוי הצבע ובשינוי הגודל והעיצוב
    //             // let temp=text.map(span=>{
    //             //     let copySpan={...span};});

    //             if (text.length > 0) temp = text.slice(0, -1);
    //             else temp = [{ key: "2", myText: "", style: { color: "#afaeae", size: "16px", weight: "normal", style: "normal", decoration: "none" } }];
    //             setText([...temp]);
    //             recentStyleChanges.slice(0, -1);
    //             saveRecentChanges.slice(0, -1);
    //         }
    //     }
    // }
    // function styleUndo(style) {
    //     saveRecentChanges.concat("recentStyleChanges");
    //     recentStyleChanges.concat(style);
    // }
    // function stringUndo(arr) {
    //     saveRecentChanges.concat("recentLettersChanges");
    //     recentLettersChanges.concat(arr);
    // }

    return (
        <div className='textOnBoard'>
            <WrittenText textToWrite={text} />
            <LanguageSwitcher deleteLetter={deleteLetter} changeFontSize={changeFontSize} clearAll={clearAll} changeColorAll={changeColorAll} changeFontSizeAll={changeFontSizeAll} addLetter={addLetter} text={text} setText={setText} />
            <Colors changeColor={changeColor} />
            <ColorAll changeColorAll={changeColorAll} />
            <FontSizeLetter changeFontSize={changeFontSize} />
            <FontSizeAll changeFontSizeAll={changeFontSizeAll} />
            <FontWeight changeFontWeight={changeFontWeight} />
            <FontStyle changeFontStyle={changeFontStyle} />
            <TexeDecoration changeTextDecoration={changeTextDecoration} />
        </div>
    )
};
export default WriteOnKeyboard;


// let temp = [...text];
// styleUndo({ size: fontSize, color: temp[temp.length - 1].style.color, style: temp[temp.length - 1].style.style, weight: temp[temp.length - 1].style.weight, decoration: temp[temp.length - 1].style.decoration });
// if (temp[temp.length - 1].myText == "") {
//     temp[temp.length - 1].style.size = fontSize;
// }
// else {
//     temp.push({ key: `#`, myText: "", style: {  color: temp[temp.length - 1].style.color, size: fontSize, style: temp[temp.length - 1].style.style, weight: temp[temp.length - 1].style.weight, decoration: temp[temp.length - 1].style.decoration } });
// }