import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="w-[400px] h-[250px] bg-gray-100 rounded-xl shadow-xl overflow-hidden hover:scale-105">
      <Link href="" className="">
        <div
          className="w-full h-[170px] bg-cover"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
        ></div>
        <div className="w-full h-full  flex justify-center p-4">
          <h1 className="text-xl font-bold text-gray-700 mx-5 ">
            Name-Project
          </h1>

          <div className=" h-7 w-20 flex rounded-full  outline outline-emerald-300">
            {" "}
            <span className="m-auto text-sm font-bold text-emerald-300">
              onGoing
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
