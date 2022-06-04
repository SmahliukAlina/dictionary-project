import React from "react";

export default function Audio(props) {
  if (props.data) {
    return (
      <a href={props.data} target="_blank" rel="noreferrer noopener">
        <i className="fa-solid fa-volume-high"></i>
      </a>
    );
  } else {
    return null;
  }
}
