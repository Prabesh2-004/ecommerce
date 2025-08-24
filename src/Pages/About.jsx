import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="max-w-[1300px] w-[100%] flex flex-col gap-10">
        <div>
          <p className="flex items-center gap-3 p-3 border-1 border-gray-200 rounded-4xl font-medium text-xl w-fit">
            <Link to="/">
              <IoMdHome />
            </Link>{" "}
            <FaAngleRight /> About{" "}
          </p>
        </div>
        <div className="min-h-screen bg-gray-50 text-gray-800">
          <section className="bg-[url('./banner3.jpeg')] bg-no-repeat bg-cover rounded-xl text-white py-20 px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl">
              We are a passionate team dedicated to building innovative
              solutions that make a difference.
            </p>
          </section>

          <section className="max-w-5xl mx-auto py-16 px-6 text-center">
            <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our journey started with a simple idea: to create impactful
              technology that empowers businesses and individuals alike. Over
              the years, we have grown into a team of creative thinkers, problem
              solvers, and passionate professionals.
            </p>
          </section>

          <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To deliver high-quality, scalable, and user-friendly solutions
                that bring real value to our customers worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become a global leader in technology innovation and help
                shape a smarter, more connected future.
              </p>
            </div>
          </section>

          <section className="bg-gray-100 py-16 px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  name: "Alex Johnson",
                  role: "CEO",
                  img: "https://i.pravatar.cc/150?img=1",
                },
                {
                  name: "Maria Smith",
                  role: "CTO",
                  img: "https://i.pravatar.cc/150?img=2",
                },
                {
                  name: "David Lee",
                  role: "Lead Designer",
                  img: "https://i.pravatar.cc/150?img=3",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold">{member.name}</h4>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
