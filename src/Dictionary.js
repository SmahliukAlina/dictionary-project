import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function handleWordChange(event) {
    setWord(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <div className="row">
        <section>
          <form onSubmit={search}>
            <input
              className="search"
              placeholder="Search for any word"
              autoFocus={true}
              onChange={handleWordChange}
            />
            <button className="submit ms-2">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </section>
      </div>

      <div className="row">
        <Results res={result} />
      </div>
    </div>
  );
}
