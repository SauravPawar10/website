import React from "react";

const HomeShortIntroduction = () => {
  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold pb-4">Know About Us</h1>
        <div className="border-b-8 w-20 border-red-600"></div>
      </div>
      <div className="flex flex-col justify-center text-lg mt-6 max-w-4xl mx-auto">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
    </div>
  );
};

export default HomeShortIntroduction;
