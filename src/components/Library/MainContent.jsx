import React from 'react';
import Libraries from '../../assets/images/libraryhead.png';
import NewImage from '../../assets/images/library.png'; // Add a new image

function MainContent() {
  return (
    <div className="relative w-full">
      {/* Background Video */}
      <img
        src={NewImage}
        className="w-full h-auto mb-96"
      />

      {/* Overlay Content */}
      <div className="absolute  mt-36 inset-0  flex flex-col md:flex-row items-center md:gap-72 gap-0  justify-between p-6">
        {/* Starting Section */}
        <div className="flex-1 bg-gray-200 text-gray-800 p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6 text-center">
          <h2 className="md:text-3xl text-xl text-green-950 font-serif mb-6">
            Welcome to the Islamic Library
          </h2>
          <p className="sm:text-xs md:text-sm lg:text-lg mb-6">
            Explore the treasures of knowledge through our collection of Islamic books, teachings, and resources. Start your spiritual journey by reading and reflecting on the words of wisdom passed down through generations.
          </p>
          <button className="rounded-md sm:text-xs md:text-sm lg:text-lg   bg-green-900 py-2 px-3 text-white hover:bg-green-700  shadow-lg shadow-gray-400">
            Start Reading
          </button>
        </div>

        {/* Image Section
        <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
          <img
            src={Libraries}
            alt="Islamic Library"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div> */}

        {/* Ending Section */}
        <div className="flex-1 bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h1 className="md:text-2xl text-xl italic mb-6">
            The Chamber of Islamic Knowledge
          </h1>
          <p className="sm:text-xs md:text-sm lg:text-lg mb-6">
            Delve deeper into the sacred texts of the Qur'an, Hadith, and Islamic history. The Islamic Library offers a wealth of resources for personal growth, understanding, and connection to the teachings of Islam.
          </p>
          <button className="sm:text-xs md:text-sm lg:text-lg  border py-2 px-3 border-gray-300 rounded-md hover:bg-gray-50 shadow-lg shadow-gray-400 transition-colors  gap-2">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
