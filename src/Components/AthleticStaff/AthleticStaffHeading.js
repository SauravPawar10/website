import React from "react";
import img from "../../assets/images/athleticstaff.jpg";
const AthleticStaffHeading = () => {
  return (
    <div>
      <div className="w-full">
        <img src={img} className="w-full max-h-80" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold pb-4">Our Coaches</h1>
        <div className="border-b-8 w-20 border-red-600"></div>
      </div>
      <div className="bg-gray-300">
        <div className="timeline">
          <div className="container right">
            <div className="content">
              <h1>John Doe</h1>
              <p className="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <p>
                <button className="border-solid">Contact</button>
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h1>John Doe</h1>
              <p className="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <p>
                <button className="bg-black">Contact</button>
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h1>John Doe</h1>
              <p className="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <p>
                <button className="bg-black">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthleticStaffHeading;
