import axios from "axios";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // For error handling
  const [expandedPostId, setExpandedPostId] = useState(null); // To track which post is expanded

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/blog");
      setData(response.data);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch data"); // Set error state
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
    <div className="bg-gray-900 min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-white text-4xl font-bold text-center mb-12">Blogs</h1>

        {/* Show error if any */}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="space-y-12">
          {data.length > 0 ? (
            data.map((blog) => (
              <div
                key={blog._id}
                className="bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300"
              >
                {/* Left: Blog Image */}
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                </div>

                {/* Right: Blog Title and Body */}
                <div className="w-full md:w-2/3 md:pl-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">{blog.title}</h2>
                  <p className="text-gray-300 mb-6">
                    {expandedPostId === blog._id
                      ? blog.body
                      : `${blog.body.substring(0, 150)}...`}
                  </p>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleReadMoreClick(blog._id)}
                      className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200"
                    >
                      {expandedPostId === blog._id ? "Show Less" : "Read More"}
                    </button>

                    {/* Blog Stats */}
                    <ul className="flex space-x-4 text-gray-400">
                      <li className="flex items-center space-x-2">
                        <i className="fa fa-eye" aria-hidden="true"></i>
                        <span>123</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <span>56</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span>14</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                        <span>8</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No blogs available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
