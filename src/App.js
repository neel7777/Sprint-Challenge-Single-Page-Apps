import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return (
    <main>
      <Header />
      <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/characters" component={CharacterList} />
          <Route path="/" component={WelcomePage} />
        </Switch>
    </main>
  );
}
