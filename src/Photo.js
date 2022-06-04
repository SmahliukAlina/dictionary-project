import React from "react";

export default function Photo(props) {
  return (
    <span className="Photo">
      <a
        href={props.data.url}
        target="_blank"
        rel="noreferrer noopener"
        title={props.data.alt}
      >
        <img
          src={props.data.src.small}
          alt={props.data.alt}
          className="img-fluid m-2 shadow"
        />
      </a>
    </span>
  );
}
