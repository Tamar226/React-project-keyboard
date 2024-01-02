import React from "react";
import"./boardStyle.css";
import "./colorsButtonsStyle.css";

export default function WrittenText(props){
   console.log(props); 
return(<p className="board">
    {props.textToWrite.map((spanE , i) =><span key={i} style={{color:spanE.style.color , fontSize:spanE.style.size , fontStyle:spanE.style.style , fontWeight:spanE.style.weight,textDecoration:spanE.style.decoration}}>{spanE.myText}</span>)}
</p>);
}