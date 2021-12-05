import React from "react";
import BannerImg from "../../assets/Images/home-wallpaper.jpg";

const HomeBanner = () => {
  return (
    <div className="w-full">
      <img src={BannerImg} className="w-full h-500" />
    </div>
  );
};

export default HomeBanner;
