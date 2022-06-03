import React from "react";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  return (
    <div className="Definition mt-2">
      {"- "}
      {props.data.definition}
      <div className="mt-2 text-center">
        <em>{props.data.example}</em>
      </div>
      <div>
        <Synonyms data={props.data.synonyms} />
      </div>
    </div>
  );
}
