import React from "react";
import BiryaniImg from "../../assets/biryani2.png";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={BiryaniImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Authentic Biryani Center
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  Biryani is a popular South Asian dish made with fragrant rice,
                  meat (like chicken, mutton, or beef), and an array of aromatic
                  spices. Originating from the Indian subcontinent, it is often
                  served during special occasions and celebrations. The dish has
                  variations across regions, such as Hyderabadi Biryani,
                  Lucknowi Biryani, and Kolkata Biryani, each with its own
                  unique flavor profile and cooking technique.
                  <br />
                  <br />
                  This dish is known for its rich taste, vibrant colors, and
                  delightful blend of spices such as saffron, cardamom, and
                  cinnamon. It is commonly paired with side dishes like raita,
                  salad, or boiled eggs. Biryani has become a global favorite,
                  loved by food enthusiasts worldwide.
                </p>
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
