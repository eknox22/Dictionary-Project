import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/eknox22/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Emily Knox-Clifton
          </a>
          {""} and is {""}
          <a
            href="https://github.com/eknox22/Dictionary-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
          {""} and {""}
          <a
            href="https://dictonary-app-reactaddworkshop.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
