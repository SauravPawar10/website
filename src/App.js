// import logo from "./logo.svg";
// import "./App.css";
import "../src/styles/global.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUsScreen from "./Components/AboutAcademy/AboutUsScreen";
import { Fragment } from "react";
import HomeBanner from "./Components/Home/HomeBanner";

function App() {
  return (
    <Router basename={"/"}>
      <HomeBanner />
      <Fragment>
        <Routes>
          <Route path="/about" element={<AboutUsScreen />}></Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
