import React from "react";
import "./Results.css";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";

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
          {props.res.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic data={phonetic} />
              </div>
            );
          })}
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
