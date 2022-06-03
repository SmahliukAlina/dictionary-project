import React from "react";
import "./Results.css";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.res) {
    return (
      <div className="Results">
        <div className="row">
          <div className="col-3">
            <h2>{props.res.word}</h2>
          </div>
        </div>
        <div className="row">
          {props.res.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meanings data={meaning} number={index + 1} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
