import Image from "next/image";
import React from "react";
import profile from "../../../public/personalImg/pp-no-bg (2).png";
import github from "../../../public/assets/github-mark-white.svg";

const Hero = () => {
  return (
    <section className="">
      <div className="container min-h-screen max-w-full flex items-center  ">
        <div
          className=" p-8 md:flex
        "
        >
          <div className="my-5  mx-auto flex flex-col">
            <h1 className="text-5xl font-bold text-gray-700 ">
              Selamat Datang di Personal Website Saya
            </h1>
            <p className="my-2 text-2xl font-semibold text-gray-500">
              Perkenalkan nama saya{" "}
            </p>
            <h1 className="font-bold text-2xl text-gray-700">
              Juan Pratama Wahyu Talendra
            </h1>
            <h1 className="text-xl text-gray-500">
              Frontend Developer | Backend Developer
            </h1>
            <a
              href="https://github.com/juanPWT"
              target="_blank"
              className="hidden mt-5 w-36   bg-gray-600 text-white text-xl font-semibold px-5 py-2 rounded-lg md:flex hover:bg-gray-400 hover:text-gray-600"
            >
              <span className="m-auto">GitHub</span>
              <Image
                src={github}
                alt="icon github"
                width={25}
                height={25}
                className="m-auto"
              />
            </a>
          </div>
          <div className="mb-10 mt-2 bg-gray-100 h-[400px] w-[400px] rounded-full   mx-auto shadow-lg">
            <div></div>
            <Image src={profile} alt="profile" className="rounded-full " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
