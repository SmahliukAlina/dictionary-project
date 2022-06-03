import React from "react";

export default function Definition(props) {
  return (
    <div className="Definition">
      {"- "}
      {props.data.definition}
      <div>{props.data.example}</div>
    </div>
  );
}
