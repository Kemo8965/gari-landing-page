import React from "react";
import { Link } from "react-router-dom";

export const GariServices: React.FC = () => {
    return (
        <div>
            <section className="text-gray-700 body-font">
                <div className="container px-5 sm:px-8 py-6 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-blue-800 tracking-widest font-medium title-font mb-1">
                            GET A LOAN
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                            Tisunge Pamodzi Loans
                        </h1>
                        <h1 className="text-gray-900">
                            Tisunge offers low cost credit facilities for the
                            following products
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-blue-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-800 text-white flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        Education Loan
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Get a loan to take care of your child's
                                        school fees. Get a loan to take care of
                                        your child's school fees
                                    </p>
                                    <Link
                                        className="mt-3 text-blue-800 inline-flex items-center"
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
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-blue-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-800 text-white flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle
                                                cx="12"
                                                cy="7"
                                                r="4"></circle>
                                        </svg>
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        Emergency Loan
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Get a loan when faced with an emergency.
                                        Get a loan when faced with an emergency
                                    </p>
                                    <Link
                                        className="mt-3 text-blue-800 inline-flex items-center"
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
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-blue-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-800 text-white flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24">
                                            <circle
                                                cx="6"
                                                cy="6"
                                                r="3"></circle>
                                            <circle
                                                cx="6"
                                                cy="18"
                                                r="3"></circle>
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        Salary Advance
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        Get a quick loan to pay back on your
                                        next pay day. Get a quick loan to pay
                                        back on your next pay day.
                                    </p>
                                    <Link
                                        className="mt-3 text-blue-800 inline-flex items-center"
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
                    </div>
                </div>
            </section>
        </div>
    );
};
