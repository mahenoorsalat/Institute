import React from "react";
import Collection from '../../assets/images/newcollection.png'


const NewCollection = () => {
  return (
<>
<h2 className="text-2xl h1welcometext text-center text-green-950 font-serif italic mb-10">
New Series Collection
</h2>

    <div className="bg-gray-200 rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">
      {/* Text Section */}
      <div className="flex flex-col items-start">
     
        <p className="text-lg text-gray-600 font-bold mb-6">
          Discover the latest additions to our library! Start your journey with
          our curated selection of series collections.
        </p>
     <p className="text-xs text-gray-600 mb-6">6 chapter each Vol</p>
      </div>

      {/* Banner Image */}
      <div className="mt-6 md:mt-0">
        <img
          src={Collection}
          alt="New Series Banner"
          className="w-56 h-auto "
        />
      </div>
    </div>

    </>
  );
};

export default NewCollection;
