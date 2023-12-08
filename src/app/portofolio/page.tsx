import React from "react";
import Footer from "../components/Footer";
import Card from "./components/Card";

const Portofolio = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between bg-gray-200">
        <div className="my-10 mx-5">
          <Card />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Portofolio;
