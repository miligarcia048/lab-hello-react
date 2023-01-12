// App.js

import "./App.css";
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="app">
      <section className="background">
        <div className="header">
          <img src={logo} alt="" />
          <img className="menu" src={menu} alt="" />
        </div>
        <div className="banner">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use <br />
            the most popular frontend library, <br />
            and become a Super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
      </section>
      <section className="icons">
        <div>
          <img src={icon1} alt="Icon" />
          <h2>Declarative</h2>
          <p>
            React makes it
            <br />
            painless to create <br />
            interactive UIs.
          </p>
        </div>
        <div>
          <img src={icon2} alt="Icon" />
          <h2>Components</h2>
          <p>
            Build encapsulated <br />
            components that <br />
            manage their state.
          </p>
        </div>
        <div c>
          <img src={icon3} alt="Icon" />
          <h2>Single-Way</h2>
          <p>
            A set of immutable <br />
            values are passed to <br />
            the component's.
          </p>
        </div>
        <div>
          <img src={icon4} alt="Icon" />
          <h2>JSX</h2>
          <p>
            Statically-typed, <br />
            designed to run on <br />
            modern browsers.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
