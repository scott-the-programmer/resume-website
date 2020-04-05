import React from "react";
import "./App.css";
import AppHeader from "./header/AppHeader";
import Hero from "./hero/Hero";

function App() {
  return (
    <div class="cool-bg" role="main">
      <header>
        <AppHeader />
      </header>
      <div>
        <Hero></Hero>
      </div>
    </div>
  );
}

export default App;
