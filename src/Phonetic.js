import React from "react";

export default function Phonetic(props) {
  console.log(props.data);
  return <span className="Phonetic">{props.data.text}</span>;
}
