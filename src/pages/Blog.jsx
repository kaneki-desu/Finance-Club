import React, { useState } from 'react';
import Blogdata from '../Data/Blogdata';
import useTheme from '../contexts/theme';
import BlogCard from '../Components/BlogCard';
import ParticlesComponent from '../Components/Particle';

const Blog = () => {
  const { themeMode } = useTheme(); 
  const [data, setData] = useState(Blogdata); 
  const [expandedPostId, setExpandedPostId] = useState(null); 

  const handleReadMoreClick = (id) => {
    setExpandedPostId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div
      className={`relative ${
        themeMode === 'light' ? 'bg-gray-50 text-gray-900' : 'bg-black text-gray-100'
      }`}
    >
      <div className="fixed inset-0 z-0">
        <ParticlesComponent id="blog-particles" />
      </div>

      <div className="relative px-6 pt-11 pb-20 lg:px-8 lg:pt-11 lg:pb-28 mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Blogs</h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {Blogdata.length > 0 ? (
            Blogdata.map((blog) => (
              <div
                key={blog._id}
                className={`flex flex-col overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ${
                  themeMode === 'light' ? 'bg-white hover:shadow-2xl' : 'bg-black hover:shadow-gray-700'
                }`}
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={blog.image}
                    alt={blog.title}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href="#" className="hover:underline">
                        {blog.category}
                      </a>
                    </p>
                    <a href="#" className="mt-2 block">
                      <p className="text-xl font-semibold hover:text-indigo-600 transition-colors duration-200">
                        {blog.title}
                      </p>
                      <p
                        className={`mt-3 text-base transition-max-height duration-500 ease-in-out overflow-hidden ${
                          expandedPostId === blog._id ? 'max-h-screen' : 'max-h-24'
                        }`}
                      >
                        {blog.body}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#">
                        <span className="sr-only">{blog.author}</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={blog.authorImage}
                          alt={blog.author}
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        <a href="#" className="hover:underline">
                          {blog.author}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm">
                        <time dateTime={blog.date}>{blog.date}</time>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleReadMoreClick(blog._id)}
                    className={`mt-4 py-2 px-4 rounded hover:ring-4 transition duration-200 ${
                      themeMode === 'light'
                        ? 'bg-black text-white hover:bg-black ring-black'
                        : 'bg-white text-gray-900 hover:bg-white ring-white'
                    }`}
                  >
                    {expandedPostId === blog._id ? 'Show Less' : 'Read More'}
                  </button>
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

