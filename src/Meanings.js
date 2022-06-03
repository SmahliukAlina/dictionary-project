import React from "react";
import Definition from "./Definition";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <strong>
        {props.number}
        {". "}
        <em>{props.data.partOfSpeech}</em>
        {". "}
      </strong>
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
