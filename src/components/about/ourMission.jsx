import React from 'react'
import globe from "../../assets/images/globe.gif";
import scholar from "../../assets/images/scholarship.jpg";






function ourMission() {

    return (
        <>
            <div className="bg-white text-black font-sans md:mt-52 md:mb-52 mt-20 mb-20">
                {/* Header Section */}
                <div className="text-center mt-5 md:mt-10">
                    <h1 className="md:text-7xl text-4xl font-semibold uppercase tracking-wide h1welcometext  leading-tight">
                        Our <span className="text-gray-800 md:text-5xl text-2xl h1welcometext ">Mission</span>
                    </h1>
                    <p className="mt-4 text-sm uppercase md:mb-16 mb-5  font-light tracking-widest">
                        "Illuminating Minds, Inspiring Souls, Shaping Futures"
                    </p>
                </div>

                <div className="flex md:flex-row flex-col">
                    <div>
                        {/* Subsection */}
                        <div className="mt-16 px-10 md:px-20 ">
                            <h2 className="text-4xl  uppercase h1welcometext  text-green-800 font-serif italic">Al AMAAN OIS</h2>
                            <div className=" justify-between items-start mt-8 gap-8">
                                {/* Left Content */}
                                <div className="w-full md:w-1/2">
                                    <img
                                        src={globe}
                                        alt="Artistic Vision"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                {/* Right Content */}
                                <div className="space-y-4">
                                    <p className="text-lg md:m-20 m-5  md:text-center text-normal text-gray-600">
                                        The mission is to cultivate academic excellence while instilling values of integrity, compassion, and leadership rooted in Islamic principles. These institutions serve as beacons of enlightenment, preparing students to contribute meaningfully to their communities and the world, guided by the teachings of Islam.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='m-20'>
                        <div className='h-72 md:w-1/2 space-y-4'> <img
                            src={scholar}
                            alt="Minimalistic Vision"
                            className=" md:w-2/3  w-full  rounded-md"
                        /></div>

                        {/* Year Section */}
                        <div className="mt-16 flex justify-center items-center text-gray-500 font-extrabold text-9xl opacity-20">
                            2020
                        </div>
                    </div>
                </div>
            </div>





        </>


    )
}

export default ourMission
