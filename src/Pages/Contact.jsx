import React from "react";
import { FaAngleRight,FaInstagram, FaLinkedin  } from "react-icons/fa";
import { FaPhone, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoMdHome, IoIosMail } from "react-icons/io";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div className="flex my-10 justify-center">
      <div className="max-w-[1300px] w-[100%] flex flex-col gap-5 z-1">
        <div>
          <p className="flex items-center gap-3 p-3 border-1 border-gray-200 rounded-4xl font-medium text-xl w-fit">
            <Link to="/">
              <IoMdHome />
            </Link>{" "}
            <FaAngleRight /> Contact{" "}
          </p>
        </div>
        <div className="flex flex-col gap-10 items-center z-[-2]">
          <h2 className="text-5xl font-medium">
            Get in touch <span className="text-green-500">with us</span>
          </h2>
          <div className="grid grid-cols-3 gap-10">
            <div className="p-16 text-center shadow-2xl rounded-4xl relative flex flex-col gap-3 items-center bg-white z-1">
              <p className="p-5 w-fit rounded-full border-1 border-gray-300 bg-green-500 text-white text-xl absolute top-[-10px]">
                <IoIosMail />
              </p>
              <p className="text-3xl font-bold">Email</p>
              <p className="text-xl opacity-80">example@yourwebsite.com</p>
            </div>
            <div className="p-16 text-center shadow-2xl rounded-4xl relative flex flex-col gap-3 items-center bg-white z-1">
              <p className="p-5 w-fit rounded-full border-1 border-gray-300 bg-green-500 text-white text-xl absolute top-[-10px]">
                <FaPhone />
              </p>
              <p className="text-3xl font-bold">Phone</p>
              <p className="text-xl opacity-80">+977 9854352435</p>
            </div>
            <div className="p-16 text-center shadow-2xl rounded-4xl relative flex flex-col items-center gap-3 bg-white z-1">
              <p className="p-5 w-fit rounded-full border-1 border-gray-300 bg-green-500 text-white text-xl absolute top-[-10px] ">
                <FaLocationDot />
              </p>
              <p className="text-3xl font-bold">Address</p>
              <p className="text-xl opacity-80">Basantapur, Kathmandu</p>
            </div>
          </div>
          <div className="w-full flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.418838629977!2d85.30444442532367!3d27.704351626184284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f8b5a16d43%3A0xb4f02f94e307d660!2sBasantapur%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1756034180756!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
          <form className="max-w-[800px] w-[100%] flex flex-col gap-4 z-10 shadow-2xl p-5 rounded-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="yourname" className="font-medium">
                  Your Name <span className="text-red-500">*</span> :
                </label>
                <input
                  type="text"
                  id="yourname"
                  placeholder="Your Name"
                  required
                  className="border-1 border-gray-300 p-3 rounded-4xl w-full outline-none focus:border-green-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium">
                  Email <span className="text-red-500">*</span> :
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="example@mail.com"
                  required
                  className="border-1 border-gray-300 p-3 rounded-4xl w-full outline-none focus:border-green-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-medium">
                  Phone <span className="text-red-500">*</span> :
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder=""
                  required
                  className="border-1 border-gray-300 p-3 rounded-4xl w-full outline-none focus:border-green-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-medium">
                  Subject <span className="text-red-500">*</span> :
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder=""
                  required
                  className="border-1 border-gray-300 p-3 rounded-4xl w-full outline-none focus:border-green-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="font-medium">
                Description<span className="text-red-500">*</span> :
              </label>
              <textarea
                type="text"
                id="description"
                placeholder=""
                required
                className="border-1 h-[200px] border-gray-300 p-3 rounded-xl w-full outline-none focus:border-green-500"
              />
            </div>
            <button className="p-4 rounded-4xl bg-green-500 font-medium text-white cursor-pointer">Submit</button>
          </form>
          <div className="flex gap-4">
            <span className="p-5 bg-green-500 text-white rounded-full text-2xl cursor-pointer"><FaInstagram /></span>
            <span className="p-5 bg-green-500 text-white rounded-full text-2xl cursor-pointer"><FaLinkedin /></span>
            <span className="p-5 bg-green-500 text-white rounded-full text-2xl cursor-pointer"><IoIosMail /></span>
            <span className="p-5 bg-green-500 text-white rounded-full text-2xl cursor-pointer"><FaXTwitter /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
