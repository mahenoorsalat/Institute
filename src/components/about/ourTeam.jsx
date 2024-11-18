import React from "react";
import img15 from "../../assets/images/img15.jpeg";
import img17 from "../../assets/images/img17.jpg";
import img18 from "../../assets/images/img18.jpg";
import img19 from "../../assets/images/img19.jpg";
import img20 from "../../assets/images/img20.jpeg";
import teachers from "../../assets/images/bgofteacher.jpg";

function OurTeam() {
    const profiles = [
        {
            id: 1,
            img: img15,
            name: "Mufti Irfan Azhari",
            title: "Principal & Co-founder",
        },
        {
            id: 2,
            img: img17,
            name: "Molana Sajid Reyazi",
            title: "A renowned scholar",
        },
        {
            id: 3,
            img: img18,
            name: "Molana Majid Reyazi",
            title: "A renowned scholar",
        },
        {
            id: 4,
            img: img19,
            name: "Molana Ashraf Misbahi",
            title: "A renowned scholar",
        },
        {
            id: 5,
            img: img20,
            name: "Molana Haris Misbahi",
            title: "A renowned scholar",
        },
    ];

    return (
        <div className="relative">
            {/* Background Section */}
            <div className="relative h-96 mb-[1700px] md:mb-[700px] lg:mb-96">

                <img
                    src={teachers}
                    className="w-full h-full object-cover"
                    alt="Background Image"
                />
                {/* Overlay Effect */}
                <div className="absolute inset-0 "></div>
            </div>

            {/* Team Section */}
            <div className="absolute top-7 left-0 right-0 flex flex-col justify-center items-center text-center min-h-screen">
    {/* Section Title */}
    <div>
        <h1 className="text-xl md:text-6xl mt-9 h1welcometext text-center text-green-950 font-serif italic mb-4">
            Our team of Experts are here to help
        </h1>
        <p className="mt-5 text-center items-center md:text-lg text-xs mb-6 max-w-2xl">
            Building the next generation of Islamic scholars and thinkers.
            Join our world-class faculty to explore and understand the beauty of Islamic teachings.
        </p>
        {/* Buttons */}
        <div className="flex gap-4 justify-center
        mb-9">
            <button className="rounded-md bg-green-900 py-2 px-3 text-white hover:bg-white hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-white text-xs md:text-sm  shadow-lg shadow-gray-400 focus:ring-offset-2 focus:ring-offset-green-600">
                Learn More
            </button>
            <button className="rounded-md bg-white py-2 text-xs md:text-sm px-3 text-green-900 hover:bg-green-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-white shadow-lg shadow-gray-400 focus:ring-offset-2 focus:ring-offset-green-600">
                Contact Us
            </button>
        </div>
    </div>

                {/* Team Profiles */}
                <div className="flex md:mb-40 mb-96 justify-center md:justify-between gap-8 flex-wrap ">
                    {profiles.map((profile) => (
                        <div
                            key={profile.id}
                            className="w-48 h-72 relative flex flex-col items-center group"
                        >
                            {/* Profile Image */}
                            <img
                                src={profile.img}
                                alt={profile.name}
                                className="w-full h-48 object-cover rounded-t-lg grayscale group-hover:grayscale-0 transition duration-300"
                            />
                            {/* Text Overlay (Inside the Card) */}
                            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 rounded-b-lg text-center py-2">
                                <p className="text-sm font-semibold text-center text-green-950 font-mono italic">
                                    {profile.name}
                                </p>
                                <p className="text-xs text-gray-500">{profile.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
