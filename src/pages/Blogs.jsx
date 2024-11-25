import React, { useState, useEffect } from "react";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Medium blogs (replace the URL with the actual API endpoint for Muslim blogs)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://api.sampleapis.com/muslim/authors"); // Replace with a real Medium API for Muslim authors
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="mt-20 p-9 min-h-screen">
      {/* Header */}
      <header className="md:flex-row flex-col flex justify-between mb-20">
        <div>
          <h1 className="text-4xl font-bold mb-2">Muslim Authors' Blogs</h1>
          <p className="text-gray-600">Discover inspiring blogs by Muslim authors on Medium.</p>
        </div>
        <div className="border-2 border-gray-300 rounded-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border-none focus:outline-none"
          />
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Subscribe
          </button>
        </div>
      </header>

      {/* Blog Posts Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        {loading ? (
          <p className="text-center col-span-full text-gray-600">Loading posts...</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="rounded-2xl">
              {/* Blog Image with fixed height */}
              <div className="relative h-[80%] rounded-2xl"> {/* Adjust height as needed */}
                <img
                  src={post.image || "https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt={post.title || "Blog Image"}
                  className="w-full h-full object-cover"
                />
                
                {/* Text Overlay positioned on 30% of the image height */}
                <div className="absolute bottom-0 rounded-2xl left-0 right-0 bg-black bg-opacity-40 backdrop-blur-md p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {post.title || "Blogs"}
                  </h3>
                  <p className="text-gray-200 mt-2">
                    {post.description || "This Blog needs a description via API."}
                  </p>
                  <a
                    href={post.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-blue-500 font-semibold hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Blogs;
