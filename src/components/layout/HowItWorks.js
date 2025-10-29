import React from "react";
import { useTranslation } from "next-i18next";
import howItWorksMock from "./../../../mock/howItWork";

function HowItWorks() {
  const { t } = useTranslation("common");

  return (
    <div
      id="how-it-works"
      className="bg-red-100 w-full flex justify-center relative py-14 lg:py-16 lg:pt-8 scroll-mt-28 lg:scroll-mt-52 mt-12 lg:mt-36"
    >
      <div className="absolute max-w-[1536px] w-full left-1/2 -translate-x-1/2 top-0 md:-top-[1rem] lg:-top-[5rem] z-0">
        <img
          src="/How it works_.png"
          alt="How it works_ background"
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-[1440px] w-full px-6 sm:px-8 md:px-16 lg:px-20 relative z-10">
        <div className="flex flex-col items-center w-full border border-red-900">
          <div className="flex flex-col w-full border border-red-900">
            <div className="mb-4md:mb-10">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                {t("how_it_works.title_header")}
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              {howItWorksMock.map((step, index) => (
                <div
                  key={index}
                  className={`flex ${
                    step.align === "right" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                  bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8
                  w-full md:max-w-2xl lg:max-w-3xl
                  transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]
                  ${step.align === "right" ? "md:ml-auto" : "md:mr-auto"}
                `}
                  >
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                      {/* Number Badge */}
                      <div className="flex-shrink-0">
                        <div
                          className={`bg-red-100 rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-300 hover:scale-110`}
                        >
                          <span className="text-2xl md:text-5xl font-black text-orange border border-black">
                            <img
                              src={`/step${step.number}.gif`}
                              alt="step number"
                            />
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
