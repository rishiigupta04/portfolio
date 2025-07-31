import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <br />
      <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl opacity-75 ">includes data analysis, data science, machine learning and web development projects</p>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className=" sm:h-[41rem] h-[32rem] mt-12 lg:min-h-[32.5rem] flex items-center justify-center sm:w-[576px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <a
                href={link}
                target="_blank"
                className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10 object-cover object-center"
              >
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt=""
                  className="z-10 absolute w-full h-full object-cover object-center sm:object-left"
                />
              </a>
              <h1 className=" font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-4 opacity-50 mt-4">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center justify-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <a
                    href={link}
                    target="_blank"
                    className="flex lg:text-xl md:text-xs text-sm"
                  >
                    Check Live Site
                  </a>
                  <FaLocationArrow className="ms-3 " color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
