import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  const year = new Date();

  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Services",
      link: "/#services",
    },
    {
      id: 3,
      name: "About",
      link: "/#footer",
    },
  ];

  return (
    <>
      <span id="footer"></span>
      <div className="bg-gray-100 dark:bg-gray-950">
        <section className="max-w-[1200px] mx-auto">
          <div className=" grid md:grid-cols-3 py-5">
            <div className=" py-8 px-4 ">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
                Briyani Center
              </h1>
              <br />
              {/* Social Handle */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {Menu.map((item) => (
                      <li key={item.id} className="cursor-pointer">
                        <a href={item.link}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-10 border-t-2 border-gray-300/50">
              © {year.getFullYear()}, All rights reserved by Binish Rawal
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
