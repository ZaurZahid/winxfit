import Star from "../ui/icons/Star";
import Accordion from "./../ui/Accordion";
import { useTranslation } from "next-i18next";
import mockFaq from "./../../../mock/questions";
import Button from "./../ui/Button";
import { useJoinModal } from "../../context/JoinModalContext";

export default function WorkWith() {
  const { t } = useTranslation("common");
  const { openJoinModal } = useJoinModal();

  return (
    <div
      id="work-with"
      className="bg-white w-full flex justify-center mt-8 relative py-14 lg:py-16 scroll-mt-24 lg:scroll-mt-28"
    >
      <div className="max-w-[1440px] w-full px-6 sm:px-8 md:px-16 lg:px-20">
        <div className="relative w-full">
          <div className="absolute top-0 left-0 sm:left-[10%] lg:left-[5%] animate-float">
            <div className="bg-white rounded-2xl shadow-lg px-3 lg:px-5 py-2 lg:py-3 flex items-center gap-2">
              <img
                src="/apple_health.svg"
                alt="apple_health"
                className="w-6 h-6 lg:w-10 lg:h-10 transition-transform group-hover:scale-110"
              />
              <span className="font-bold text-sm">Apple Health</span>
            </div>
          </div>

          <div className="absolute top-0 right-0 sm:right-[10%] lg:right-[5%] animate-float-delayed">
            <div className="bg-white rounded-2xl shadow-lg px-3 lg:px-5 py-2 lg:py-3 flex items-center gap-2">
              <img
                src="/apple_watch.svg"
                alt="apple_watch"
                className="w-6 h-6 lg:w-10 lg:h-10 transition-transform group-hover:scale-110"
              />
              <span className="font-bold text-sm">Apple Watch</span>
            </div>
          </div>

          <div className="absolute top-[12%] sm:top-[50%] lg:top-[35%] left-[35%] sm:left-0 lg:left-[2%] animate-float">
            <div className="bg-white rounded-2xl shadow-lg px-3 lg:px-5 py-2 lg:py-3 flex items-center gap-2">
              <img
                src="/fitbit.svg"
                alt="fitbit"
                className="w-6 h-6 lg:w-10 lg:h-10 transition-transform group-hover:scale-110"
              />
              <span className="font-bold text-sm">FitBit</span>
            </div>
          </div>

          <div className="absolute top-[78%] sm:top-[50%] lg:top-[35%] right-[35%] sm:right-0 lg:right-[2%] animate-float-delayed">
            <div className="bg-white rounded-2xl shadow-lg px-3 lg:px-5 py-2 lg:py-3 flex items-center gap-2">
              <img
                src="/strava.svg"
                alt="strava"
                className="w-6 h-6 lg:w-10 lg:h-10 transition-transform group-hover:scale-110"
              />
              <span className="font-bold text-sm">Strava</span>
            </div>
          </div>

          <div className="absolute bottom-[5%] lg:bottom-[15%] left-0 sm:left-[15%] lg:left-[8%] animate-float">
            <div className="bg-white rounded-2xl shadow-lg px-3 lg:px-5 py-2 lg:py-3 flex items-center gap-2">
              <img
                src="/google_fit.svg"
                alt="google_fit"
                className="w-6 h-6 lg:w-10 lg:h-10 transition-transform group-hover:scale-110"
              />
              <span className="font-bold text-sm">Google Fit</span>
            </div>
          </div>

          <div className="absolute bottom-[5%] lg:bottom-[15%] right-0 sm:right-[15%] lg:right-[8%] animate-float-delayed">
            <div className="bg-white rounded-2xl shadow-lg px-3 lg:px-5 py-2 lg:py-3 flex items-center gap-2">
              <img
                src="/garmin.svg"
                alt="garmin"
                className="w-6 h-6 lg:w-10 lg:h-10 transition-transform group-hover:scale-110"
              />
              <span className="font-bold text-sm">Garmin</span>
            </div>
          </div>

          <div className="flex flex-col items-center m-auto text-center max-w-xl pt-32 pb-32 lg:pt-20 lg:pb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t("work_with.title_header")}
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              {t("work_with.title_desc")}
            </p>
            <Button
              text={t("buttons.join_the_list")}
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
