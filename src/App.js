import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import "./App.css";
import logo from "./assets/logo.svg";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile userName="Le0Hnard" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
