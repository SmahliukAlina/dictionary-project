import React from "react";
import "./Meanings.css";
import Definition from "./Definition";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section>
        <div className="part-of-speech">{props.data.partOfSpeech}</div>
        {props.data.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <Definition data={definition} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
