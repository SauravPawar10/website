import React from "react";
import img from "../../assets/images/banner.jpg";

const HomeBanner = () => {
  return (
    <div>
      <div className="w-64">
        <img src={img} />
        <p className="text-4xl">hey</p>
      </div>{" "}
    </div>
  );
};

export default HomeBanner;
