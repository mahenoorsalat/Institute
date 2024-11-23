import React from 'react';
import school from "../../assets/images/about.png";

function AboutUs() {
  return (
   <>
   {/* Main content */}
    <div className="relative mb-72 md:mb-28">
      <img height={50} width="auto" className="w-full object-contain" src={school} alt="School"/>
      <div className="absolute inset-0 flex items-center justify-center text-white px-4">
        <div className="text-center text-black p-9 md:p-16 translate-y-60 md:translate-y-96 max-w-4xl bg-white">
          <h1 className="text-2xl md:text-7xl font-semibold mb-4  h1welcometext text-green-950">About Us</h1>
          <h3 className="text-xl md:text-2xl mb-6">Empowering you to live an Islam-centered life.</h3>
          <p className="text-xs md:text-lg">
            At Al Amaan Online Islamic Studies (OIS), we are committed to providing accessible and comprehensive
            Islamic education to learners worldwide. Our expert scholars deliver engaging courses covering Quranic studies,
            Hadith, Fiqh, Arabic, and more. We strive to empower students with knowledge and values to enrich their spiritual
            and intellectual lives.
          </p>
        </div>
      </div>
    </div>

    {/* Analytics and statics of organization  */}

    <div className="flex flex-wrap justify-center gap-6 text-center md:py-44 py-10 ">
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
          <h2 className="text-4xl  h1welcometext text-center text-green-950 font-serif italic ">10000+</h2>
          <p className="text-lg font-medium">Student worldwide connected</p>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
          <h2 className="text-4xl h1welcometext text-center text-green-950 font-serif italic ">75+</h2>
          <p className="text-lg font-medium">Courses Available</p>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
          <h2 className="text-4xl h1welcometext text-center text-green-950 font-serif italic ">10+</h2>
          <p className="text-lg font-medium">Countries Reached</p>
        </div>
      </div>
   </>
  );
}

export default AboutUs;
