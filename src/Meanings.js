import React from "react";

export default function Meanings(props) {
  return (
    <div className="meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <p>{props.meanings.definition}</p>
    </div>
  );
}
