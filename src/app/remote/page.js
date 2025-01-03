import Bottom from "@/components/Bottom";
import Navbar from "@/components/Navbar";

export default function Home() {


    return (
        <>
            {/* Hero Section */}
            <section className="bg-lightGray py-16 md:h-[40vh] relative flex items-center justify-center">
                <div className="container mx-auto px-4 md:px-8 md:pt-0 flex flex-col md:flex-row items-center justify-between">
                    {/* Text Content */}
                    <div className="text-center md:text-left space-y-6 w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold text-darkBlue">
                            Discover the <span className="text-primary">Best Remote Jobs</span>
                        </h1>
                        <p className="text-grayBlue text-lg">
                            Home &gt; Remote Jobs
                        </p>
                        <div className="hidden md:flex flex-col h-5 absolute -bottom-3 left-0 sm:flex-row mx-auto items-center md:w-full justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <input
                                type="text"
                                placeholder="Search for job title"
                                className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-black"
                            />
                            <button className="bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-darkBlue">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Bottom />

        </>
    );
}
