import { IoWaterOutline } from "react-icons/io5";
import { TiWatch } from "react-icons/ti";
import { MdMoreTime } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Home = () => {
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
  ];
  return (
    <div className="flex justify-center">
      <div className="max-w-[1300px] w-[100%] p-10">
        <div className="flex gap-10 w-full justify-between items-center">
          <div className="flex flex-col gap-8 flex-1">
            <p className="text-2xl opacity-75">
              Allow yourself To Be A Step Ahead
            </p>
            <h2 className="flex flex-col">
              <span className="text-6xl">Timeless</span>{" "}
              <span className="text-7xl font-bold">Elegance</span>
            </h2>
            <div className="flex gap-5 mt-10">
              <button className="p-3 px-7 hover:text-white border-1 font-bold cursor-pointer hover:bg-green-500 rounded-4xl ">
                Purchase Now
              </button>
              <button className="p-3 px-7 hover:text-white border-1 font-bold cursor-pointer hover:bg-green-500 rounded-4xl ">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-start">
            <img src="/watch5.png" alt="watch" className="h-[450px]" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-[url('/banner.jpeg')] bg-cover bg-no-repeat  w-full h-[600px] rounded-4xl gap-5">
          <h2 className="text-white text-7xl font-bold brightness">
            Premium Classic Watch
          </h2>
          <p className="max-w-[900px] text-center text-white">
            A watch is a portable timepiece worn on the body, typically on the
            wrist, that shows the time using either hands on a dial (analog) or
            digits on a screen (digital).
          </p>
          <div className="flex gap-10">
            <div className="flex flex-col items-center gap-5 text-center">
              <span className="text-7xl p-5 bg-white hover:bg-black hover:text-white cursor-pointer rounded-full">
                <IoWaterOutline />
              </span>
              <p className="text-white text-xl">Water Resistance</p>
            </div>
            <div className="flex flex-col gap-5 items-center text-center">
              <span className="text-7xl p-5 bg-white hover:bg-black hover:text-white cursor-pointer rounded-full">
                <TiWatch />
              </span>
              <p className="text-white text-xl">Analouge</p>
            </div>
            <div className="flex flex-col gap-5 items-center text-center">
              <span className="text-7xl p-5 bg-white hover:bg-black hover:text-white cursor-pointer rounded-full">
                <MdMoreTime />
              </span>
              <p className="text-white text-xl">5 Yrs Warrent</p>
            </div>
            <div className="flex flex-col items-center gap-5 text-center">
              <span className="text-7xl p-5 bg-white hover:bg-black hover:text-white cursor-pointer rounded-full">
                <VscWorkspaceTrusted />
              </span>
              <p className="text-white text-xl">Stainless Steel</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col p-5 mt-5 gap-5 justify-center items-center">
          <h2 className="text-green-500 text-5xl font-bold">Products</h2>
          <p className="max-w-[600px] text-center opacity-75">
            A watch is a portable timepiece worn on the body, typically on the
            wrist, that shows the time using either hands on a dial.
          </p>
          <div className="flex gap-5">
            {product.map((products, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-5 hover:text-green-500 shadow-xl p-7 rounded-3xl"
              >
                <div className="p-5 bg-gray-200 rounded-4xl">
                  <img src={products.image} alt="img" className="h-64 " />
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
          <Link
            to="/product"
            className="flex items-center gap-4 p-2 px-3 bg-black text-white rounded-4xl"
          >
            Discover More{" "}
            <span className="p-2 bg-green-500 text-white rounded-full">
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div>
          <div className='flex flex-col items-end h-[500px] w-full bg-[url("./banner.jpeg")] bg-no-repeat bg-cover rounded-4xl text-white p-5'>
            <div className="flex flex-col gap-5 items-center justify-center h-full w-full">
              <p className="text-2xl text-green-500">Limited Time Offer</p>
              <h2 className="text-6xl font-bold">
                Save Big: Up to <span className="text-green-500">60% Off</span>{" "}
                on All Watches
              </h2>
              <p className="text-xl">Act Fast Before They're Gone</p>
              <Link to="/product" className="p-3 px-5 bg-green-500 rounded-4xl">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
