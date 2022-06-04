import React from "react";
import "./Audio.css";

export default function Audio(props) {
  if (props.data.audio) {
    return (
      <span className="Audio">
        <a href={props.data.audio} target="_blank" rel="noreferrer noopener">
          <i className="fa-solid fa-volume-high"></i>
        </a>
      </span>
    );
  } else {
    return null;
  }
}
