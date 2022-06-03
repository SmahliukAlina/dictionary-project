import React from "react";

export default function Definition(props) {
  return (
    <div className="Definition mt-2">
      {"- "}
      {props.data.definition}
      <div className="mt-2 text-center">
        <em>{props.data.example}</em>
      </div>
    </div>
  );
}
