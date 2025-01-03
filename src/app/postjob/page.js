import PostCard from '@/components/PostCard';
import React from 'react';

const page = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-lightGray py-16 md:h-[40vh] relative flex items-center justify-center">
                <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
                    {/* Text Content */}
                    <div className="text-center md:text-left space-y-6 md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-darkBlue">
                            Recruit Top <span className="text-primary">Quality People</span> Around The World
                        </h1>
                        <p className="text-grayBlue text-lg">
                            Home &gt; <span className="font-semibold">Post Job</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Participate Section */}
            <div className="p-10 bg-gray-100">
                <h2 className="text-darkBlue text-3xl font-extrabold mb-6 text-center">
                    Why Should I Participate?
                </h2>
                <div className="flex flex-wrap gap-6 justify-center">
                    <PostCard title="We Post Your Job Posting For Free" img="free" />
                    <PostCard title="We Find Top-Tier Candidates" img="cand" />
                    <PostCard title="We Help Streamline Your Hiring Process" img="hiring" />
                </div>
            </div>

            {/* Job Posting Form */}
            <div className="p-10 bg-white">
                <h2 className="text-darkBlue text-3xl font-extrabold mb-6 text-center">
                    Let's Create a Job Posting
                </h2>
                <form className="border border-gray-300 shadow-md flex flex-col gap-6 rounded-lg p-6 max-w-4xl mx-auto">
                    {/* Grid Input Fields */}
                    <div className="grid gap-6 md:grid-cols-2 grid-cols-1">
                        <div>
                            <label htmlFor="username1" className="block text-sm font-semibold text-gray-700">
                                User Name
                            </label>
                            <input
                                type="text"
                                id="username1"
                                placeholder="Name"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-700">
                                Job Title
                            </label>
                            <input
                                type="text"
                                id="jobTitle"
                                placeholder="Title"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="experience" className="block text-sm font-semibold text-gray-700">
                                Years of Experience
                            </label>
                            <input
                                type="text"
                                id="experience"
                                placeholder="Experience"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-semibold text-gray-700">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                placeholder="Location"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-primary focus:border-primary"
                            />
                        </div>
                    </div>

                    {/* Job Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
                            Job Description
                        </label>
                        <textarea
                            id="description"
                            placeholder="Write description here..."
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-primary focus:border-primary"
                            rows={4}
                        ></textarea>
                    </div>

                    {/* Checkboxes */}
                    <div className="flex flex-col gap-3 text-gray-500">
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="mr-2 focus:ring-primary" />
                            Do you want a Physical Job?
                        </label>
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="mr-2 focus:ring-primary" />
                            Do you have any Experience?
                        </label>
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="mr-2 focus:ring-primary" />
                            I'm currently a Student
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-primary text-white font-semibold rounded-lg py-3 px-8 shadow-md hover:bg-primaryDark transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;
