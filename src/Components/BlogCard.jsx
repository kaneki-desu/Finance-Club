import React, { useState } from "react";

const BlogCard = ({ title, content, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <button
      className="w-full transform p-4 transition-all duration-300 hover:scale-105 sm:w-1/2 md:w-1/3 lg:w-1/4"
      onClick={toggleExpand}
      aria-expanded={isExpanded}
    >
      <div className="group overflow-hidden rounded-lg border border-slate-600 bg-slate-800/35 shadow-lg transition-all duration-300 hover:bg-white/95">
        <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-gray-50 transition-all duration-300 group-hover:text-gray-800 sm:text-2xl lg:text-3xl">
            {title}
          </h3>
          <p className="text-base text-gray-200 transition-all duration-300 group-hover:text-gray-700 lg:text-lg">
            {isExpanded ? content : `${content.substring(0, 100)}...`}
          </p>
        </div>
      </div>
    </button>
  );
};

export default BlogCard;