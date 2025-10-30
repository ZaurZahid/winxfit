import React from "react";
import { useTranslation } from "next-i18next";
import Breadcrumb from "../ui/Breadcrumb";
import Facebook from "../ui/icons/Facebook";
import Linkedin from "../ui/icons/Linkedin";
import { formatDate } from "../../hooks/formatDate";

function BlogDetail() {
  const { t } = useTranslation("common");
  const post = {
    id: 101,
    title: "1Gold Prices Reach Record Highs",
    created_at: "2025-10-20T09:15:00Z",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    short_content:
      "Global gold prices surged this week due to market volatility.",
    content:
      '<article><h1>Gold Prices Reach Record Highs</h1><p>Gold prices have reached a new record high this week as investors seek safe-haven assets amid economic uncertainty. <strong>Analysts predict further growth</strong> if inflation continues to rise.</p><p>Read more on the market <a href="https://example.com/markets">here</a>.</p></article>',
  };

  const shareToSocial = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);

    if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "_blank"
      );
    } else if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        "_blank"
      );
    } else if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        "_blank"
      );
    }
  };

  return (
    <div className="w-full flex justify-center relative py-8 lg:py-10 scroll-mt-28 lg:scroll-mt-52">
      <div className="max-w-[1440px] w-full px-6 sm:px-8 md:px-16 lg:px-20 relative z-10">
        <div className="flex flex-col w-full">
          <div className="text-gray-600 text-sm mb-2 text-center">
            {formatDate(post.created_at)}
          </div>
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            {post.title}
          </h1>
          <img
            className="w-full rounded-3xl mt-8 min-h-72 max-h-80 object-cover"
            src={post.image}
            alt="Blog post image"
          />
        </div>
        <div
          className="prose text-gray-700 my-8 max-w-3xl mx-auto w-full px-8 md:px-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="max-w-3xl mx-auto w-full px-8 md:px-16">
          <h6 className="text-xs font-bold text-gray-800 mb-3">
            {t("buttons.share")}:
          </h6>
          <div className="flex space-x-4">
            <button
              onClick={() => shareToSocial("facebook")}
              className="group transition duration-300"
            >
              <Facebook className="stroke-gray-500 hover:stroke-black transition duration-300" />
            </button>
            <button
              onClick={() => shareToSocial("linkedin")}
              className="group transition duration-300"
            >
              <Linkedin className="stroke-gray-500 hover:stroke-black transition duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
