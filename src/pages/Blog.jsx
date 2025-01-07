import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // For error handling
  const [expandedPostId, setExpandedPostId] = useState(null); // To track which post is expanded

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/blog');
      setData(response.data);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch data'); // Set error state
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Function to handle the Read More/Show Less toggle
  const handleReadMoreClick = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id); // Toggle between expanded and collapsed state
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 lg:mb-12">
        Blogs
      </h1>

      {/* Show error if any */}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="space-y-8">
        {data.length > 0 ? (
          data.map((blog) => (
            <div
              key={blog._id}
              className="bg-slate-950 shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Left: Blog Image */}
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>

              {/* Right: Blog Title and Body */}
              <div className="w-full md:w-2/3 md:pl-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-white">
                  {blog.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-4">
                  {expandedPostId === blog._id
                    ? blog.body
                    : `${blog.body.substring(0, 150)}...`}
                </p>
                
                <button
                  onClick={() => handleReadMoreClick(blog._id)}
                  className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-200"
                >
                  {expandedPostId === blog._id ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
