import Header from "./components/Header";
import Profile from "./pages/Profile";
import "./App.css";
import logo from "./assets/logo.svg";

const App = () => {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile userName="Le0Hnard" />
    </div>
  );
};

export default App;
