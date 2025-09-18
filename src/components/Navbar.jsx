import React from "react";
import { useState } from "react";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo Section */}
                    <div className="text-2xl font-bold">React Basics</div>

                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="hover:text-gray-200">Home</a>
                        <a href="#" className="hover:text-gray-200">Products</a>
                        <a href="#" className="hover:text-gray-200">Contact</a>
                    </div>
                     {/* Mobile Hamburger */}
                     <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none">
                            <svg
                            className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ?"M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                        </div>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden flex flex-col space-y-2 mt-2">
                        <a href="#" className="hover:text-gray-200">Home</a>
                        <a href="#" className="hover:text-gray-200">Products</a>
                        <a href="#" className="hover:text-gray-200">Contact</a>
                    </div>
                )}
                </div>
        </nav>
    )
}