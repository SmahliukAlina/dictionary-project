import React from "react";
import "./Definition.css";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  function showExample(item) {
    if (item) {
      return <span>Example: "{item}"</span>;
    } else {
      return null;
    }
  }

  return (
    <div className="Definition mt-2">
      <div className="definition">{props.data.definition}</div>
      <div className="example">{showExample(props.data.example)}</div>
      <div className="synonyms">
        <Synonyms data={props.data.synonyms} />
      </div>
    </div>
  );
}
