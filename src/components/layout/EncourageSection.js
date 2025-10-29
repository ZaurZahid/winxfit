import React from "react";
import { useTranslation } from "next-i18next";
import Button from "./../ui/Button";

function EncourageSection() {
  const { t } = useTranslation("common");

  return (
    <div
      id="about"
      className="bg-red-800 w-full flex justify-center mt-8 relative py-14 lg:py-16 scroll-mt-28 lg:scroll-mt-60 -mt-12 md:-mt-28"
    >
      <div className="absolute max-w-[1536px] w-full left-1/2 -translate-x-1/2 top-0 md:-top-[1rem] lg:-top-[5rem] z-0">
        <img
          src="/What is WinxFit_.png"
          alt="Get healthy background"
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-[1440px] w-full px-6 sm:px-8 md:px-16 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end">
          <div className="flex flex-col lg:max-w-2xl min-w-[55%] border border-red-900">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {t("aboutus.title_header")}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t("aboutus.title_desc")}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-6">
                  {t("aboutus.our_values")}
                </h3>
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-white rounded-2xl p-4 group flex flex-col transition-transform">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-3 transition-all bg-[#F5F5F5] group-hover:shadow-lg">
                      <img
                        src="/transparency.png"
                        alt="transparency"
                        className="w-10 h-10 transition-transform group-hover:scale-110"
                      />
                    </div>
                    <span className="font-semibold text-base md:text-lg">
                      {t("aboutus.transparancy")}
                    </span>
                  </div>

                  <div className="bg-white rounded-2xl p-4 group flex flex-col transition-transform">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-3 transition-all bg-[#F5F5F5] group-hover:shadow-lg">
                      <img
                        src="/transparency.png"
                        alt="transparency"
                        className="w-10 h-10 transition-transform group-hover:scale-110"
                      />
                    </div>
                    <span className="font-semibold text-base md:text-lg">
                      {t("aboutus.accessibility")}
                    </span>
                  </div>

                  <div className="bg-white rounded-2xl p-4 group flex flex-col transition-transform">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-3 transition-all bg-[#F5F5F5] group-hover:shadow-lg">
                      <img
                        src="/transparency.png"
                        alt="transparency"
                        className="w-10 h-10 transition-transform group-hover:scale-110"
                      />
                    </div>
                    <span className="font-semibold text-base md:text-lg">
                      {t("aboutus.community")}
                    </span>
                  </div>
                </div>
              </div>

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
            <div className="relative border border-red-900 mt-10 lg:mt-0 lg:ml-20">
              <img
                src="/encourage1.png"
                alt="encourage1"
                className="h-80 sm:h-96 animate-float-left"
              />
              <img
                src="/encourage2.png"
                alt="encourage1"
                className="h-40 sm:h-52 absolute bottom-0 right-0 animate-float-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EncourageSection;
