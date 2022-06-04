import React from "react";
import "./Results.css";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";
import Audio from "./Audio";

export default function Results(props) {
  if (props.res) {
    return (
      <div className="Results">
        <section>
          <div className="row">
            <div className="col-md-4 word">
              <h2>{props.res.word}</h2>
            </div>

            <div className="col-md-4 phonetic">
              {props.res.phonetics.map(function (phonetic, index) {
                return (
                  <span key={index} className="px-2">
                    <Phonetic data={phonetic} />
                  </span>
                );
              })}
            </div>

            <div className="col-md-4 audio">
              {props.res.phonetics.map(function (phonetic, index) {
                return (
                  <span key={index} className="px-2">
                    <Audio data={phonetic} />
                  </span>
                );
              })}
            </div>
          </div>
        </section>
        <div className="row">
          {props.res.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meanings data={meaning} />
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
