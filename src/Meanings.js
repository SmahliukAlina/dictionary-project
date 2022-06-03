import React from "react";
import Definition from "./Definition";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.number}
      {". "}
      {props.data.partOfSpeech}
      {". "}
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <Definition data={definition} />
          </div>
        );
      })}
    </div>
  );
}
