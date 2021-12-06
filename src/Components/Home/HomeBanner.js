import React from "react";
import BannerImg from "../../assets/images/home-wallpaper.jpg";

const HomeBanner = () => {
  return (
    <div className="w-full">
      <img src={BannerImg} className="w-full max-h-80" />
    </div>
  );
};

export default HomeBanner;
