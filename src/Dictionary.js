import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(word);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          className="search"
          placeholder="Search for any word"
          autoFocus={true}
          autoComplete={false}
          onChange={handleWordChange}
        />
        <button className="submit ms-2">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}
