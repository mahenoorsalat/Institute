import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faHeart, 
  faCircleQuestion, 
  faVolumeHigh,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import image1 from '../../assets/images/bg1.jpg';
import image2 from '../../assets/images/bg2.jpg';
import image3 from '../../assets/images/bg3.jpg';
import image4 from '../../assets/images/bg4.jpg';

const Main = () => {
  return (
    <div className="relative min-h-screen pt-20 bg-white p-8 overflow-hidden">
      {/* Add Custom Animation Styles */}
      <style>
        {`
          @keyframes bounceY {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          .animate-bounce-y {
            animation: bounceY 2s infinite;
          }
        `}
      </style>

      {/* Decorative Light Effects */}
      <div className="absolute top-0 left-1/4 w-1/2 h-96 -translate-y-24">
        <div className="absolute inset-0 bg-gradient-to-b from-green-200/30 via-green-300/20 to-transparent 
          blur-3xl rounded-full transform scale-y-150" />
      </div>
      <div className="absolute top-0 right-1/4 w-1/2 h-96 -translate-y-32">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/30 via-blue-300/20 to-transparent 
          blur-3xl rounded-full transform scale-y-150" />
      </div>

      {/* Content Container */}
      <div className="relative mb-5 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-7 font-arabic text-green-800">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h2>
        <h1 className="text-xl md:text-4xl font-bold text-center mb-4">
          Nurturing Knowledge, Building Future Leaders
        </h1>
        <p className="text-gray-600 text-xs md:text-lg text-center mb-9">
          Support our Islamic university's mission to educate and empower the next generation of scholars
        </p>
        
        {/* Button Group */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="text-xs md:text-lg px-6 py-2 bg-green-900 text-white rounded-md hover:bg-green-600 shadow-lg shadow-gray-400 transition-colors">
            Support Now
          </button>
          <button className="text-xs md:text-lg px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 shadow-lg shadow-gray-400 transition-colors flex items-center gap-2">
            <FontAwesomeIcon icon={faPlay} className="w-4 h-4" />
            Our Impact
          </button>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap gap-4 justify-between mb-4">
          {/* Statistics Card */}
          <div className="relative w-48 h-60 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group animate-bounce-y">
            <img
              src={image4}
              alt="Background"
              className="absolute text-white inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 group-hover:from-black/70 transition-all duration-300"/>
            <div className="relative text-white z-10 p-6">
              <span className="text-3xl font-bold">65%</span>
              <p className="mt-2">Of goal achieved</p>
              <div className="w-6 h-6 absolute top-4 right-4">
                <FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Share Story Card */}
          <div className="relative w-64 h-96 mt-9 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group animate-bounce-y">
            <img
              src={image1}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 group-hover:from-black/70 transition-all duration-300"/>
            <div className="relative z-10 p-6 text-white">
              <FontAwesomeIcon icon={faVolumeHigh} className="w-6 h-6 absolute top-4 right-4" />
              <h3 className="text-lg font-semibold mb-2">Share Your Story</h3>
              <p className="text-gray-200">Inspire others with your journey</p>
            </div>
          </div>

          {/* Donation Progress Card */}
          <div className="relative w-64 h-96 mt-9 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group animate-bounce-y">
            <img
              src={image2}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 group-hover:from-black/70 transition-all duration-300"/>
            <div className="relative z-10 p-6 text-white">
              <FontAwesomeIcon icon={faUsers} className="w-6 h-6 absolute top-4 right-4" />
              <h3 className="text-lg font-semibold mb-2">Join 5000+ Donors</h3>
              <p className="text-gray-200">Supporting education</p>
            </div>
          </div>

          {/* Support Card */}
          <div className="relative w-48 h-60 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group animate-bounce-y">
            <img
              src={image3}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 group-hover:from-black/70 transition-all duration-300"/>
            <div className="relative z-10 p-6 text-white">
              <FontAwesomeIcon icon={faCircleQuestion} className="w-6 h-6 absolute top-4 right-4" />
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="text-gray-200">Contact us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
