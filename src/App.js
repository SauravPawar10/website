import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUsScreen from "./Components/AboutAcademy/AboutUsScreen";
import { Fragment } from "react";
import HomeBanner from "./Components/Home/HomeBanner";
import HomeShortIntroduction from "./Components/Home/HomeShortIntroduction";
import HomeCards from "./Components/Home/HomeCards";
import AthleticStaffPage from "./Components/AthleticStaff/AthleticStaffPage";
import HomePage from "./Components/Home/HomePage";

function App() {
  return (
    <Router basename={"/"}>
      {/* <HomeBanner />
      <HomeShortIntroduction />
      <HomeCards /> */}
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Routes>
          <Route path="/about-us" element={<AboutUsScreen />}></Route>
        </Routes>
        <Routes>
          <Route path="/athletics-staff" element={<AthleticStaffPage />}></Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
