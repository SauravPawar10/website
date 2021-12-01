import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUsScreen from "./Components/AboutAcademy/AboutUsScreen";
import { Fragment } from "react";

function App() {
  return (
    <Router basename={"/"}>
      <Fragment>
        <Routes>
          <Route path="/" element={<AboutUsScreen />}></Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
