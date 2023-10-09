import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between bg-gray-200">
        <div className="mb-10">
          <Hero />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
