import React from "react";
import Link from "next/link";
import { formatDate } from "../../hooks/formatDate";
import { trimText } from "../../hooks/trimText";

const BlogCard = ({
  post: { id, title, created_at, image, content, short_content },
}) => {
  return (
    <Link
      href={`/blogs/${id}`}
      className="bg-white block border border-solid border-1 border-white max-w-sm rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 relative z-10"
    >
      <img
        className="w-full rounded-3xl rounded-b-none object-cover h-44 md:h-56"
        src={image}
        alt="Blog image"
      />
      <div className="p-6">
        <div className="text-gray-900 font-bold text-xl">
          {trimText(title, 28)}
        </div>
        <div className="text-gray-600 text-sm pt-2">
          {formatDate(created_at)}
        </div>
        <div
          className="prose text-gray-700 text-base pt-4"
          dangerouslySetInnerHTML={{ __html: short_content }}
        />
      </div>
    </Link>
  );
};

export default BlogCard;
