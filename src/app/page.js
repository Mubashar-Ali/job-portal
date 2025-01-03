import Bottom from "@/components/Bottom";
import FeatureCard from "@/components/FeatureCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {

  return (
    <>

      {/* Hero Section */}
      <section className="bg-lightGray py-16 md:h-[80vh] flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8 pt-40 md:pt-0 flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="text-center md:text-left space-y-6 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-darkBlue">
              Find <span className="text-primary">Remote</span> Job in{" "}
              <span className="text-primary">Worldwide_</span>
            </h1>
            <p className="text-grayBlue text-lg">
              Work remotely to companies in worldwide
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                placeholder="Search for job title"
                className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-black"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-darkBlue">
                Search
              </button>
            </div>
            <div className="text-grayBlue text-sm">
              Example: <span className="font-medium">Front-End</span>,{" "}
              <span className="font-medium">Back-End</span>,{" "}
              <span className="font-medium">Designer</span>
            </div>
          </div>

          {/* Illustration */}
          <div className="mt-10 md:mt-0 md:w-1/2 hidden md:flex justify-center">
            <img
              src="/illustration.png"
              alt="Hero Illustration"
              className="w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </section>
      <Bottom />
    </>
  );
}
