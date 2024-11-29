import React from "react";

const Headgrid = () => {
  return (
    <div className="h-screen bg-red-950 p-10 md:p-20 lg:p-[100px] flex flex-col items-center justify-center text-center">
      <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-amber-500 font-bold">
        Lorem Ipsum Heading
      </h1>
      <p className="text-[14px] md:text-[16px] lg:text-[17px] mt-5 text-white max-w-[600px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta
        voluptatem architecto ad sequi voluptates praesentium incidunt dolores,
        porro totam, labore, laborum temporibus expedita necessitatibus!
        Laudantium ab ipsam aperiam magni?
      </p>
      <button className="p-3 md:p-4 w-[120px] md:w-[140px] bg-amber-500 text-red-900 mt-10 rounded-md hover:bg-white hover:text-red-900">
        Let's Start
      </button>
    </div>
  );
};

export default Headgrid;
