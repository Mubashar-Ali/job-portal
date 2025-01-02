"use client"
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md absolute w-full top-0 left-0">
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4">
                {/* Logo */}
                <div className="text-primary text-2xl font-bold">ApplyRemote</div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 text-grayBlue font-medium">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <Link href="/remote" className="hover:text-primary">Remote Jobs</Link>
                    <Link href="#companies" className="hover:text-primary">Companies</Link>
                    <Link href="#login" className="hover:text-primary">Login</Link>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex space-x-4">
                    <button className="text-primary border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white">
                        Sign Up
                    </button>
                    <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-darkBlue">
                        Post Job
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-grayBlue text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="flex flex-col space-y-4 px-4 py-4 text-grayBlue font-medium">
                        <a href="#home" className="hover:text-primary">Home</a>
                        <a href="#remote-jobs" className="hover:text-primary">Remote Jobs</a>
                        <a href="#companies" className="hover:text-primary">Companies</a>
                        <a href="#login" className="hover:text-primary">Login</a>
                        <div className="flex flex-col space-y-2 mt-4">
                            <button className="text-primary border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white">
                                Sign Up
                            </button>
                            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-darkBlue">
                                Post Job
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
