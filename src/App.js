import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./Footer.css";

export default function App() {
  return (
    <div className="App text-white">
      <div className="container">
        <Weather defaultCity="Sydney" />

        <footer className="footer">
          {" "}
          {}
          This project was coded with 💗 by{" "}
          <a
            href="https://www.github.com/imansfx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Iman Sohail
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/imanfsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            available on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://iman-reactweatherapp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Vercel
          </a>
        </footer>
      </div>
    </div>
  );
}
