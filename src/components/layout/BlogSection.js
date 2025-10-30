import React from "react";
import BlogList from "./../blogs/BlogList";
import Button from "../ui/Button";
import ArrowIcon from "../ui/icons/Arrow";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import blogsMock from "../../../mock/blogs";

function BlogSection() {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div
      id="blogs"
      className="w-full flex justify-center relative py-14 lg:py-16 scroll-mt-28 lg:scroll-mt-52 mt-0 sm:mt-4 lg:mt-20"
    >
      <div className="absolute max-w-[1536px] w-full left-1/2 -translate-x-1/2 top-0 md:-top-[1rem] lg:-top-[5rem] z-0">
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
          <Button
            text={t("buttons.read_more")}
            IconComponent={<ArrowIcon strokeColor={"stroke-white"} />}
            onClick={() => router.push("/blogs")}
            classes={
              "hidden md:flex mt-6 lg:mt-0 md:ml-6 bg-black hover:bg-orange text-white whitespace-nowrap h-11"
            }
          />
        </div>

        <BlogList blogs={blogsMock.items.slice(0, 3)} />

        <Button
          text={t("buttons.read_more")}
          IconComponent={<ArrowIcon strokeColor={"stroke-white"} />}
          onClick={() => router.push("/blogs")}
          classes={
            "md:hidden mt-12 bg-black hover:bg-orange text-white whitespace-nowrap h-11 relative z-10"
          }
        />
      </div>
    </div>
  );
}

export default BlogSection;
