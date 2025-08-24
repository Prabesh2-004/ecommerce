import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaAngleRight,FaArrowRight  } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import DiscountBanner from "../Components/DiscountBanner";
import { Link } from "react-router";

const Product = () => {
  const product = [
    {
      name: "Rolex",
      image: "/watch2.png",
      price: "$599",
    },
    {
      name: "Benyar",
      image: "/watch1.png",
      price: "$899",
    },
    {
      name: "Guess",
      image: "/watch3.png",
      price: "$399",
    },
    {
      name: "Omega",
      image: "/watch6.png",
      price: "$999",
    },
    {
      name: "Rolex Gold",
      image: "/watch7.png",
      price: "$1299",
    },
    {
      name: "Rado",
      image: "/watch8.png",
      price: "$749",
    },
    {
      name: "Richard Mille",
      image: "/watch9.png",
      price: "$1029",
    },
    {
      name: "Hublot",
      image: "/watch10.png",
      price: "$949",
    },
  ];
  return (
    <div className="flex my-10 justify-center">
      <div className="max-w-[1300px] flex flex-col gap-10">
        <DiscountBanner />
        <div>
          <p className="flex items-center gap-3 p-3 border-1 border-gray-200 rounded-4xl font-medium text-xl w-fit">
            <Link to="/">
              <IoMdHome />
            </Link>{" "}
            <FaAngleRight /> Product{" "}
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl font-bold">Shop</h2>
          <div className="flex justify-between">
            <p>Showing 1 - 4 of {product.length}</p>
            <details>
              <summary className="flex items-center gap-7 p-3 border-1 border-gray-300 rounded-4xl list-none">
                Default <FaAngleDown />
              </summary>
              <ul className="absolute p-4 rounded-4xl shadow-2xl bg-white">
                <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-xl">
                  Popular
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-xl">
                  Sort by latest
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-xl">
                  Sort by oldest
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-xl">
                  Price low to high
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-xl">
                  Price high to low
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-xl">
                  Alphabetically, A-Z
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-xl">
                  Alphabetically, Z-A
                </li>
              </ul>
            </details>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {product.map((products, index) => (
              <div
                key={index}
                className="flex flex-1 flex-col items-center gap-3 hover:shadow-2xl hover:text-green-500 shadow-xl p-7 rounded-3xl"
              >
                <div className="p-5 bg-gray-200 rounded-4xl">
                  <img src={products.image} alt="img" className="h-56 " />
                </div>
                <div className="text-center flex flex-col gap-3">
                  <p className="text-2xl font-medium">{products.name}</p>
                  <p className="text-xl">{products.price}</p>
                </div>
                <div className="flex gap-2 flex-col">
                  <button className="p-2 px-5 cursor-pointer bg-green-500 rounded-4xl text-white font-medium">
                    Add To Cart
                  </button>
                  <button className="p-2 px-5 cursor-pointer bg-green-500 rounded-4xl text-white font-medium">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center gap-5">
            <Link className="w-16 h-16 text-xl text-center content-center border-1 border-gray-200 hover:bg-green-500 hover:text-white rounded-full">1</Link>
            <Link className="w-16 h-16 text-xl text-center content-center border-1 border-gray-200 hover:bg-green-500 hover:text-white rounded-full">2</Link>
            <Link className="w-16 h-16 text-xl flex justify-center items-center font-medium border-1 border-gray-200 hover:bg-green-500 hover:text-white rounded-full"><FaArrowRight /></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
