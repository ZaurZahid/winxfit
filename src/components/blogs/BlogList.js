import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-4">
      {blogs.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
