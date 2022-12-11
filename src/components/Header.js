// import Link from "./Link";
import "./Header.css";
import { Link as RouterLink } from "react-router-dom";

function Header({ logo }) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <p>
        Edit <code>src/App.js</code>
        and save to reload.{" "}
      </p>
      <Link url="https://reactjs.org" title="Learn React" /> */}
      <h1>My Portfolio</h1>
      <nav>
        <RouterLink to="/" className="App-link">
          About Me
        </RouterLink>
        <RouterLink to="/projects" className="App-link">
          Projects
        </RouterLink>
      </nav>
    </header>
  );
}

export default Header;
