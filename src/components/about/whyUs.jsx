import React from 'react';
import Founder from '../../assets/images/mufti-sahab.jpg';

function WhyUs() {
  return (

    
      <div className="bg-gray-200 flex flex-col items-center justify-center pt-20 pb-20">
        {/* Title */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-black via-darkgreen-700 to-white text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-wide uppercase text-shadow-lg">
        Mufti Salman
</h1>


        {/* Founder Image */}
        <div className="relative w-64 h-96 md:-translate-y-3 -translate-y-0   border-4 border-white shadow-lg">
          <img
            src={Founder}
            alt="Mufti Salman"
            className="w-full h-full object-cover rounded-md transform rotate-3"
          />
        </div>

        {/* Subtitle */}
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-black via-darkgreen-700 to-white text-xl sm:text-3xl md:text-5xl lg:text-5xl font-bold tracking-wide uppercase">Azhari</h2>
        <div className="text-black mt-12 text-center p-10 md:p-24 font-light md:text-2xl text-xl italic">Mufti Salman Azhari is a renowned Islamic scholar celebrated for his deep knowledge and impactful teachings. A graduate of Al-Azhar University, he combines traditional wisdom with modern insights to guide communities worldwide. His dedication to fostering spiritual growth and understanding has earned him great respect and admiration.</div>
      </div>


  
  );
}

export default WhyUs;
