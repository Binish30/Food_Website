import React from "react";
import Img from "../../assets/biryani2.png";
import Img2 from "../../assets/biryani3.png";
import Img3 from "../../assets/biryani5.png";
import StarRatings from "react-star-ratings";
const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Biryani",
    description:
      "Experience the rich flavors and spices of our authentic signature Biryani."
  },
  {
    id: 2,
    img: Img2,
    name: "Chicken Biryani",
    description:
      "Enjoy our Chicken Biryani, a perfect blend of spices and tender chicken."
  },
  {
    id: 3,
    img: Img3,
    name: "Hyderbadi Chicken Biryani",
    description:
      "Hyderabadi Chicken Biryani features tender chicken, aromatic rice."
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Delivering innovative software, cloud solutions, and digital
              transformation to help your business thrive in a fast-paced world.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
