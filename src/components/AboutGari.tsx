import React from "react";
import { Link } from "react-router-dom";

export const AboutGari: React.FC = () => {
    return (
        <div>
            <section className="text-gray-700 body-font">
                <div className="container px-5 sm:px-8 py-16 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-blue-800 tracking-widest font-medium title-font mb-1">
                            BECOME A MEMBER
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Tisunge Pamodzi Shares
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Members of our Savings and Credit Co-operative
                            (SACCO) are required to purchase shares which
                            represent a unit of ownership of the SACCO. The
                            minimum amount for purchasing shares is ZMW 100.
                        </p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                                Save Conveniently
                            </h2>
                            <p className="leading-relaxed text-base mb-4">
                                With Tisunge, you can save anywhere, anytime.
                            </p>
                            <Link
                                className="text-blue-800 inline-flex items-center"
                                to="/">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                                Benefit from Dividents.
                            </h2>
                            <p className="leading-relaxed text-base mb-4">
                                With Tisunge, you can save anywhere, anytime.
                            </p>
                            <Link
                                className="text-blue-800 inline-flex items-center"
                                to="/">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                                Instant Loans
                            </h2>
                            <p className="leading-relaxed text-base mb-4">
                                With Tisunge, you can save anywhere, anytime.
                            </p>
                            <Link
                                className="text-blue-800 inline-flex items-center"
                                to="/">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                                Competitive Rates
                            </h2>
                            <p className="leading-relaxed text-base mb-4">
                                With Tisunge, you can save anywhere, anytime.
                            </p>
                            <Link
                                className="text-blue-900 inline-flex items-center"
                                to="/">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
