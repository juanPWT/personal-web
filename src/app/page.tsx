import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between bg-gray-200">
        <Hero />

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
