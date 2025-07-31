import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full mb-[50px] md:mb-[5px] pb-10" id="contact">
      <div className="flex flex-col items-center">
      <h1 className="heading lg:max-w-[45vw]">
  Ready to unlock <span className="text-purple">value </span>  from your <span className="text-purple">data?</span>
</h1>
<p className="text-white-200 md:mt-10 my-5 text-center">
  Reach out and let’s discuss how I can help you turn complex data into insights and build solutions that drive real impact.
</p>



        <a title="Get in touch" href="mailto:grishi349@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        {/* <p className="md:text-base text-sm font-light md:font-normal">
          Copyright © 2024 Rishiraj Gupta
        </p> */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              href={profile.link}
              target="_blank"
              key={profile.id}
              className="cursor-pointer mt-6 w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
