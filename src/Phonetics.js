import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props) {
    return (
      <div className="Phonetic">
        <p>{props.phonetic}</p>
        <p className="phonetic">{props.phonetic.text}</p>
      </div>
    );
  } else {
    return null;
  }
}
