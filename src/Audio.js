import React from "react";

export default function Audio(props) {
  if (props.data.audio) {
    return (
      <a href={props.data.audio} target="_blank" rel="noreferrer noopener">
        <i className="fa-solid fa-volume-high"></i>
      </a>
    );
  } else {
    return null;
  }
}
