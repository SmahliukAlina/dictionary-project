import React from "react";
import "./Photos.css";
import Photo from "./Photo";

export default function Photos(props) {
  if (props.data) {
    return (
      <div className="Photos">
        <section>
          {props.data.map(function (photo, index) {
            return (
              <span key={index}>
                <Photo data={photo} />
              </span>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
