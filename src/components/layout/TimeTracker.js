import React from "react";
import { useTranslation, Trans } from "next-i18next";
import Button from "./../ui/Button";
import featuresMock from "./../../../mock/features";

function TimeTracker() {
  const { t } = useTranslation("common");

  return (
    <div
      id="features-a"
      className="relative bg-white overflow-hidden w-full flex justify-center relative py-14 lg:py-16 scroll-mt-28 lg:scroll-mt-32"
    >
      <div className="max-w-[1440px] w-full px-6 sm:px-8 md:px-16 lg:px-20 relative z-20">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex flex-col lg:max-w-xl min-w-[50%] lg:pr-8">
            <img
              src="/timetracker.png"
              alt="timetracker"
              className="h-[380px] sm:h-[700px] lg:h-[600px] animate-float-right"
            />
          </div>
          <div className="grow">
            <div className="relative lg:max-w-[95%] flex lg:ml-auto mt-10 lg:mt-0">
              <div className="space-y-8">
                <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {t("timetracker.title_header")}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t("timetracker.title_desc")}
                </p>

                <h3 className="text-3xl md:text-4xl mb-6">
                  <Trans
                    i18nKey={t("timetracker.reserve_your_spot")}
                    components={{
                      bold: <strong className="font-bold" />,
                    }}
                  />
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
          </div>
        </div>
      </div>

      <img
        src="/section-pattern-4x.png"
        alt="section pattern"
        className="absolute z-10 right-0 lg:-right-[20%] bottom-0 object-cover lg:-top-8 max-w-[65%] h-[36rem] md:h-[60rem]"
      />
    </div>
  );
}

export default TimeTracker;
