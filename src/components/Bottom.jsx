import Image from 'next/image';
import React from 'react'
import FeatureCard from './FeatureCard';

const Bottom = () => {
    const jobs = [
        {
            title: "UI/UX Designer",
            company: "Tech Solutions Inc.",
            location: "Remote",
            type: "Full-Time",
            logo: "/icons/facebook.png",
        },
        {
            title: "Frontend Developer",
            company: "Innovate Labs",
            location: "New York, USA",
            type: "Part-Time",
            logo: "/icons/instagram.png",
        },
        {
            title: "Project Manager",
            company: "BuildRight",
            location: "London, UK",
            type: "Contract",
            logo: "/icons/twitter.png",
        },
        {
            title: "UI/UX Designer",
            company: "Tech Solutions Inc.",
            location: "Remote",
            type: "Full-Time",
            logo: "/icons/facebook.png",
        },
        {
            title: "Frontend Developer",
            company: "Innovate Labs",
            location: "New York, USA",
            type: "Part-Time",
            logo: "/icons/instagram.png",
        },
        {
            title: "Project Manager",
            company: "BuildRight",
            location: "London, UK",
            type: "Contract",
            logo: "/icons/twitter.png",
        },
    ];
    return (
        <>
            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-darkBlue text-center">
                        Categories
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
                        {["Web", "Design", "Game", "Security", "Research"].map(
                            (category) => (
                                <div
                                    key={category}
                                    className="bg-lightGray p-6 text-center transition-all duration-300 rounded-lg shadow-sm hover:shadow-md hover:scale-105 hover:bg-gray-200"
                                >
                                    <img
                                        src={`/icons/${category.toLowerCase()}.png`}
                                        alt={category}
                                        className="w-12 h-12 mx-auto mb-4"
                                    />
                                    <p className="text-grayBlue font-medium">{category}</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* Featured Jobs Section */}
            <section className="py-16 bg-lightGray">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-darkBlue text-center mb-10">
                        Featured Jobs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobs.map((job, index) => (
                            <FeatureCard
                                key={index}
                                title={job.title}
                                company={job.company}
                                location={job.location}
                                type={job.type}
                                logo={job.logo}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-50 p-10 shadow-lg">
                {/* Image Section */}
                <div className="w-1/2 flex justify-center items-center">
                    <Image
                        src="/finder.png"
                        alt="Illustration"
                        width={500}
                        height={500}
                        className="rounded-full bg-gray-100"
                    />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 px-10 flex flex-col justify-start pr-0 md:pr-24 items-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
                        Open an Ad for a{" "}
                        <span className="text-primary">Great Employee</span>
                    </h1>
                    <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                        assumenda aliquam, voluptatum illo tempore quas quam explicabo fuga,
                        ipsam, similique placeat quasi maxime. Nam corrupti, suscipit molestiae
                        itaque praesentium culpa.
                    </p>
                    <button className="mt-6 bg-primary text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-darkBlue transition-all duration-300 shadow-md">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Subscribe Section */}
            <div className="w-[98vw] md:w-[80vw] mx-auto px-6 py-10 md:py-16 m-5 rounded-lg bg-lightGray shadow-md text-center md:text-left flex flex-col items-center gap-6">
                {/* Text Content */}
                <div className="flex-1">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
                        Subscribe to our <span className="text-primary">Newsletter</span> <br />
                        and get the latest Company News.
                    </h1>
                    <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
                        Stay updated with our regular updates, tips, and exclusive offers delivered directly to your inbox.
                    </p>
                </div>

                {/* Input and Button */}
                <div className="flex flex-col md:flex-row gap-4 items-center md:items-stretch w-full md:w-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 shadow-sm w-full md:w-[300px]"
                    />
                    <button className="py-3 px-6 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-darkBlue transition-all duration-300">
                        Subscribe
                    </button>
                </div>
            </div>
        </>
    )
}

export default Bottom