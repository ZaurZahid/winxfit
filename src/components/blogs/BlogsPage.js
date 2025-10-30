import React, { useState } from "react";
import BlogList from "./../blogs/BlogList";
import Button from "../ui/Button";
import Pagination from "../ui/Pagination";
import ArrowIcon from "../ui/icons/Arrow";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import blogsMock from "../../../mock/blogs";

function BlogPage() {
  const { t } = useTranslation("common");
  const router = useRouter();

  // Pagination State
  const [currentPage, setCurrentPage] = useState(blogsMock.current_page || 1); // Default from SSR
  const [itemsPerPage, setItemsPerPage] = useState(blogsMock.per_page || 10);
  const [blogs, setBlogs] = useState(
    blogsMock.items.slice(0, itemsPerPage) || []
  ); // Blog results
  const [totalItems, setTotalItems] = useState(blogsMock.total_count || 0); // Total number of items

  // Function to fetch data for a specific page
  const fetchBlogs = async (page, perPage) => {
    try {
      // Simulate API delay (optional)
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Slice data for the current page
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;

      const paginatedItems = blogsMock.items.slice(startIndex, endIndex);

      // Update state using mock
      setCurrentPage(page);
      setItemsPerPage(perPage);
      setBlogs(paginatedItems);
      setTotalItems(blogsMock.total_count);

      // Optional scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Error loading mock blogs:", error);
    }
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    fetchBlogs(pageNumber, itemsPerPage);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (perPage) => {
    setItemsPerPage(perPage);
    fetchBlogs(1, perPage); // Reset to first page on change
  };

  return (
    <div className="w-full flex justify-center relative py-6 lg:py-16 scroll-mt-28 lg:scroll-mt-52">
      <div className="absolute max-w-[1536px] w-full left-1/2 -translate-x-1/2 top-0 z-0">
        <img
          src="/Get healthy.png"
          alt="Get healthy background"
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-[1440px] w-full px-6 sm:px-8 md:px-16 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div className="flex flex-col">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-2xl">
              {t("blogSection.title")}
            </h2>
          </div>
        </div>

        <BlogList blogs={blogs} />

        <Pagination
          itemsPerPage={itemsPerPage}
          setItemsPerPage={handleItemsPerPageChange}
          totalItems={totalItems}
          paginate={handlePageChange}
          currentPage={currentPage}
          className="mt-8"
        />
      </div>
    </div>
  );
}

export default BlogPage;
