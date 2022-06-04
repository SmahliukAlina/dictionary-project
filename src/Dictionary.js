import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiDictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiDictionaryUrl).then(handleDictionaryResponse);

    //documentation: https://www.pexels.com/api/documentation/?
    const pexelsApiKey =
      "563492ad6f917000010000019b17346c5dbc4e1895e97cf9763e1193";
    let apiPexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=16`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(apiPexelsUrl, { headers }).then(handlePexelsResponse);
  }

  return (
    <div className="Dictionary">
      <div className="row">
        <section className="search-section">
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
        <Results res={result} />
        <Photos data={photos} />
      </div>
    </div>
  );
}
