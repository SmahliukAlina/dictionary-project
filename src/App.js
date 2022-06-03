import "./App.css";
import logo from "./logo.svg";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container header">
        <header className="App-header">
          <h1>
            <img src={logo} alt="app-logo" className="logo-app" />
            Dictionary App
          </h1>
        </header>
      </div>
      <div className="container main">
        <main className="App-main py-2 px-5">
          <Dictionary />
        </main>
      </div>
      <div className="container footer">
        <footer className="App-footer text-center">
          This project was coded by{" "}
          <a
            href="https://classy-semolina-bd4086.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            title="Alina`s Portfolio Site"
          >
            Alina Smahliuk
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SmahliukAlina/dictionary-project"
            target="_blank"
            rel="noreferrer noopener"
            title="Project on GitHub"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
