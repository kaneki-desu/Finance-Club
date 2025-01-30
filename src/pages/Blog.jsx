import React from "react";
import BlogCard from "../Components/BlogCard";
import BlogData from "../Data/Blogdata";
import ParticleBackground from '../Components/Particle';

// import BlurFade from "./ui/BlurFade";

const BlogSection = () => {
  return (
    

    
    <section className="bg-transparent py-20 pt-32">
      <div className="container mx-auto px-6">
        {/* <BlurFade> */}
          <h1 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Blog
          </h1>
        {/* </BlurFade> */}
        <div className="-mx-4 flex flex-wrap">
          {BlogData.map((post, index) => (
            <BlogCard key={index} title={post.title} content={post.content} imageUrl={post.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;