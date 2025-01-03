import React from "react";

const Login = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left Image */}
            <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/login.jpg')" }}></div>

            {/* Right Form */}
            <div className="flex w-full md:w-1/2 items-center justify-center p-6 bg-gray-100">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-4 text-primary">Hello Again!</h2>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome Back!</h2>
                    <p className="text-gray-500 mb-5 text-sm">If you had an account on the old remote, you will need to reset you password before able to login</p>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex justify-between">
                            <span className="flex gap-2">
                                <input type="checkbox" /> 
                                <p className="text-gray-600">Remember Me</p>
                            </span>
                            <a className="text-primary" href="#">Forget Password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Don't have an account?{" "}
                        <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
