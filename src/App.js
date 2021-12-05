import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUsScreen from "./Components/AboutAcademy/AboutUsScreen";
import { Fragment } from "react";
import HomeBanner from "./Components/Home/HomeBanner";
import HomeShortIntroduction from "./Components/Home/HomeShortIntroduction";

function App() {
  return (
    <Router basename={"/"}>
      <HomeBanner />
      <HomeShortIntroduction />
      <Fragment>
        <Routes>
          <Route path="/about-us" element={<AboutUsScreen />}></Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
