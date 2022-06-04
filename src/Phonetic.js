import React from "react";
import Audio from "./Audio";

export default function Phonetic(props) {
  return (
    <div className="Phonetic row mb-2">
      <div className="col-1">{props.data.text}</div>
      <div className="col-1">
        <Audio data={props.data.audio} />
      </div>
    </div>
  );
}
