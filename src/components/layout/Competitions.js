import React from "react";
import { useTranslation } from "next-i18next";
import Button from "./../ui/Button";

function Competitions() {
  const { t } = useTranslation("common");

  return (
    <div
      id="competitions"
      className="bg-white w-full flex justify-center relative py-14 lg:py-16 scroll-mt-28 lg:scroll-mt-52 mt-12 lg:mt-36"
    >
      <div className="absolute max-w-[1536px] w-full left-1/2 -translate-x-1/2 top-0 md:-top-[1rem] lg:-top-[5rem] z-0">
        <img
          src="/Compatitions.png"
          alt="Compatitions background"
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-[1440px] w-full px-6 sm:px-8 md:px-16 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:max-w-xl min-w-[50%] border border-red-900 pr-8">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t("competitions.title_header")}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t("competitions.title_desc")}
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                {t("competitions.first_to_know")}
              </h3>

              <Button
                text={t("buttons.join_the_list")}
                // onClick={onOpen}
                classes={
                  "bg-dark hover:bg-orange text-white whitespace-nowrap h-12"
                }
              />
            </div>
          </div>
          <div className="grow border border-red-900">
            <div className="relative border border-red-900 mt-10 lg:mt-0">
              <img
                src="/competitions-group.png"
                alt="competitions-group"
                className="h-[350px] sm:h-[500px] animate-float-left" /* animate-float-left */
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competitions;
