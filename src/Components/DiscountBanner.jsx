import React from "react";
import { Link } from "react-router";

const DiscountBanner = () => {
  return (
    <div className='flex flex-col items-end h-[500px] w-full bg-[url("./banner2.jpeg")] bg-no-repeat bg-cover rounded-4xl text-white p-5'>
      <div className="flex flex-col gap-5 items-center justify-center h-full w-full">
        <p className="text-2xl text-green-500">Limited Time Offer</p>
        <h2 className="text-6xl font-bold">Save Big: Up to <span className="text-green-500">60% Off</span>  on All Watches</h2>
        <p className="text-xl">Act Fast Before They're Gone</p>
        <Link to="/product" className="p-3 px-5 bg-green-500 rounded-4xl">Shop Now</Link>
      </div>
    </div>
  );
};

export default DiscountBanner;
