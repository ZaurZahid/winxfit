import { useState } from "react";
import CheckIcon from "./../ui/icons/Check";
import Accordion from "./../ui/Accordion";
import { useTranslation, Trans } from "next-i18next";
import mockFaq from "./../../../mock/questions";
import Button from "./../ui/Button";
import { useJoinModal } from "../../context/JoinModalContext";

export default function Membership() {
  const { t } = useTranslation("common");
  const [selectedPlan, setSelectedPlan] = useState("annual");
  const { openJoinModal } = useJoinModal();

  return (
    <div
      id="membership"
      className="w-full flex justify-center mt-8 relative py-14 lg:py-16 scroll-mt-24 lg:scroll-mt-28"
    >
      <div className="max-w-[1440px] w-full px-6 sm:px-8 md:px-16 lg:px-20">
        <div className="relative w-full">
          <div className="flex flex-col items-center m-auto text-center pt-8">
            <h1 className="relative text-4xl md:text-5xl mb-6 leading-tight lg:max-w-4xl">
              <Trans
                i18nKey={t("membership.title_header")}
                components={{
                  bold: <strong className="font-bold" />,
                }}
              />

              <img
                src="/membership-top-left.png"
                alt="membership-top-left"
                className="absolute -top-16 sm:-top-10 -left-6 sm:-left-8 lg:-left-24 2xl:-left-24 z-10 h-16 lg:h-20 2xl:h-16 animate-float-left"
              />
              <img
                src="/membership-top-right.png"
                alt="membership-top-right"
                className="absolute -top-10 sm:-top-5 -right-10 sm:-right-12 lg:-right-32 2xl:-right-28 z-10 h-12 lg:h-16 2xl:h-12 animate-float-right"
              />
            </h1>

            <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-stretch mb-8 w-full lg:max-w-2xl mx-auto lg:mt-10">
              <button
                onClick={() => setSelectedPlan("annual")}
                className={`flex-1 relative p-3 rounded-2xl border-2 transition-all ${
                  selectedPlan === "annual"
                    ? "border-green-500 bg-white shadow-2xl"
                    : "border-gray-300 hover:border-gray-300"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="text-left">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">
                      {t("membership.annually")} {t("membership.save_percent")}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                        £199.9
                      </span>
                      <span className="text-sm text-gray-600">
                        {t("membership.billed_yearly")}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      selectedPlan === "annual"
                        ? "bg-green-500"
                        : "border-2 border-gray-300"
                    }`}
                  >
                    {selectedPlan === "annual" && (
                      <CheckIcon
                        className="w-6 h-6"
                        fillColor={"fill-green-500"}
                      />
                    )}
                  </div>
                </div>
              </button>

              <button
                onClick={() => setSelectedPlan("monthly")}
                className={`flex-1 relative p-3 rounded-2xl border-2 transition-all ${
                  selectedPlan === "monthly"
                    ? "border-green-500 bg-white shadow-2xl"
                    : "border-gray-300 hover:border-gray-300"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="text-left">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">
                      {t("membership.monthly")}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                        £19.99
                      </span>
                      <span className="text-sm text-gray-600">
                        {t("membership.billed_monthly")}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      selectedPlan === "monthly"
                        ? "bg-green-500"
                        : "border-2 border-gray-300"
                    }`}
                  >
                    {selectedPlan === "monthly" && (
                      <CheckIcon
                        className="w-6 h-6"
                        fillColor={"fill-green-500"}
                      />
                    )}
                  </div>
                </div>
              </button>

              <img
                src="/membership-arrow.png"
                alt="membership-arrow"
                className="absolute hidden lg:block -top-20 lg:-left-56 z-10 h-12 lg:h-20 animate-float-left-delayed"
              />
            </div>

            <div className="h-[1px] w-full lg:w-[45%] bg-gray-300 mt-4 mb-8 mx-auto" />

            <h3 className="relative text-xl md:text-2xl mb-6 leading-tight italic lg:max-w-[42%]">
              <Trans
                i18nKey={t("membership.join_offer")}
                components={{
                  bold: <strong className="font-bold" />,
                }}
              />
              <img
                src="/tick-top.png"
                alt="tick top"
                className="absolute -top-1 -left-2 lg:-left-1 z-10 h-5"
              />
              <img
                src="/tick-bottom.png"
                alt="tick bottom"
                className="absolute -bottom-1 -right-3 sm:right-72 lg:right-32 z-10 h-5"
              />
            </h3>

            <Button
              text={t("buttons.early_access")}
              onClick={openJoinModal}
              classes={
                "bg-dark hover:bg-orange text-white whitespace-nowrap h-12"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
